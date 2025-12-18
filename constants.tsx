
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'GirlieQuest',
    description: 'An interactive quiz application designed to aid in reproductive health education, empowering young women with critical knowledge.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    link: 'https://girlie-quest.vercel.app'
  },
  {
    title: 'StudiFocus',
    description: 'A dedicated study companion that helps students stay focused, manage time effectively, and maintain commitment to their academic goals.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    link: 'https://studifocus.vercel.app'
  },
  {
    title: 'StudiRad',
    description: 'A professional platform offering academic resources and professional growth tracking tailored specifically for radiographers.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.studirad.orf'
  },
  {
    title: 'GCMC Website',
    description: 'A comprehensive, multilingual hospital website built for GCMC to improve accessibility for patients across diverse language backgrounds.',
    tech: ['Vue.js', 'Bootstrap', 'i18n'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Deleva',
    description: 'A modern real estate portal providing seamless access to rental properties with an intuitive search and discovery experience.',
    tech: ['React', 'Context API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    link: 'https://deleava.vercel.app'
  },
  {
    title: 'MickyPrint',
    description: 'A sleek landing page for a specialized packaging and printing company, designed for high conversion and brand clarity.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop',
    link: 'http://www.mickyprint.com'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'fa-brands fa-react', category: 'frontend' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', category: 'frontend' },
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', category: 'frontend' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', category: 'frontend' },
  { name: 'Medical Imaging', icon: 'fa-solid fa-x-ray', category: 'clinical' },
  { name: 'Radiation Safety', icon: 'fa-solid fa-shield-virus', category: 'clinical' },
  { name: 'Patient Care', icon: 'fa-solid fa-hospital-user', category: 'clinical' },
];

export const CONTACT_INFO = {
  name: 'Wisdom Warrie',
  email: 'wisdomwarrie11@gmail.com',
  phone: '09029729621',
  location: 'Nigeria',
  roles: ['Radiographer', 'Web Developer']
};
