import {
  JavascriptLogo,
  TypescriptLogo,
  ReactLogo,
  HTMLLogo,
  CSSLogo,
  TailwindcssLogo,
  NextjsWhiteLogo,
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
    logo: <NextjsWhiteLogo />,
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
