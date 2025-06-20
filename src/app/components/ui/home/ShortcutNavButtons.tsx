import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const ShortcutNavButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className='flex flex-col gap-4 sm:flex-row'
    >
      <motion.a
        href='#projects'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='inline-flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-800 hover:shadow-rose-500/25'
      >
        <span>View My Work</span>
        <RocketLaunchIcon className='h-5 w-5' />
      </motion.a>

      <motion.a
        href='#contact'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='inline-flex items-center justify-center space-x-2 rounded-lg border border-stone-700 bg-stone-800 px-8 py-4 font-semibold text-gray-300 transition-all duration-300 hover:border-stone-600 hover:bg-stone-700 hover:text-white'
      >
        <span>Get In Touch</span>
        <ArrowDownIcon className='h-5 w-5' />
      </motion.a>
    </motion.div>
  );
};
