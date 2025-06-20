import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className='space-y-4'
    >
      <p className='leading-relaxed text-gray-400'>
        I specialize in frontend development and web design, creating
        responsive, user-friendly applications that deliver outstanding user
        experiences. With expertise in modern frameworks and a keen eye for
        design, I bring ideas to life through clean, efficient code.
      </p>

      <div className='flex items-center space-x-4 text-sm text-gray-500'>
        <div className='flex items-center space-x-1'>
          <div className='h-2 w-2 rounded-full bg-green-500'></div>
          <span>Available for opportunities</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div className='h-2 w-2 rounded-full bg-blue-500'></div>
          <span>Remote work ready</span>
        </div>
      </div>
    </motion.div>
  );
};
