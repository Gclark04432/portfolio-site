import {
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';
import { backendStackItems } from './backend';
import { frontendStackItems } from './frontend';
import { toolStackItems } from './tools';

export const stackCategories = [
  {
    title: 'Frontend Development',
    icon: CodeBracketIcon,
    items: frontendStackItems,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'Backend Development',
    icon: ServerIcon,
    items: backendStackItems,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    title: 'DevOps & Tools',
    icon: WrenchScrewdriverIcon,
    items: toolStackItems,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
];
