import { StackItem } from '@/types';
import { motion } from 'framer-motion';

interface ToolOrTechProps {
  tech: StackItem;
  index: number;
}

export const ToolOrTech = ({ tech, index }: ToolOrTechProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    >
      <div
        className={`m-2 flex rounded-xl bg-stone-900 p-4 text-white shadow shadow-rose-700`}
      >
        <div className='flex items-center'>{tech.logo}</div>
        <div className='ml-1'>{tech.name}</div>
      </div>
    </motion.div>
  );
};
