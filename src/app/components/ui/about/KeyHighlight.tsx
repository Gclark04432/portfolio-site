import { motion } from 'framer-motion';

interface KeyHighlightProps {
  highlight: string;
  index: number;
}

export const KeyHighlight = ({ highlight, index }: KeyHighlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      className='flex items-center space-x-3 rounded-lg border border-stone-800 bg-stone-900/50 p-3 transition-all duration-300 hover:border-rose-500/50'
    >
      <div className='h-2 w-2 rounded-full bg-rose-500'></div>
      <span className='text-gray-300'>{highlight}</span>
    </motion.div>
  );
};
