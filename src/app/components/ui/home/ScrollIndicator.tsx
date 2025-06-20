import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className='absolute bottom-8 left-1/2 -translate-x-1/2 transform'
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='flex flex-col items-center space-y-2 text-gray-400'
      >
        <span className='text-sm'>Scroll to explore</span>
        <ArrowDownIcon className='h-5 w-5' />
      </motion.div>
    </motion.div>
  );
};
