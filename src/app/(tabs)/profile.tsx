import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Layout } from '../../constants/Colors';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear auth state
    router.replace('/(auth)/onboarding');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Button title="Çıkış Yap" onPress={handleLogout} variant="outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Layout.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Layout.spacing.xl,
  },
});
