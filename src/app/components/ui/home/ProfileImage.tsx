import { motion } from 'framer-motion';

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className='flex justify-center lg:justify-end'
    >
      <div className='relative'>
        <div className='relative overflow-hidden rounded-2xl border-2 border-rose-500/30 shadow-2xl'>
          <img
            alt='Gary Clark'
            src='/images/profile.png'
            className='h-60 w-60 object-cover grayscale-50 transition-all duration-500 hover:grayscale-0'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent'></div>
        </div>
      </div>
    </motion.div>
  );
};
