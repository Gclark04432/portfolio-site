import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from 'react';

export interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

export interface StackCategory {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  items: StackItem[];
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface StackItem {
  name: string;
  proficiency: Proficiency;
  logo: ReactElement;
}

export enum Proficiency {
  EXPERT,
  PROFICIENT,
  COMPETENT,
  ADVANCED_BEGINNER,
  BEGINNER,
}

export interface Project {
  name: string;
  technologies: StackItem[];
  img: string;
  description: string;
  github: string;
  demo: string;
}

export enum SubmissionStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface KeyStat {
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: string;
  color: string;
}
