type QuestionCategory = 'student' | 'partner' | 'business';

export interface FAQ {
  user_type: QuestionCategory;
  question: string;
  answer: string;
  order: number;
}

export interface QuestionsProps {
  questions: FAQ[];
  category: QuestionCategory;
  color: string; //The RGB values of the color, in the form 'R, G, B'
  max?: number; // The max. number of questions to display
  search?: boolean;
}