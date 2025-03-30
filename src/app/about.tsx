'use client';

import {
  JavascriptLogo,
  TypescriptLogo,
  NextjsLogo,
  ReactLogo,
  NodejsLogo,
  HTMLLogo,
  CSSLogo,
  TailwindcssLogo,
  JavaLogo,
  PythonLogo,
  MySQLLogo,
  DockerLogo,
  JenkinsLogo,
  AWSLogo,
} from '../../public/logos';

import { Proficiency, StackItem } from '@/types';

const stackItems: StackItem[] = [
  {
    name: 'Javascript',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <JavascriptLogo />,
  },
  {
    name: 'Typescript',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <TypescriptLogo />,
  },
  {
    name: 'Next.js',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <NextjsLogo />,
  },
  {
    name: 'React',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <ReactLogo />,
  },
  {
    name: 'NodeJs',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <NodejsLogo />,
  },
  {
    name: 'HTML',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <HTMLLogo />,
  },
  {
    name: 'CSS',
    img: '',
    proficiency: Proficiency.EXPERT,
    border: 'bg-amber-500',
    logo: <CSSLogo />,
  },
  {
    name: 'TailwindCSS',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <TailwindcssLogo />,
  },
  {
    name: 'Java',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <JavaLogo />,
  },
  {
    name: 'Python',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-blue-500',
    logo: <PythonLogo />,
  },
  {
    name: 'MySQL',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <MySQLLogo />,
  },
  {
    name: 'Docker',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <DockerLogo />,
  },
  {
    name: 'Jenkins',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <JenkinsLogo />,
  },
  {
    name: 'AWS',
    img: '',
    proficiency: Proficiency.COMPETENT,
    border: 'bg-red-500',
    logo: <AWSLogo />,
  },
];

export const About = () => {
  return (
    <section
      id='about'
      className='flex w-screen snap-none flex-wrap items-center justify-center bg-gray-800 md:h-screen md:snap-start'
    >
      <div className='flex w-full items-center justify-center md:h-screen md:w-1/2'>
        <div className='text-l ml-20 p-8 font-normal text-gray-400'>
          Hey there! I'm Gary Clark, a software developer based in Oregon. I
          specialize in frontend development, particularly using Next.js, React,
          and Typescript, but I'm also comfortable with various tools and able
          to adapt to project needs. I also have experience in full stack
          development. <br />
          <br />
          I'm looking for new opportunities where I can merge my love for code
          with my love for learning to solve challenging problems. If you have
          an opening that might be a good fit, let's connect and explore the
          possibilities!
        </div>
      </div>
      <div className='flex w-full items-center justify-center md:h-screen md:w-1/2'>
        <div className='flex flex-wrap'>
          <div className='ml-20 flex w-full p-8 text-3xl font-extrabold text-gray-400'>
            My Stack
          </div>
          <div className='ml-20 flex w-full flex-wrap p-8'>
            {stackItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`mt-2 mr-2 flex rounded border border-amber-400 bg-slate-400 px-4 py-2`}
                >
                  {item.logo}
                  <div className='ml-1'>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
