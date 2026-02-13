import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { Colors, Layout } from '../../constants/Colors';
import { getUserResultsFromFirestore, QuizResult } from '../../utils/storage';
import { Card } from '../../components/Card';

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState(auth.currentUser);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [averageScore, setAverageScore] = useState(0);
  const [rank, setRank] = useState("Çaylak");
  const [refreshing, setRefreshing] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch user data if available
        const docRef = doc(db, "users", currentUser.uid);
        getDoc(docRef).then(docSnap => {
           if (docSnap.exists()) {
             setUserData(docSnap.data());
           }
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    if (user) {
        // Fetch from Firestore
        const data = await getUserResultsFromFirestore(user.uid);
        setResults(data);
        calculateStats(data);
    } else {
        // Guest mode: Empty or local storage if we decided to use it (but we didn't save for guest)
        setResults([]);
        setAverageScore(0);
        setRank("Çaylak");
    }
  };

  const calculateStats = (data: QuizResult[]) => {
      if (data.length > 0) {
        let totalPercentage = 0;
        data.forEach(r => {
             const p = r.maxScore > 0 ? (r.score / r.maxScore) * 100 : 0;
             totalPercentage += p;
        });
        const avg = Math.round(totalPercentage / data.length);
        setAverageScore(avg);

        // Determine Rank
        if (avg <= 20) setRank("Pamuk Prenses/Prens");
        else if (avg <= 50) setRank("İdare Eder");
        else if (avg <= 80) setRank("Zehirli Sarmaşık");
        else setRank("Toksiklik Lordu");

      } else {
        setAverageScore(0);
        setRank("Çaylak");
      }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [user])
  );

  const onRefresh = async () => {
      setRefreshing(true);
      await loadData();
      if (user) {
         // Optionally refresh user data too
         const docRef = doc(db, "users", user.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
             setUserData(docSnap.data());
         }
      }
      setRefreshing(false);
  };

  const handleLogout = async () => {
      try {
          await signOut(auth);
          // router.replace('/(auth)/login'); // Removed to stay on profile as Guest
      } catch (e) {
          Alert.alert("Hata", "Çıkış yapılırken bir sorun oluştu.");
      }
  };

  const renderHistoryItem = ({ item }: { item: QuizResult }) => {
      const p = item.maxScore > 0 ? Math.round((item.score / item.maxScore) * 100) : 0;
      let color = Colors.primary;
      if (p <= 20) color = "#10B981";
      else if (p <= 50) color = "#FBBF24";
      else if (p <= 80) color = "#EF4444";
      else color = "#7F1D1D";

      return (
        <Card style={styles.historyCard}>
            <View>
                <Text style={styles.historyTitle}>{item.testTitle}</Text>
                <Text style={styles.historyDate}>{new Date(item.date).toLocaleDateString()}</Text>
            </View>
            <View style={styles.scoreBadge}>
                <Text style={[styles.scoreText, { color: color }]}>%{p}</Text>
            </View>
        </Card>
      );
  };

  return (
    <View style={styles.container}>
      {/* Header Stats */}
      <View style={styles.header}>
          <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                  {userData?.username ? userData.username.charAt(0).toUpperCase() : (user?.email ? user.email.charAt(0).toUpperCase() : 'M')}
              </Text>
          </View>
          <Text style={styles.username}>
              {userData?.username || user?.email?.split('@')[0] || "Misafir"}
          </Text>
          
          <View style={styles.statsRow}>
              <View style={styles.statItem}>
                  <Text style={styles.statValue}>%{averageScore}</Text>
                  <Text style={styles.statLabel}>Ort. Toksiklik</Text>
              </View>
              <View style={[styles.statItem, styles.rankItem]}>
                  <Text style={styles.statValue}>{rank}</Text>
                  <Text style={styles.statLabel}>Rütbe</Text>
              </View>
              <View style={styles.statItem}>
                  <Text style={styles.statValue}>{results.length}</Text>
                  <Text style={styles.statLabel}>Test</Text>
              </View>
          </View>

          {user && (
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Çıkış Yap</Text>
            </TouchableOpacity>
          )}
          {!user && (
              <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={styles.logoutButton}>
                  <Text style={styles.logoutText}>Giriş Yap</Text>
              </TouchableOpacity>
          )}
      </View>

      <Text style={styles.sectionTitle}>Geçmiş Testler</Text>

      <FlatList
        data={results}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={<Text style={styles.emptyText}>Henüz test çözmedin.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
  },
  header: {
      alignItems: 'center',
      paddingHorizontal: Layout.spacing.lg,
      marginBottom: Layout.spacing.xl,
  },
  avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: Colors.gray,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: Layout.spacing.sm,
      borderWidth: 2,
      borderColor: Colors.primary,
  },
  avatarText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: Colors.primary,
  },
  username: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.text,
      marginBottom: Layout.spacing.lg,
  },
  statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: Layout.spacing.md,
      borderRadius: Layout.radius.md,
      shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
  },
  statItem: {
      alignItems: 'center',
      flex: 1,
  },
  rankItem: {
      flex: 1.5, // Give rank more space
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: Colors.gray,
  },
  statValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.primary,
      marginBottom: 2,
      textAlign: 'center',
  },
  statLabel: {
      fontSize: 12,
      color: Colors.grayDark,
  },
  sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: Layout.spacing.md,
      marginBottom: Layout.spacing.md,
      color: Colors.text,
  },
  listContent: {
      paddingHorizontal: Layout.spacing.md,
      paddingBottom: Layout.spacing.xl,
  },
  historyCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: Layout.spacing.md,
      marginBottom: Layout.spacing.sm,
      backgroundColor: '#FFFFFF',
      borderRadius: Layout.radius.md,
      borderWidth: 1,
      borderColor: Colors.gray,
  },
  historyTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.text,
      marginBottom: 4,
  },
  historyDate: {
      fontSize: 12,
      color: Colors.grayDark,
  },
  scoreBadge: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  scoreText: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  emptyText: {
      textAlign: 'center',
      color: Colors.grayDark,
      marginTop: 20,
  },
  logoutButton: {
      marginTop: Layout.spacing.md,
      paddingVertical: Layout.spacing.xs,
      paddingHorizontal: Layout.spacing.md,
      borderRadius: Layout.radius.full,
      borderWidth: 1,
      borderColor: Colors.primary,
  },
  logoutText: {
      color: Colors.primary,
      fontWeight: '600',
  }
});
