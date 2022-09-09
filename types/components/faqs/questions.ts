type QuestionCategory = 'student' | 'partner' | 'business';

interface FAQ {
  user_type: QuestionCategory;
  question: string;
  answer: string;
  order: number;
}

export interface QuestionsProps {
  questions: FAQ[];
  category: QuestionCategory;
}