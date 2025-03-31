'use client';

import { DockerLogo, JenkinsLogo, AWSLogo } from '../../../public/logos';

import { Proficiency, StackItem } from '@/types';

export const toolStackItems: StackItem[] = [
  {
    name: 'Docker',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <DockerLogo />,
  },
  {
    name: 'Jenkins',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <JenkinsLogo />,
  },
  {
    name: 'AWS',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <AWSLogo />,
  },
];
