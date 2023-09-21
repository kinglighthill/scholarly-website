import { StaticImageData } from "next/image";

export interface Statistic {
  title: string;
  value: string;
}

export interface OutletLocation {
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface Outlet {
  name: string;
  description: string;
  rating: number;
  opens: string;
  closes: string;
  image: StaticImageData;
  location: OutletLocation;
}

// export interface App {
//   name: string;
//   logo: {
//     static_img: StaticImageData;
//     url: string;
//   };
//   download_link: string;
//   price: number;
// }

// export interface Apps {
//   [key: string]: {
//     category_name: string;
//     category_description: string;
//     apps: App[];
//   }[];
// }

interface FooterMenuItem {
  name: string;
  url: string;
}

export interface FooterMenu {
  title: string;
  items: FooterMenuItem[];
}

export interface TeamMember {
  name: string;
  position: string;
  picture: StaticImageData | string;
  bio: string;
  duration: string;
}