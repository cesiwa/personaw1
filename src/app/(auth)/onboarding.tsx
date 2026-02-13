import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, Layout } from '../../constants/Colors';
import { Button } from '../../components/Button';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    emoji: '🧪',
    title: 'Toksik Metre',
    description: 'İlişkilerinde ne kadar toksiksin? Kendini test et, gerçeklerle yüzleş!',
  },
  {
    id: '2',
    emoji: '🧐',
    title: 'Kendini Tanı',
    description: 'Davranışlarını analiz et ve ilişkilerine dışarıdan bir gözle bak.',
  },
  {
    id: '3',
    emoji: '🚀',
    title: 'Gelişime Başla',
    description: 'Farkındalık kazanarak daha sağlıklı ilişkiler kurmaya adım at.',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = async () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      await completeOnboarding();
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      router.replace('/(tabs)');
    }
  };

  const updateIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: typeof SLIDES[0] }) => (
    <View style={styles.slide}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateIndex}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footer}>
        <View style={styles.paginator}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
            {currentIndex === SLIDES.length - 1 ? (
                <Button title="Başla" onPress={completeOnboarding} />
            ) : (
                <Button title="İlerle" onPress={handleNext} variant="outline" />
            )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.spacing.xl,
  },
  emoji: {
    fontSize: 80,
    marginBottom: Layout.spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: Layout.spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    paddingHorizontal: Layout.spacing.md,
    lineHeight: 28,
  },
  footer: {
    padding: Layout.spacing.xl,
    justifyContent: 'space-between',
  },
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Layout.spacing.xl,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.gray,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 20,
  },
  buttonContainer: {
      marginBottom: Layout.spacing.lg,
  }
});
