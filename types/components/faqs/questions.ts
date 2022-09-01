type QuestionCategory = 'student' | 'partner' | 'business';

interface FAQ {
  user_type: QuestionCategory;
  question: string;
  answer: string;
}

export interface QuestionsProps {
  questions: FAQ[];
  category: QuestionCategory;
}