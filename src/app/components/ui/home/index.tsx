'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowDownIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import {
  CSSLogo,
  HTMLLogo,
  JavascriptLogo,
  NextjsWhiteLogo,
  ReactLogo,
  TailwindcssLogo,
  TypescriptLogo,
} from '../../../../../public/logos';
import { useEffect, useState } from 'react';
import { Greeting } from './Greeting';
import { Introduction } from './Introduction';
import { ShortcutNavButtons } from './ShortcutNavButtons';
import { ProfileImage } from './ProfileImage';
import { CoreSkillsGrid } from './CoreSkillsGrid';
import { ScrollIndicator } from './ScrollIndicator';

export const Home = () => {
  return (
    <section
      id='home'
      className='relative flex h-screen w-screen flex-col justify-center overflow-hidden bg-stone-950 px-4 py-20'
    >
      <div className='relative z-10 mx-auto w-full max-w-7xl'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <Greeting />
            <Introduction />
            <ShortcutNavButtons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8'
          >
            <ProfileImage />

            <CoreSkillsGrid />
          </motion.div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};
