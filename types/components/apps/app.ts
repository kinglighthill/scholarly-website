import { TestimonialProps } from "../reusables/testimonials";

export interface AppData {
  app_category_id: number;
  available_on_android: boolean;
  available_on_desktop: boolean;
  available_on_ios: boolean;
  countries: string[];
  description: string;
  download_link_android: string;
  icon_url: string;
  logo_url: string;
  name: string;
  testimonials: TestimonialProps[]
}

export interface AppProps {
  appData: AppData;
}