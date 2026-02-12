export interface Topic {
  id: string;
  title: string;
  color: string;
  image: any; // Using 'any' for require() images, or string for URI
}

export interface Question {
  id: string;
  text: string;
  points: number;
}

export interface Test {
  id: string;
  topicId: string;
  title: string;
  description: string;
  questions: Question[];
}

export type RootStackParamList = {
  "(auth)": undefined;
  "(tabs)": undefined;
};
