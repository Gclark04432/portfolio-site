import { ReactElement } from 'react';

export interface StackItem {
  name: string;
  proficiency: Proficiency;
  border: string;
  logo: ReactElement;
}

export enum Proficiency {
  EXPERT,
  PROFICIENT,
  COMPETENT,
  BEGINNER,
}

export interface Project {
  name: string;
  technologies: StackItem[];
  img: string;
  description: string;
}
