import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Layout } from '../constants/Colors';
import { DATA } from '../data/quizData';

export default function QuizScreen() {
  // Get test ID from params
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Find the test data
  // We need to search through all topics to find the test with this ID
  let foundTest = null;
  for (const topic of DATA) {
      const test = topic.tests.find(t => t.id === id);
      if (test) {
          foundTest = test;
          break;
      }
  }

  const test = foundTest;

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [lastQuestionScore, setLastQuestionScore] = useState(0);

  if (!test) {
      return (
          <View style={styles.container}>
              <Text style={styles.text}>Test bulunamadı!</Text>
              <TouchableOpacity onPress={() => router.back()}>
                  <Text style={styles.link}>Geri Dön</Text>
              </TouchableOpacity>
          </View>
      );
  }

  const question = test.questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / test.questions.length;

  const handleAnswer = (value: number) => {
      // Value is 1 to 5
      
      if (currentQuestionIndex < test.questions.length - 1) {
          const newScore = score + value;
          setScore(newScore);
          // Next question
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
          // Last question answered
          // Don't navigate yet, just update score and show finish button
          setScore(score + value);
          setIsFinished(true);
      }
  };

  const finishTest = () => {
      // Max score is number of questions * 5 (since max rating is 5)
      const totalPossibleScore = test.questions.length * 5;
      
      // Navigate to Result Screen
      router.replace({
          pathname: '/result',
          params: { 
              score: score, 
              total: totalPossibleScore,
              testTitle: test.title 
          }
      });
  };

  const getBorderColor = (value: number) => {
    switch (value) {
      case 1: return '#FFC0CB'; // Pink
      case 2: return '#FF69B4'; // Hot Pink
      case 3: return '#DA70D6'; // Orchid
      case 4: return '#BA55D3'; // Medium Orchid
      case 5: return '#9D00FF'; // Primary Purple
      default: return Colors.primary;
    }
  };

  if (isFinished) {
      return (
          <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={styles.finishTitle}>Test Bitti!</Text>
              <Text style={styles.finishSubtitle}>Sonuçlarını görmeye hazır mısın?</Text>
              
              <TouchableOpacity style={styles.finishButton} onPress={finishTest}>
                  <Text style={styles.finishButtonText}>SONUCU GÖR</Text>
              </TouchableOpacity>
          </View>
      )
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
         <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.progressText}>Soru {currentQuestionIndex + 1} / {test.questions.length}</Text>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          <Text style={styles.infoText}>(1: Hiç Katılmıyorum - 5: Tamamen Katılıyorum)</Text>
      </View>

      {/* Buttons 1-5 */}
      <View style={styles.optionsContainer}>
          {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity 
                key={value}
                style={[
                    styles.optionButton, 
                    { borderColor: getBorderColor(value) }
                ]}
                onPress={() => handleAnswer(value)}
              >
                  <Text style={[styles.optionText, { color: getBorderColor(value) }]}>{value}</Text>
              </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
    paddingHorizontal: Layout.spacing.lg,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  progressContainer: {
      height: 8,
      backgroundColor: Colors.gray,
      borderRadius: Layout.radius.full,
      overflow: 'hidden',
      marginBottom: Layout.spacing.sm,
      marginTop: 40, // Space for back button
  },
  progressBar: {
      height: '100%',
      backgroundColor: Colors.primary,
      borderRadius: Layout.radius.full,
  },
  header: {
      alignItems: 'flex-end',
      marginBottom: Layout.spacing.xl,
  },
  progressText: {
      color: Colors.grayDark,
      fontWeight: '600',
  },
  text: {
      fontSize: 18, 
      marginBottom: 20, 
      textAlign: 'center'
  },
  link: {
      color: Colors.primary,
      fontSize: 16,
      textAlign: 'center'
  },
  questionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: Layout.spacing.xl,
  },
  questionText: {
      fontSize: 24, // Slightly smaller to fit info text
      fontWeight: 'bold',
      color: Colors.text,
      textAlign: 'center',
      lineHeight: 32,
      marginBottom: 16,
  },
  infoText: {
      fontSize: 14,
      color: Colors.grayDark,
      fontStyle: 'italic',
  },
  optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 60,
  },
  optionButton: {
      width: 50,
      height: 50, // width = height for circle
      borderRadius: 25, // half of width
      backgroundColor: '#FFFFFF', // White background
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2, // Slightly thicker border
      // borderColor is dynamic
  },
  optionText: {
      fontSize: 20,
      fontWeight: 'bold',
      // color is dynamic
  },
  finishTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: Colors.primary,
      marginBottom: Layout.spacing.md,
  },
  finishSubtitle: {
      fontSize: 18,
      color: Colors.text,
      marginBottom: Layout.spacing.xl,
      textAlign: 'center',
  },
  finishButton: {
      backgroundColor: Colors.primary,
      paddingHorizontal: Layout.spacing.xl,
      paddingVertical: Layout.spacing.md,
      borderRadius: Layout.radius.full,
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
  },
  finishButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
  }
});
