import { motion } from 'framer-motion';
import { CategoryCard } from './CategoryCard';
import { stackCategories } from '@/data/stack/stackCategories';
import { TechnicalExpertise } from './TechnicalExpertise';

export const ToolsAndTechnologies = () => {
  return (
    <section
      id='tech-stack'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-20'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16 w-full text-center text-3xl font-bold text-white'
      >
        <span className='underline decoration-rose-700 underline-offset-4'>
          TOOLS & TECHNOLOGIES
        </span>
      </motion.div>

      <div className='w-full max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {stackCategories.map((category, index) => (
            <CategoryCard
              category={category}
              index={index}
              key={category.title}
            />
          ))}
        </div>

        <TechnicalExpertise />
      </div>
    </section>
  );
};
