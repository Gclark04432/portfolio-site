'use client';

import { Proficiency, Project } from '@/types';
import { JavascriptLogo } from '../../public/logos';

const projects: Project[] = [
  {
    name: 'Portfolio Site',
    technologies: [
      {
        name: 'Typescript',
        img: '',
        proficiency: Proficiency.EXPERT,
        border: 'bg-amber-500',
        logo: <JavascriptLogo />,
      },
      {
        name: 'Next.js',
        img: '',
        proficiency: Proficiency.EXPERT,
        border: 'bg-amber-500',
        logo: <JavascriptLogo />,
      },
      {
        name: 'React',
        img: '',
        proficiency: Proficiency.EXPERT,
        border: 'bg-amber-500',
        logo: <JavascriptLogo />,
      },
    ],
    img: '',
    description: '',
  },
];

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex h-screen w-screen flex-wrap items-center justify-center bg-gray-800'
    >
      <div className='text-l w-full p-8 font-normal text-gray-400'>
        Projects...
      </div>
      <div className='text-l w-full p-8 font-bold text-purple-400'>
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className='m-2 rounded border bg-slate-500 p-8'
            >
              <div>{project.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
