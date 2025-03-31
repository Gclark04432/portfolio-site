import {
  JavascriptLogo,
  TypescriptLogo,
  NextjsLogo,
  ReactLogo,
  HTMLLogo,
  CSSLogo,
  TailwindcssLogo,
} from '../../../public/logos';

import { Proficiency, StackItem } from '@/types';

export const frontendStackItems: StackItem[] = [
  {
    name: 'Javascript',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <JavascriptLogo />,
  },
  {
    name: 'Typescript',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <TypescriptLogo />,
  },
  {
    name: 'Next.js',
    proficiency: Proficiency.PROFICIENT,
    border: 'border-amber-500',
    logo: <NextjsLogo />,
  },
  {
    name: 'React',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <ReactLogo />,
  },
  {
    name: 'HTML',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <HTMLLogo />,
  },
  {
    name: 'CSS',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <CSSLogo />,
  },
  {
    name: 'TailwindCSS',
    proficiency: Proficiency.COMPETENT,
    border: 'border-purple-500',
    logo: <TailwindcssLogo />,
  },
];
