import { StaticImageData } from "next/image";

export interface DownloadCardProps {
  storeIcon: StaticImageData;
  storeName: string;
  appRating: number;
}