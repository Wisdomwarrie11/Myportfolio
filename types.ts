
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'clinical';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
