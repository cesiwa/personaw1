import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Layout } from '../../constants/Colors';
import { Button } from '../../components/Button';

export default function LoginScreen() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');

  const handleLogin = () => {
    if (nickname.trim().length < 3) {
      Alert.alert('Hata', 'Lütfen en az 3 karakterli bir takma ad gir.');
      return;
    }
    // In a real app, save auth state here
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Giriş Yap</Text>
        <Text style={styles.subtitle}>Seni nasıl çağıralım?</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Takma Adın"
          placeholderTextColor={Colors.grayDark}
          value={nickname}
          onChangeText={setNickname}
          autoCapitalize="none"
        />
        <Button 
          title="Testleri Gör" 
          onPress={handleLogin}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Layout.spacing.xl,
    justifyContent: 'center',
  },
  header: {
    marginBottom: Layout.spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: Layout.spacing.xs,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.grayDark,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: Colors.gray,
    borderRadius: Layout.radius.md,
    padding: Layout.spacing.md,
    fontSize: 16,
    color: Colors.text,
    marginBottom: Layout.spacing.lg,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  button: {
    marginTop: Layout.spacing.sm,
  },
});
