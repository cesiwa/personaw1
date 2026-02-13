import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '../components/Card';
import { Colors, Layout } from '../constants/Colors';
import { DATA } from '../data/quizData';
import { Topic } from '../data/types';

export default function HomeScreen() {
  const router = useRouter();

  const handlePressTopic = (topic: Topic) => {
    router.push(`/topic/${topic.id}`);
  };

  const renderTopicItem = ({ item }: { item: Topic }) => (
    <Pressable onPress={() => handlePressTopic(item)}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
             <Text style={styles.icon}>{item.image}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.topicTitle}>{item.title}</Text>
            <Text style={styles.testCount}>{item.tests.length} Test</Text>
          </View>
          <View style={styles.arrowContainer}>
             <Text style={styles.arrow}>{'>'}</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Toksik Metre</Text>
      <FlatList
        data={DATA}
        renderItem={renderTopicItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60, // Safe area top (adjust as needed or use SafeAreaView)
    paddingHorizontal: Layout.spacing.md,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Layout.spacing.lg,
    textShadowColor: 'rgba(157, 0, 255, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  listContent: {
    paddingBottom: Layout.spacing.xl,
  },
  card: {
    marginBottom: Layout.spacing.md,
    padding: Layout.spacing.md,
    backgroundColor: '#FFFFFF', // Specifically requested white
    // Enhance shadow for "modern" look
    shadowColor: Colors.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: Layout.radius.full,
    backgroundColor: Colors.gray, // Light gray circle bg
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  testCount: {
    fontSize: 14,
    color: Colors.grayDark,
    fontWeight: '500',
  },
  arrowContainer: {
    marginLeft: Layout.spacing.sm,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  }
});
