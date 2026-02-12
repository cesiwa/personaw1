import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Layout } from '../../constants/Colors';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Text style={styles.emoji}>🧪</Text>
          <Text style={styles.title}>Toksik Metre</Text>
          <Text style={styles.description}>
            İlişkilerinde ne kadar toksiksin? Kendini test et, gerçeklerle yüzleş!
          </Text>
        </Card>
      </View>
      <View style={styles.footer}>
        <Button 
          title="Başla" 
          onPress={() => router.push('/(auth)/login')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    padding: Layout.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: Layout.spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: Layout.spacing.md,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: Layout.spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    paddingHorizontal: Layout.spacing.md,
    lineHeight: 24,
  },
  footer: {
    paddingBottom: Layout.spacing.xl,
  },
});
