import { backendStackItems } from '@/data/stack/backend';
import { frontendStackItems } from '@/data/stack/frontend';
import { toolStackItems } from '@/data/stack/tools';
import { ToolOrTech } from './IndividualItem';
import { motion } from 'framer-motion';

export const ToolsAndTechnologies = () => {
  return (
    <section
      id='about'
      className='flex w-screen flex-wrap justify-center bg-stone-950 py-20 text-white'
    >
      <div className='flex w-full justify-center pt-20'>
        <div className='flex justify-center md:w-2xl lg:w-4xl'>
          <div className='flex flex-wrap'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-12 w-full text-center text-3xl font-bold text-white'
            >
              <span className='underline decoration-rose-700 underline-offset-4'>
                TOOLS & TECHNOLOGIES
              </span>
            </motion.div>

            <div className='flex flex-wrap justify-evenly p-8'>
              {[
                ...frontendStackItems,
                ...backendStackItems,
                ...toolStackItems,
              ].map((tech, index) => {
                return <ToolOrTech tech={tech} index={index} key={tech.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
