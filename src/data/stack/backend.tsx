'use client';

import {
  JavaLogo,
  PythonLogo,
  MySQLLogo,
  NodejsLogo,
  NestJSLogo,
  ExpressLogo,
} from '../../../public/logos';

import { Proficiency, StackItem } from '@/types';

export const backendStackItems: StackItem[] = [
  {
    name: 'NodeJs',
    proficiency: Proficiency.EXPERT,
    border: 'border-amber-500',
    logo: <NodejsLogo />,
  },
  {
    name: 'Java',
    proficiency: Proficiency.COMPETENT,
    border: 'border-red-500',
    logo: <JavaLogo />,
  },
  {
    name: 'Python',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <PythonLogo />,
  },
  {
    name: 'NestJS',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <NestJSLogo />,
  },
  {
    name: 'ExpressJs',
    proficiency: Proficiency.COMPETENT,
    border: 'border-blue-500',
    logo: <ExpressLogo />,
  },
  {
    name: 'MySQL',
    proficiency: Proficiency.COMPETENT,
    border: 'border-red-500',
    logo: <MySQLLogo />,
  },
];
