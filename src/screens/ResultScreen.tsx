import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Layout } from '../constants/Colors';
import { Button } from '../components/Button';
import { saveResultToFirestore } from '../utils/storage';
import { auth } from '../config/firebase';

export default function ResultScreen() {
    const { score, total, testTitle } = useLocalSearchParams();
    const router = useRouter();
    
    // Convert params to numbers safely
    const finalScore = Number(score) || 0;
    const maxScore = Number(total) || 0;
    const titleToSave = typeof testTitle === 'string' ? testTitle : 'Toksiklik Testi';

    // Calculate percentage
    const percentage = maxScore > 0 ? Math.round((finalScore / maxScore) * 100) : 0;

    // Determine Level and Description
    let levelTitle = "";
    let levelEmoji = "";
    let levelDescription = "";
    let levelColor = Colors.primary;

    if (percentage <= 20) {
        levelTitle = "Pamuk Şeker";
        levelEmoji = "😇";
        levelDescription = "Melek gibisin! İçinde kötülük namına hiçbir şey yok. Ama dikkat et, seni üzmesinler.";
        levelColor = "#10B981"; // Green
    } else if (percentage <= 50) {
        levelTitle = "Hafif Atarlı";
        levelEmoji = "😐";
        levelDescription = "İdare edersin. Ara sıra damarına basılırsa tırnaklarını çıkarıyorsun ama genelde zararsızsın.";
        levelColor = "#FBBF24"; // Yellow/Orange
    } else if (percentage <= 80) {
        levelTitle = "Tehlikeli Madde";
        levelEmoji = "☢️";
        levelDescription = "Uzak durulması gereken birisin! Toksiklik seviyen kritik sınırlara yaklaşmış. Acil detoks lazım.";
        levelColor = "#EF4444"; // Red
    } else {
        levelTitle = "ÇERNOBİL";
        levelEmoji = "☠️";
        levelDescription = "KAÇIN PATLAYACAK! Radyasyon yayıyorsun. Etrafındaki bitkiler bile soluyor.";
        levelColor = "#7F1D1D"; // Dark Red
    }

    const handleSave = async () => {
         const user = auth.currentUser;
         if (user) {
             await saveResultToFirestore(user.uid, {
                testId: Date.now().toString(), // unique enough for now
                testTitle: titleToSave,
                score: finalScore,
                maxScore: maxScore,
                level: levelTitle
            });
         } else {
             // Fallback or alert if somehow no user (should rely on auth check before test)
             console.warn("No user found, cannot save to Firestore");
         }
        router.dismissAll();
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>SONUÇ</Text>

      <View style={styles.resultCard}>
        <Text style={[styles.percentage, { color: levelColor }]}>%{percentage}</Text>
        <Text style={styles.levelEmoji}>{levelEmoji}</Text>
        <Text style={[styles.levelTitle, { color: levelColor }]}>{levelTitle}</Text>
        <Text style={styles.description}>{levelDescription}</Text>
      </View>

      <View style={styles.scoreDetail}>
          <Text style={styles.detailText}>Puan: {finalScore} / {maxScore}</Text>
      </View>

      <Button 
        title="Profile Kaydet ve Dön" 
        onPress={handleSave} 
        style={styles.button} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: Layout.spacing.lg,
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.grayDark,
      marginBottom: Layout.spacing.lg,
  },
  resultCard: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: Layout.spacing.xl,
      borderRadius: Layout.radius.xl,
      alignItems: 'center',
      marginBottom: Layout.spacing.xl,
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 10,
      borderWidth: 1,
      borderColor: Colors.gray,
  },
  percentage: {
      fontSize: 80,
      fontWeight: '900',
      marginBottom: Layout.spacing.sm,
  },
  levelEmoji: {
      fontSize: 60,
      marginBottom: Layout.spacing.md,
  },
  levelTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: Layout.spacing.md,
      textAlign: 'center',
  },
  description: {
      fontSize: 16,
      textAlign: 'center',
      color: Colors.text,
      lineHeight: 24,
  },
  scoreDetail: {
      marginBottom: Layout.spacing.xl,
      padding: Layout.spacing.sm,
      backgroundColor: Colors.gray,
      borderRadius: Layout.radius.md,
  },
  detailText: {
      fontSize: 14,
      fontWeight: '600',
      color: Colors.grayDark,
  },
  button: {
      width: '100%',
      backgroundColor: Colors.primary,
  }
});
