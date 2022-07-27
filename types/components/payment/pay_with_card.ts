export interface PayWithCardProps {
  updatePaymentStatus: (status: 'pending' | 'successful') => void;
  updateProvidedEmail: (email: string) => void;
}