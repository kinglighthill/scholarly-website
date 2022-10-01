import { StaticImageData } from "next/image";

export interface DownloadCardProps {
  store_icon: StaticImageData;
  platform: string;
  app_rating: number;
  app_availability: boolean;
  download_link?: string;
}