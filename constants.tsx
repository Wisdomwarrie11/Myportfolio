
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'StudiRad',
    description: 'StudiRad is a radiography-focused digital learning platform designed to give radiography students and professionals up-to-date educational resources, clinical insights, and career-relevant information that supports, both academic success and professional growth.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: 'studirad.png',
    link: 'https://www.studirad.org'
  },
  {
    title: 'GCMC Website',
    description: 'A comprehensive, multilingual hospital website built to improve accessibility for patients across diverse language backgrounds.',
    tech: ['React', 'Vue.js', 'TypeScript'],
    image: 'gcmc.png',
    link: 'https://gcmc.vercel.app/'
  },
  {
    title: 'GirlieQuest',
    description: 'An interactive quiz application designed to aid in reproductive health education, empowering young women with critical knowledge.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'girlie.png',
    link: 'https://girlie-quest.vercel.app'
  },
  {
    title: 'StudiFocus',
    description: 'A dedicated study companion that helps students stay focused, manage time effectively, and maintain commitment to their academic goals.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: 'studifocus.png',
    link: 'https://studifocus.vercel.app'
  },

  {
    title: 'Deleva',
    description: 'A modern website where clients can have access to home delivery services near them',
    tech: ['React', 'Bootstrap CSS'],
    image: 'deleava.png',
    link: 'https://deleava.vercel.app'
  },
  {
    title: 'MickyPrint',
    description: 'A sleek landing page for a specialized packaging and printing company, designed for high conversion and brand clarity.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop',
    link: 'https://mickyprint.vercel.app/'
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
