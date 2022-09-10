import { StaticImageData } from "next/image";

export interface DownloadCardProps {
  store_icon: StaticImageData;
  store_name: string;
  app_rating: number;
  app_availability: boolean;
  download_link?: string;
}