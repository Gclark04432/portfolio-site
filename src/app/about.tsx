'use client';

import { frontendStackItems } from '@/data/stack/frontend';
import { backendStackItems } from '@/data/stack/backend';
import { toolStackItems } from '@/data/stack/tools';
import { ToolsAndTechnologies } from './components/ui/toolsAndTechnologies';

export const About = () => {
  return (
    <section
      id='about'
      className='flex w-screen flex-wrap justify-center bg-stone-950 py-20 text-white'
    >
      <div className='w-full text-center text-2xl text-white underline decoration-rose-700 underline-offset-4'>
        ABOUT
      </div>
      <div className='flex w-full justify-center'>
        <div className='flex flex-wrap md:w-2xl lg:w-4xl'>
          <div className='w-full p-4 text-center text-4xl font-bold md:w-1/2 md:text-end'>
            Hey there! I'm Gary Clark, a software developer based in Oregon.
          </div>
          <div className='text-l w-full p-4 text-center font-normal md:w-1/2 md:text-start'>
            {' '}
            I specialize in frontend development, particularly using Next.js,
            React, and Typescript, but I'm also comfortable with various tools
            and able to adapt to project needs. I have experience working in a
            full stack capacity and also in CI/CD flows. <br />
            <br />
            I'm looking for new opportunities where I can merge my love for code
            with my love for learning to solve challenging problems. If you have
            an opening that might be a good fit, let's connect and explore the
            possibilities!
          </div>
        </div>
      </div>
    </section>
  );
};
