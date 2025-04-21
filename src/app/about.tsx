'use client';

import { frontendStackItems } from '@/data/stack/frontend';
import { backendStackItems } from '@/data/stack/backend';
import { toolStackItems } from '@/data/stack/tools';
import { Proficiency, StackItem } from '@/types';

export const About = () => {
  const getBorderClass = (item: StackItem): string => {
    switch (item.proficiency) {
      case Proficiency.EXPERT:
        return 'animate-rotate-border mt-2 mr-2 rounded bg-conic/[from_var(--border-angle)] from-black via-amber-300 to-black p-1';
      case Proficiency.PROFICIENT:
        return 'animate-rotate-border mt-2 mr-2 rounded bg-conic/[from_var(--border-angle)] from-black via-purple-300 to-black p-1';
      case Proficiency.COMPETENT:
        return 'animate-rotate-border mt-2 mr-2 rounded bg-conic/[from_var(--border-angle)] from-black via-blue-300 to-black p-1';
      case Proficiency.BEGINNER:
        return 'animate-rotate-border mt-2 mr-2 rounded bg-conic/[from_var(--border-angle)] from-black via-green-300 to-black p-1';
      default:
        return 'animate-rotate-border mt-2 mr-2 rounded bg-conic/[from_var(--border-angle)] from-black via-black to-black p-1';
    }
  };

  return (
    <section
      id='about'
      className='flex w-screen snap-none flex-wrap items-center justify-center bg-stone-950 text-white md:h-screen md:snap-start'
    >
      <div className='flex w-full items-center justify-center'>
        <div className='text-l p-8 font-normal'>
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
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-wrap'>
          <div className='flex w-full justify-between p-8 text-2xl font-extrabold'>
            <div>My Stack</div>
            <div className='align- flex flex-wrap'>
              <div className='w-full text-end text-lg'>Key</div>
              <div className='flex w-full justify-end'>
                <div className='animate-rotate-border mr-0.5 h-5 w-5 rounded-full bg-conic/[from_var(--border-angle)] from-black via-amber-300 to-black p-0.5'>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-white' />
                </div>
                <div className='animate-rotate-border mr-0.5 h-5 w-5 rounded-full bg-conic/[from_var(--border-angle)] from-black via-purple-300 to-black p-0.5'>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-white' />
                </div>{' '}
                <div className='animate-rotate-border mr-0.5 h-5 w-5 rounded-full bg-conic/[from_var(--border-angle)] from-black via-blue-300 to-black p-0.5'>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-white' />
                </div>{' '}
                <div className='animate-rotate-border mr-0.5 h-5 w-5 rounded-full bg-conic/[from_var(--border-angle)] from-black via-green-300 to-black p-0.5'>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-white' />
                </div>
              </div>
            </div>
          </div>
          <div className='mx-8 w-full border-b-2 text-xl font-bold text-gray-600'>
            FRONTEND
          </div>

          <div className='flex w-full flex-wrap px-8'>
            {frontendStackItems.map((item) => {
              return (
                <div key={item.name} className={`${getBorderClass(item)}`}>
                  <div
                    className={`flex rounded bg-white px-2 py-1 text-slate-950`}
                  >
                    <div className='flex items-center'>{item.logo}</div>
                    <div className='ml-1'>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mx-8 mt-4 w-full border-b-2 text-xl font-bold text-gray-600'>
            BACKEND
          </div>
          <div className='flex w-full flex-wrap px-8'>
            {backendStackItems.map((item) => {
              return (
                <div key={item.name} className={`${getBorderClass(item)}`}>
                  <div
                    className={`flex rounded bg-white px-2 py-1 text-slate-950`}
                  >
                    <div className='flex items-center'>{item.logo}</div>
                    <div className='ml-1'>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mx-8 mt-4 w-full border-b-2 text-xl font-bold text-gray-600'>
            TOOLS
          </div>
          <div className='flex w-full flex-wrap px-8'>
            {toolStackItems.map((item) => {
              return (
                <div key={item.name} className={`${getBorderClass(item)}`}>
                  <div
                    className={`flex rounded bg-white px-2 py-1 text-slate-950`}
                  >
                    <div className='flex items-center'>{item.logo}</div>
                    <div className='ml-1'>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
