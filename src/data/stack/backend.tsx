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
    logo: <NodejsLogo />,
  },
  {
    name: 'Java',
    proficiency: Proficiency.COMPETENT,
    logo: <JavaLogo />,
  },
  {
    name: 'Python',
    proficiency: Proficiency.COMPETENT,
    logo: <PythonLogo />,
  },
  {
    name: 'NestJS',
    proficiency: Proficiency.COMPETENT,
    logo: <NestJSLogo />,
  },
  {
    name: 'ExpressJs',
    proficiency: Proficiency.COMPETENT,
    logo: <ExpressLogo />,
  },
  {
    name: 'MySQL',
    proficiency: Proficiency.COMPETENT,
    logo: <MySQLLogo />,
  },
];
