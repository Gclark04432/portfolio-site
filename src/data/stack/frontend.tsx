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
    logo: <JavascriptLogo />,
  },
  {
    name: 'Typescript',
    proficiency: Proficiency.EXPERT,
    logo: <TypescriptLogo />,
  },
  {
    name: 'Next.js',
    proficiency: Proficiency.PROFICIENT,
    logo: <NextjsLogo />,
  },
  {
    name: 'React',
    proficiency: Proficiency.EXPERT,
    logo: <ReactLogo />,
  },
  {
    name: 'HTML',
    proficiency: Proficiency.EXPERT,
    logo: <HTMLLogo />,
  },
  {
    name: 'CSS',
    proficiency: Proficiency.EXPERT,
    logo: <CSSLogo />,
  },
  {
    name: 'TailwindCSS',
    proficiency: Proficiency.COMPETENT,
    logo: <TailwindcssLogo />,
  },
];
