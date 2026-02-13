import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Layout } from '../constants/Colors';
import { DATA } from '../data/quizData';
import { Test } from '../data/types';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { auth } from '../config/firebase';

export default function TestListScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const topic = DATA.find((t) => t.id === id);

  if (!topic) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Konu bulunamadı!</Text>
        <Button title="Geri Dön" onPress={() => router.back()} />
      </View>
    );
  }

  const handleStartTest = (testId: string) => {
    const user = auth.currentUser;
    
    if (!user) {
        Alert.alert(
            "Giriş Yapmalısın",
            "Testi çözmek için giriş yapman gerekiyor.",
            [
                { text: "Vazgeç", style: "cancel" },
                { text: "Giriş Yap", onPress: () => router.push('/(auth)/login') }
            ]
        );
        return;
    }

    router.push(`/quiz/${testId}`);
  };

  const renderTestItem = ({ item }: { item: Test }) => (
     <Card style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.textContainer}>
                <Text style={styles.testTitle}>{item.title}</Text>
                <Text style={styles.testDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity 
                style={styles.startButton} 
                onPress={() => handleStartTest(item.id)}
            >
                <Text style={styles.startButtonText}>BAŞLA</Text>
            </TouchableOpacity>
        </View>
     </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{topic.title}</Text>
      <FlatList
        data={topic.tests}
        renderItem={renderTestItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Geri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
    paddingHorizontal: Layout.spacing.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: Layout.spacing.lg,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: Layout.spacing.xl,
  },
  card: {
    marginBottom: Layout.spacing.md,
    padding: Layout.spacing.md,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: Layout.spacing.md,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'left',
  },
  testDescription: {
    fontSize: 12,
    color: Colors.grayDark,
    textAlign: 'left',
  },
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: Layout.radius.sm,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  backButton: {
      marginTop: Layout.spacing.md,
      padding: Layout.spacing.md,
      alignSelf: 'center',
  },
  backButtonText: {
      color: Colors.grayDark,
      fontSize: 16,
  }
});
