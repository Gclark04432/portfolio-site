import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import {
  TypescriptLogo,
  JavascriptLogo,
  ReactLogo,
  NextjsWhiteLogo,
  HTMLLogo,
  CSSLogo,
  TailwindcssLogo,
} from '../../../../../public/logos';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'TypeScript', logo: <TypescriptLogo />, delay: 0.5 },
  { name: 'JavaScript', logo: <JavascriptLogo />, delay: 1 },
  { name: 'React', logo: <ReactLogo />, delay: 1.5 },
  { name: 'Next.js', logo: <NextjsWhiteLogo />, delay: 2 },
  { name: 'HTML', logo: <HTMLLogo />, delay: 2.5 },
  { name: 'CSS', logo: <CSSLogo />, delay: 3 },
  { name: 'Tailwind CSS', logo: <TailwindcssLogo />, delay: 3.5 },
];

export const CoreSkillsGrid = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className='space-y-4'
    >
      <div className='flex items-center space-x-3'>
        <CodeBracketIcon className='h-5 w-5 text-rose-500' />
        <h3 className='text-lg font-semibold text-white'>Core Technologies</h3>
      </div>

      <div className='grid grid-cols-2 gap-3'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5, delay: skill.delay }}
            whileHover={{ scale: 1.05, y: -2 }}
            className='group'
          >
            <div className='flex items-center space-x-3 rounded-lg border border-stone-700 bg-stone-900/80 p-3 transition-all duration-300 hover:border-rose-500/50 hover:bg-stone-800/80'>
              <div className='flex-shrink-0'>{skill.logo}</div>
              <span className='text-gray-300 transition-colors duration-300 group-hover:text-white'>
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
