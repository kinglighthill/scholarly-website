import { TestimonialProps } from "./components/reusables/Testimonials";
import jamb_cbt_practice from "./public/jamb_cbt_practice.png";
import waec_paq from "./public/waec_paq.png";
import waec_literature from "./public/waec_literature.png";
import bece_neco from "./public/bece_neco.png";
import bece_jhs from "./public/bece_jhs.png";
import futo_putme from "./public/futo_putme.png";
import imsu_putme from "./public/imsu_putme.png";
import unn_putme from "./public/unn_putme.png";
import uniben_putme from "./public/uniben_putme.png";
import { StaticImageData } from "next/image";

export const statistics = [
  { title: 'Apps', value: '30+' },
  { title: 'Downloads', value: '1 million+' },
  { title: 'Partners', value: '20,000+' },
  { title: 'Businesses', value: '600+' },
];

export const testimonials: TestimonialProps[] = [
  { name: 'Umeh Chibuzor', title: 'Student', image: 'jrotanson.svg', rating: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem ipsum dolor sit amet.' },
  { name: 'Umeh Chibuzor', title: 'Agent', image: '', rating: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem ipsum dolor sit amet.' },
  { name: 'Umeh Dhibuzor', title: 'Agent', image: '', rating: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem ipsum dolor sit amet.' },
  { name: 'Umeh Xhibuzor', title: 'Agent', image: '', rating: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem ipsum dolor sit amet.' },
];

type App = {
  name: string;
  logo: StaticImageData;
  download_link: string;
}

type Apps = {
  [key: string]: {
    category_name: string;
    category_description: string;
    apps: App[];
  }[];
}

export const apps: Apps = {
  android: [
    {
      category_name: "UTME",
      category_description: "UTME stands for Unified Tertiary Matriculations Examination. It is usually written yearly by students seeking to gain admission into higher institutions.",
      apps: [
        { name: "Jamb CBT Practice", logo: jamb_cbt_practice, download_link: "" },
      ]
    },
    { 
      category_name: "Senior School",
      category_description: "Organized in 5 west African countries, WASSCE tests senior students on their knowledge of core subjects.",
      apps: [
        { name: "WAEC Past Questions", logo: waec_paq, download_link: "" },
        { name: "WAEC Literature", logo: waec_literature, download_link: "" },    
      ]
    },
    {
      category_name: "Junior School",
      category_description: "Organized in 5 west African countries, BECE tests junior students on their knowledge of core subjects.",
      apps: [
        { name: "BECE NECO", logo: bece_neco, download_link: "" },
        { name: "BECE JHS", logo: bece_jhs, download_link: "" },    
      ]
    },
    {
      category_name: "Post UTME",
      category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
      apps: [
        { name: "FUTO Post UTME", logo: futo_putme, download_link: "" },
        { name: "IMSU Post UTME", logo: imsu_putme, download_link: "" },
        { name: "UNN Post UTME", logo: unn_putme, download_link: "" },
        { name: "UNIBEN Post UTME", logo: uniben_putme, download_link: "" },    
      ]
    },
  ],
  ios: [
    {
      category_name: "Post UTME",
      category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
      apps: [
        { name: "UNIBEN Post UTME", logo: uniben_putme, download_link: "" },    
      ]
    },
    {
      category_name: "Junior School",
      category_description: "Organized in 5 west African countries, BECE tests junior students on their knowledge of core subjects.",
      apps: [
        { name: "BECE JHS", logo: bece_jhs, download_link: "" },    
      ]
    },
  ],
  desktop: [
    {
      category_name: "UTME",
      category_description: "UTME stands for Unified Tertiary Matriculations Examination. It is usually written yearly by students seeking to gain admission into higher institutions.",
      apps: [
        { name: "Jamb CBT Practice", logo: jamb_cbt_practice, download_link: "" },
      ]
    },
    {
      category_name: "Post UTME",
      category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
      apps: [
        { name: "FUTO Post UTME", logo: futo_putme, download_link: "" },
      ]
    },
  ]
}