export interface TestimonialProps {
  app_id?: null;
  full_name: string;
  user_type: string;
  profile_pic_sm: string;
  content: string;
  rating: number;
  bg?: string;
}

export interface TestimonialsProps {
  testimonials: React.ReactNode[];
}