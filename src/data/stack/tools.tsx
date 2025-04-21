'use client';

import { DockerLogo, JenkinsLogo, AWSLogo } from '../../../public/logos';

import { Proficiency, StackItem } from '@/types';

export const toolStackItems: StackItem[] = [
  {
    name: 'Docker',
    proficiency: Proficiency.COMPETENT,
    logo: <DockerLogo />,
  },
  {
    name: 'Jenkins',
    proficiency: Proficiency.COMPETENT,
    logo: <JenkinsLogo />,
  },
  {
    name: 'AWS',
    proficiency: Proficiency.COMPETENT,
    logo: <AWSLogo />,
  },
];
