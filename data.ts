// import jamb_cbt_practice from "./public/jamb_cbt_practice.webp";
// import waec_paq from "./public/waec_paq.webp";
// import waec_literature from "./public/waec_literature.webp";
// import bece_neco from "./public/bece_neco.webp";
// import bece_jhs from "./public/bece_jhs.webp";
// import futo_putme from "./public/futo_putme.webp";
// import imsu_putme from "./public/imsu_putme.webp";
// import unn_putme from "./public/unn_putme.webp";
// import uniben_putme from "./public/uniben_putme.webp";
import sales_outlet1 from "./public/sales_outlet1.webp";
import sales_outlet2 from "./public/sales_outlet2.webp";
import sales_outlet3 from "./public/sales_outlet3.webp";
import { Outlet, Statistic } from "./types/data";

export const statistics: Statistic[] = [
  { title: 'Apps', value: '30+' },
  { title: 'Downloads', value: '1 million+' },
  { title: 'Rating', value: '4+ stars' },
  // { title: 'Partners', value: '20,000+' },
  // { title: 'Businesses', value: '600+' },
];

export const salesOutlets: Outlet[] = [
  { name: 'Obi Bookshop', description: 'Lorem ipsum dolor sit amet', rating: 5, opens: '8AM', closes: '8PM', image: sales_outlet1, location: { address: 'Samuelson close', city: 'Independence Layout', state: 'Enugu', country: 'Nigeria' } },
  { name: 'National Library', description: 'Lorem ipsum dolor sit amet', rating: 4, opens: '8AM', closes: '8PM', image: sales_outlet2, location: { address: '11, Shobayo Street', city: 'Ilupeju', state: 'Lagos', country: 'Nigeria' } },
  { name: 'USA Lesson centre', description: 'Lorem ipsum dolor sit amet', rating: 5, opens: '8AM', closes: '8PM', image: sales_outlet1, location: { address: 'Federal University of Technology', city: 'Owerri', state: 'Imo', country: 'Nigeria' } },
  { name: 'Brain Builders', description: 'Lorem ipsum dolor sit amet', rating: 4, opens: '8AM', closes: '8PM', image: sales_outlet2, location: { address: 'Eko Hotels and Suites', city: 'Victoria Island', state: 'Lagos', country: 'Nigeria' } },
  { name: 'Goshen Model College', description: 'Lorem ipsum dolor sit amet', rating: 5, opens: '8AM', closes: '8PM', image: sales_outlet3, location: { address: 'Iweka Road', city: 'Ontisha', state: 'Anambra', country: 'Nigeria' } },
];

export const countries: string[] = ['Nigeria', 'Ghana', 'Kenya'];

export const states: string[] = ['Lagos', 'Anambra', 'Enugu', 'Bayelsa', 'Ekiti', 'Jos', 'Abuja', 'Port Harcourt'];

export const areas: string[] = ['Ilupeju', 'Onitsha', 'Owerri', 'Victoria Island', 'Independence Layout'];

export const lgas: string[] = ['Mushin', 'Victoria Island', 'Owerri West'];

// export const apps = {
//   android: [
//     {
//       category_name: "UTME",
//       category_description: "UTME stands for Unified Tertiary Matriculations Examination. It is usually written yearly by students seeking to gain admission into higher institutions.",
//       apps: [
//         { name: "Jamb CBT Practice", logo: { static_img: jamb_cbt_practice, url: 'jamb_cbt_practice.webp' }, download_link: "", price: 2000 },
//       ]
//     },
//     { 
//       category_name: "Senior School",
//       category_description: "Organized in 5 west African countries, WASSCE tests senior students on their knowledge of core subjects.",
//       apps: [
//         { name: "WAEC Past Questions", logo: { static_img: waec_paq, url: 'waec_paq.webp' }, download_link: "", price: 1000 },
//         { name: "WAEC Literature", logo: { static_img: waec_literature, url: 'waec_literature.webp' }, download_link: "", price: 1000 },    
//       ]
//     },
//     {
//       category_name: "Junior School",
//       category_description: "Organized in 5 west African countries, BECE tests junior students on their knowledge of core subjects.",
//       apps: [
//         { name: "BECE NECO", logo: { static_img: bece_neco, url: 'bece_neco.webp' }, download_link: "", price: 1000 },
//         { name: "BECE JHS", logo: { static_img: bece_jhs, url: 'bece_jhs.webp' }, download_link: "", price: 1000 },    
//       ]
//     },
//     {
//       category_name: "Post UTME",
//       category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
//       apps: [
//         { name: "FUTO Post UTME", logo: { static_img: futo_putme, url: 'futo_putme.webp' }, download_link: "", price: 2000 },
//         { name: "IMSU Post UTME", logo: { static_img: imsu_putme, url: 'imsu_putme.webp' }, download_link: "", price: 2000 },
//         { name: "UNN Post UTME", logo: { static_img: unn_putme, url: 'unn_putme.webp' }, download_link: "", price: 2000 },
//         { name: "UNIBEN Post UTME", logo: { static_img: uniben_putme, url: 'uniben_putme.webp' }, download_link: "", price: 2000 },    
//       ]
//     },
//   ],
//   ios: [
//     {
//       category_name: "Post UTME",
//       category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
//       apps: [
//         { name: "UNIBEN Post UTME", logo: { static_img: uniben_putme, url: 'uniben_putme.webp' }, download_link: "", price: 2000 },    
//       ]
//     },
//     {
//       category_name: "Junior School",
//       category_description: "Organized in 5 west African countries, BECE tests junior students on their knowledge of core subjects.",
//       apps: [
//         { name: "BECE JHS", logo: { static_img: bece_jhs, url: 'bece_jhs.webp' }, download_link: "", price: 1000 },    
//       ]
//     },
//   ],
//   desktop: [
//     {
//       category_name: "UTME",
//       category_description: "UTME stands for Unified Tertiary Matriculations Examination. It is usually written yearly by students seeking to gain admission into higher institutions.",
//       apps: [
//         { name: "Jamb CBT Practice", logo: { static_img: jamb_cbt_practice, url: 'jamb_cbt_practice.webp' }, download_link: "", price: 2000 },
//       ]
//     },
//     {
//       category_name: "Post UTME",
//       category_description: "Organized by higher institutions post UTME for students seeking admission in such institutions.",
//       apps: [
//         { name: "FUTO Post UTME", logo: { static_img: futo_putme, url: 'futo_putme.webp' }, download_link: "", price: 2000 },
//       ]
//     },
//   ]
// }