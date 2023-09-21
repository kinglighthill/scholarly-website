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
import { FooterMenu, Outlet, Statistic } from "./types/data";
import uche_umeh from './public/uche_umeh.webp';
import kingsley_ugwudinso from './public/kingsley_ugwudinso.webp';
import chinonso_umeh from './public/chinonso_umeh.webp';
import chukwuamaka_osuji from './public/chukwuamaka_osuji.webp';
import john_uzodinma from './public/john_uzodinma.webp';
import iheme_tobechukwu from './public/iheme_tobechukwu.webp';
import ebuka_okoli from './public/ebuka_okoli.webp';
import lilian_onyeneke from './public/lilian_onyeneke.webp';
import { TeamMember } from './types/data';

export const statistics: Statistic[] = [
  { title: 'Apps', value: '30+' },
  { title: 'Downloads', value: '1 million+' },
  { title: 'Average Rating', value: '4+ stars' },
  // { title: 'Affiliates', value: '20,000+' },
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

export const footerMenu: FooterMenu[] = [
  {
    title: 'Products',
    items: [
      { name: 'Mobile Apps', url: '/apps/android' },
      { name: 'Desktop Apps', url: '/apps/desktop' },
      { name: 'Affiliate App', url: '/affiliates' },
      { name: 'Enterprise Software', url: '/business' }
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'About', url: '/about' },
      { name: 'Our Team', url: '/team' },
      { name: 'FAQs', url: '/faqs' },
      { name: 'Contact us', url: '/contact-us' },
    ]
  },
  {
    title: 'Legal',
    items: [
      { name: 'Terms', url: '/terms' },
      { name: 'Privacy', url: '/privacy' },
    ]
  },
]

export const team: TeamMember[] = [
  {
    name: 'Uche Umeh',
    position: 'Co-Founder & CEO',
    picture: uche_umeh,
    bio: "Uche is an innovative Co-founder with a Bachelor's degree in Electronics and Computer Engineering (First Class Honors) from the Federal University of Technology (FUTO) and recognized as an undergraduate scholar by PTDF LSS and FSB. With over four years of experience in software development for students, He has a deep understanding of their needs. His diverse skill set includes technical expertise and proficiency in sales, marketing, and management. Uche envisions revolutionizing the Edtech sector by creating solutions that empower students and educators through technology. At Scholarly, we are eager to collaborate with like-minded individuals who share a passion for innovation in education. Education is not a one-size-fits-all concept, and We are committed to creating solutions that cater to diverse learning styles and needs.",
    duration: "January 2019 - Present"
  },
  {
    name: 'Kingsley Ugwudinso',
    position: 'Co-Founder & CTO',
    picture: kingsley_ugwudinso,
    bio: "Kingsley brings over four years of hands-on experience in developing and maintaining student-centric software, complemented by strong mathematical and analytical skills, and a knack for problem-solving. His academic background includes a First Class Honors Bachelor's degree in Electronics and Computer Engineering from the Federal University of Technology (FUTO), a testament to my dedication and commitment to excellence. Additionally, I've been recognized as a PTDF LSS undergraduate scholar. With the goal of leveraging his technical prowess and passion for problem-solving to create innovative solutions that enhance the educational experience, Kingsley is enthusiastic about collaborating with individuals who share a vision for driving positive change through technology in education.",
    duration: "January 2019 - Present"
  },
  {
    name: 'Chinonso Umeh',
    position: 'Product Designer',
    picture: chinonso_umeh,
    bio: "Chinonso is a product designer and no-code developer. He is passionate about creating beautiful user-centered products that solve real-world problems. With a focus on user experience and interaction design, Chinonso works closely with cross-functional teams to bring products to life that are both useful and enjoyable to use. In his spare time, Nonso enjoys exploring new technologies, learning about different cultures, and creating content.",
    duration: "January 2021 - Present"
  },
  {
    name: 'John Uzodinma',
    position: 'Software Engineer',
    picture: john_uzodinma,
    bio: "John is an adept Software Developer driven by a passion for creating innovative solutions to complex challenges. He is proficient in Java and dedicated to pushing the boundaries of what is possible in the tech ecosystem. With years of hands-on experience in software development, he has honed his skills in designing, implementing, and optimizing software systems that deliver impactful results. He is presently delving into the realm of Cloud Technology and is excited by its potential to revolutionize software development and deployment. This reflects his commitment to lifelong learning and his desire to remain at the forefront of technological advancement.",
    duration: "March 2022 - Present"
  },
  {
    name: 'Chukwuamaka Osuji',
    position: 'Frontend Engineer',
    picture: chukwuamaka_osuji,
    bio: "Chukwuamaka is a Software Developer with experience building applications and bringing visually appealing interfaces to life. As you might have guessed, he specializes in Frontend Engineering. He loves everything frontend but also likes to dabble in other areas of software development from time to time. He has a keen eye for details, a zest for learning, and a passion for providing great user experiences and using technology to provide solutions to problems and drive positive impact.",
    duration: "June 2022 - Present"
  },
  {
    name: 'Iheme Tobechukwu',
    position: 'Android Engineer',
    picture: iheme_tobechukwu,
    bio: "Tobechukwu is a Computer Science graduate and Software Engineer. He specializes in the design and development of mobile applications and software alike and also has a deep interest in machine learning. His hobbies are playing video games and the guitar.",
    duration: "July 2022 - Present"
  },
  {
    name: 'Lilian Onyeneke',
    position: 'Customer Support',
    picture: lilian_onyeneke,
    bio: "Lilian is a graduate of Business Education from Nnamdi Azikiwe University, Awka. She also undertook a professional course on Customer Service Relation Management and Human Resources. She proudly serves as a Customer Care Representative at Scholarly Educational Software Limited. Her mission is to ensure exceptional customer experiences by actively listening to Scholarly's valued clients, gathering their feedback, and translating it into actions that exceed their expectations. She thrives on resolving inquiries, fostering trust, and contributing to the organization's growth. Together with our customers, She's dedicated to creating a brighter educational experience.",
    duration: "July 2023 - Present"
  },
  {
    name: 'Okoli Ebuka Leyon',
    position: 'Sales and Marketing Manager',
    picture: ebuka_okoli,
    bio: "Leyon is a result-driven Sales and Marketing Manager with a proven track record of driving revenue growth and expanding market presence. With some years of experience in the industry, he has excelled at developing and executing strategic sales and marketing initiatives that deliver measurable results. Leyon's expertise lies in crafting innovative marketing campaigns, identifying target markets, and leveraging data-driven insights to optimize sales processes. He is known for his exceptional leadership skills and his ability to drive cross-functional teams to exceed sales targets and achieve marketing goals.",
    duration: "August 2023 - Present"
  },
]