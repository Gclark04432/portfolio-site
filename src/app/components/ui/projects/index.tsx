'use client';

import { Proficiency, Project } from '@/types';
import { motion } from 'framer-motion';
import {
  CSSLogo,
  HTMLLogo,
  JavascriptLogo,
  NextjsWhiteLogo,
  ReactLogo,
  TypescriptLogo,
} from '../../../../../public/logos';
import { ProjectCard } from './ProjectCard';
import { LinkIcon } from '@heroicons/react/24/solid';

const projects: Project[] = [
  {
    name: 'Portfolio Site',
    technologies: [
      {
        name: 'Typescript',
        proficiency: Proficiency.EXPERT,
        logo: <TypescriptLogo />,
      },
      {
        name: 'React',
        proficiency: Proficiency.EXPERT,
        logo: <ReactLogo />,
      },
      {
        name: 'Next.js',
        proficiency: Proficiency.EXPERT,
        logo: <NextjsWhiteLogo />,
      },
    ],
    img: '/images/portfolio-site.png',
    description:
      'A modern, responsive portfolio website built with Next.js and React to showcase my work.',
    github: 'https://github.com/Gclark04432/fantasy-matchup-tracker',
    demo: 'https://fantasy-matchup-tracker.vercel.app',
  },
  {
    name: 'Fantasy Matchup Tracker',
    technologies: [
      {
        name: 'Typescript',
        proficiency: Proficiency.EXPERT,
        logo: <TypescriptLogo />,
      },
      {
        name: 'React',
        proficiency: Proficiency.EXPERT,
        logo: <ReactLogo />,
      },
      {
        name: 'Next.js',
        proficiency: Proficiency.EXPERT,
        logo: <NextjsWhiteLogo />,
      },
    ],
    img: '/images/fantasy-matchup-tracker.png',
    description:
      'A real-time fantasy football player tracking application built with Next.js, TypeScript, and Supabase for managing player statistics and matchups.',
    github: 'https://github.com/Gclark04432/fantasy-matchup-tracker',
    demo: 'https://fantasy-matchup-tracker.vercel.app',
  },
  {
    name: 'Dad Jokes & Dogs',
    technologies: [
      {
        name: 'Javascript',
        proficiency: Proficiency.EXPERT,
        logo: <JavascriptLogo />,
      },
      {
        name: 'HTML',
        proficiency: Proficiency.EXPERT,
        logo: <HTMLLogo />,
      },
      {
        name: 'CSS',
        proficiency: Proficiency.EXPERT,
        logo: <CSSLogo />,
      },
    ],
    img: '/images/dj&d.png',
    description:
      'A simple Chrome extension that fetches a random dad joke and dog pic to brighten your day with daily doses of humor and cuteness.',
    github: 'https://github.com/Gclark04432/fantasy-matchup-tracker',
    demo: 'https://fantasy-matchup-tracker.vercel.app',
  },
];

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-24'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16 w-full text-center text-3xl font-bold text-white'
      >
        <span className='underline decoration-rose-700 underline-offset-4'>
          FEATURED PROJECTS
        </span>
      </motion.div>

      <div className='w-full max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <div className='mx-auto max-w-2xl rounded-2xl border border-stone-800 bg-stone-900/50 p-8 backdrop-blur-sm'>
            <h3 className='mb-4 text-2xl font-bold text-white'>
              Interested in Working Together?
            </h3>
            <p className='mb-6 leading-relaxed text-gray-400'>
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-800 hover:shadow-rose-500/25'
            >
              <span>Get In Touch</span>
              <LinkIcon className='h-4 w-4' />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
