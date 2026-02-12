import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    // Load fonts here if needed, for MVP we can skip or use default
  });

  useEffect(() => {
    if (loaded || true) { // skipping font check for MVP speed
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.background } }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
