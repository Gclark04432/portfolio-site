import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const Greeting = () => {
  return (
    <div className='space-y-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex items-center space-x-3'
      >
        <div className='rounded-lg bg-gradient-to-r from-rose-500 to-purple-500 p-2'>
          <SparklesIcon className='h-5 w-5 text-white' />
        </div>
        <span className='font-medium text-rose-400'>
          Welcome to my portfolio
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-5xl leading-tight font-bold lg:text-6xl'
      >
        <span className='text-white'>Hi! I'm </span>
        <span className='bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent'>
          Gary
        </span>
        <span className='text-white'>.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='text-xl leading-relaxed text-gray-300 lg:text-2xl'
      >
        A passionate software engineer crafting exceptional digital experiences
        with modern technologies.
      </motion.p>
    </div>
  );
};
