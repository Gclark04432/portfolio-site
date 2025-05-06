'use client';

import { Proficiency, Project } from '@/types';
import { JavascriptLogo } from '../../public/logos';

const projects: Project[] = [
  {
    name: 'Portfolio Site',
    technologies: [
      {
        name: 'Typescript',
        proficiency: Proficiency.EXPERT,
        logo: <JavascriptLogo />,
      },
      {
        name: 'Next.js',
        proficiency: Proficiency.EXPERT,
        logo: <JavascriptLogo />,
      },
      {
        name: 'React',
        proficiency: Proficiency.EXPERT,
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
      className='flex w-screen flex-wrap justify-center bg-stone-950 py-20 text-white'
    >
      <div className='w-full text-center text-2xl text-white underline decoration-rose-700 underline-offset-4'>
        SOME OF MY WORK
      </div>
      <div className='mt-8 flex justify-center md:w-2xl lg:w-4xl'>
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className='m-2 flex flex-wrap rounded-xl bg-stone-900 p-2 text-white shadow shadow-rose-700'
            >
              <div className='w-full text-center'>{project.name}</div>
              <div className='flex'>
                {project.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className={`m-2 flex p-1 text-white`}>
                      <div className='flex items-center'>{tech.logo}</div>
                      <div className='ml-1'>{tech.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
