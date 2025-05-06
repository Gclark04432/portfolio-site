'use client';

import { Proficiency, Project } from '@/types';
import { NextjsWhiteLogo, ReactLogo, TypescriptLogo } from '../../public/logos';

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
        name: 'Next.js',
        proficiency: Proficiency.EXPERT,
        logo: <NextjsWhiteLogo />,
      },
      {
        name: 'React',
        proficiency: Proficiency.EXPERT,
        logo: <ReactLogo />,
      },
    ],
    img: '/images/portfolio-site.png',
    description:
      'A basic portfolio site to display my capabilities to interested parties',
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
              className={`m-2 flex h-75 max-w-sm flex-wrap rounded-xl bg-[url(/images/portfolio-site.png)] bg-cover bg-center p-2 text-white shadow shadow-rose-700`}
            >
              <div className='w-full self-start rounded-lg pt-1 text-center backdrop-blur-2xl'>
                <div className='mb-2 w-full font-bold'>{project.name}</div>
                <div className='flex w-full flex-wrap'>
                  {project.description}
                </div>
              </div>
              <div className='flex w-full justify-center self-end rounded-lg backdrop-blur-2xl'>
                {project.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className={`align-center m-2 flex p-1 text-white`}>
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
