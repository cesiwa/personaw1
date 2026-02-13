import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { Colors, Layout } from '../../constants/Colors';
import { Button } from '../../components/Button';

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create user document in Firestore
      await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: email,
          createdAt: new Date().toISOString(),
          role: 'user'
      });
      
      Alert.alert("Başarılı", "Hesabınız oluşturuldu!", [
          { text: "Tamam", onPress: () => router.replace('/(tabs)') }
      ]);

    } catch (error: any) {
      let msg = "Kayıt başarısız.";
      if (error.code === 'auth/email-already-in-use') msg = "Bu e-posta zaten kullanımda.";
      if (error.code === 'auth/weak-password') msg = "Şifre çok zayıf (en az 6 karakter).";
      if (error.code === 'auth/invalid-email') msg = "Geçersiz e-posta adresi.";
      console.error(error);
      Alert.alert('Hata', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kayıt Ol</Text>
        <Text style={styles.subtitle}>Aramıza katıl, toksiklik seviyeni ölç!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          placeholderTextColor={Colors.grayDark}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          placeholderTextColor={Colors.grayDark}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor={Colors.grayDark}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        {loading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
            <Button 
            title="Kayıt Ol" 
            onPress={handleRegister}
            style={styles.button}
            />
        )}

        <TouchableOpacity onPress={() => router.back()} style={styles.registerLink}>
            <Text style={styles.registerText}>Zaten hesabın var mı? <Text style={styles.registerBold}>Giriş Yap</Text></Text>
        </TouchableOpacity>
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
    fontSize: 16,
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
  registerLink: {
      marginTop: Layout.spacing.xl,
      alignItems: 'center',
  },
  registerText: {
      color: Colors.grayDark,
      fontSize: 14,
  },
  registerBold: {
      color: Colors.primary,
      fontWeight: 'bold',
  }
});
