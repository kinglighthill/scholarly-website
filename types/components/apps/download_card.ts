import { StaticImageData } from "next/image";

export interface DownloadCardProps {
  store_icon: StaticImageData;
  platform: "Android" | "iOS" | "Windows";
  app_rating: number;
  app_availability: boolean;
  download_link?: string;
  handleLinkClick?: () => void;
}