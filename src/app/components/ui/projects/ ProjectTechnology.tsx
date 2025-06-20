import { StackItem } from '@/types';
import { motion } from 'framer-motion';

interface ProjectTechnologyProps {
  tech: StackItem;
}

export const ProjectTechnology = ({ tech }: ProjectTechnologyProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='flex items-center space-x-2 rounded-lg border border-stone-700 bg-stone-800/50 px-3 py-2 transition-all duration-300 hover:border-rose-500/50 hover:bg-stone-700/50'
    >
      <div className='flex items-center'>{tech.logo}</div>
      <span className='text-sm font-medium text-gray-300'>{tech.name}</span>
    </motion.div>
  );
};
