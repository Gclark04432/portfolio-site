import { getYearsExperience } from '@/app/lib/GetYearsExperience';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const TechnicalExpertise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className='mt-16 text-center'
    >
      <div className='mx-auto max-w-4xl rounded-2xl border border-stone-800 bg-stone-900/50 p-8 backdrop-blur-sm'>
        <div className='mb-6 flex items-center justify-center space-x-3'>
          <SparklesIcon className='h-8 w-8 text-rose-400' />
          <h3 className='text-2xl font-bold text-white'>Technical Expertise</h3>
        </div>

        <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div className='text-center'>
            <div className='mb-2 text-3xl font-bold text-rose-400'>15+</div>
            <div className='text-gray-400'>Technologies</div>
          </div>
          <div className='text-center'>
            <div className='mb-2 text-3xl font-bold text-rose-400'>
              {getYearsExperience()}+
            </div>
            <div className='text-gray-400'>Years Experience</div>
          </div>
          <div className='text-center'>
            <div className='mb-2 text-3xl font-bold text-rose-400'>100%</div>
            <div className='text-gray-400'>Full Stack</div>
          </div>
        </div>

        <p className='mx-auto max-w-2xl leading-relaxed text-gray-300'>
          I specialize in modern web development with expertise across the
          entire stack. From crafting responsive user interfaces to building
          robust backend systems, I bring a comprehensive skill set to every
          project.
        </p>
      </div>
    </motion.div>
  );
};
