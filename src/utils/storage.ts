import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface QuizResult {
    id: string;
    testId: string;
    testTitle: string;
    score: number;
    maxScore: number;
    date: string;
    level: string;
}

const STORAGE_KEY = '@toksik_results';

export const saveResult = async (result: Omit<QuizResult, 'id' | 'date'>) => {
    try {
        const existingResultsJson = await AsyncStorage.getItem(STORAGE_KEY);
        const existingResults: QuizResult[] = existingResultsJson ? JSON.parse(existingResultsJson) : [];

        const newResult: QuizResult = {
            ...result,
            id: Date.now().toString(),
            date: new Date().toISOString(),
        };

        const updatedResults = [newResult, ...existingResults];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
    } catch (e) {
        console.error('Error saving result:', e);
    }
};

export const getResults = async (): Promise<QuizResult[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Error reading results:', e);
        return [];
    }
};

export const clearResults = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.error('Error clearing results:', e);
    }
};

// --- Firestore Integration ---

export const saveResultToFirestore = async (userId: string, result: Omit<QuizResult, 'id' | 'date'>) => {
    try {
        const resultsRef = collection(db, 'users', userId, 'results');
        await addDoc(resultsRef, {
            ...result,
            date: new Date().toISOString(),
            createdAt: Timestamp.now(), // Helpful for sorting by actual creation time
        });
        console.log("Result saved to Firestore for user:", userId);
    } catch (e) {
        console.error("Error saving result to Firestore:", e);
        throw e;
    }
};

export const getUserResultsFromFirestore = async (userId: string): Promise<QuizResult[]> => {
    try {
        const resultsRef = collection(db, 'users', userId, 'results');
        // Sort by createdAt descending (newest first)
        const q = query(resultsRef, orderBy("createdAt", "desc"));

        const querySnapshot = await getDocs(q);
        const results: QuizResult[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            results.push({
                id: doc.id,
                testId: data.testId || '',
                testTitle: data.testTitle || '',
                score: data.score || 0,
                maxScore: data.maxScore || 0,
                date: data.date || '',
                level: data.level || '',
            });
        });

        return results;
    } catch (e) {
        console.error("Error fetching results from Firestore:", e);
        return [];
    }
};
