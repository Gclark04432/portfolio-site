import { getYearsExperience } from '@/app/lib/GetYearsExperience';
import { motion } from 'framer-motion';

export const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className='relative'
    >
      <div className='relative overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-blue-500/20 p-8 backdrop-blur-sm'>
        <div className='absolute inset-0 bg-gradient-to-r from-rose-500/5 to-purple-500/5' />
        <div className='relative space-y-4 text-center'>
          <div className='mb-2 text-5xl font-bold text-white'>
            {getYearsExperience()}+
          </div>
          <div className='text-lg text-gray-300'>Years of Experience</div>
          <div className='text-sm text-gray-400'>
            Building digital solutions with passion and precision
          </div>
        </div>

        {/* Floating Elements */}
        <div className='absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-purple-500 shadow-lg'>
          <span className='text-2xl'>💻</span>
        </div>
        <div className='absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg'>
          <span className='text-lg'>⚡</span>
        </div>
      </div>
    </motion.div>
  );
};
