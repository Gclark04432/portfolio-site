'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { getYearsExperience } from '../../../lib/GetYearsExperience';
import { PersonalIntroduction } from './PersonalIntroduction';
import { KeyHighlight } from './KeyHighlight';
import { StatCard } from './StatCard';
import { ExperienceCard } from './ExperienceCard';

export const About = () => {
  const stats = [
    {
      icon: CodeBracketIcon,
      label: 'Years Experience',
      value: `${getYearsExperience()}+`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: LightBulbIcon,
      label: 'Technologies',
      value: '15+',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const highlights = [
    'Frontend Development Specialist',
    'Full Stack Capabilities',
    'CI/CD Pipeline Experience',
    'Modern Web Technologies',
    'Problem-Solving Focus',
    'Continuous Learning Mindset',
  ];

  return (
    <section
      id='about'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-24'
    >
      <div className='w-full max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold text-white underline decoration-rose-700 underline-offset-4'>
            ABOUT ME
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-400'>
            Passionate software developer crafting digital experiences with
            modern technologies
          </p>
        </motion.div>

        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-8 lg:col-span-2'
          >
            <PersonalIntroduction />

            <div className='space-y-4'>
              <h4 className='text-xl font-semibold text-white'>
                What I Bring to the Table
              </h4>
              <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {highlights.map((highlight, index) => (
                  <KeyHighlight
                    highlight={highlight}
                    index={index}
                    key={highlight}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-8'
          >
            <div className='space-y-4'>
              {stats.map((stat, index) => (
                <StatCard stat={stat} index={index} key={stat.label} />
              ))}
            </div>

            <ExperienceCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
