'use client';

import { frontendStackItems } from '@/data/stack/frontend';
import { backendStackItems } from '@/data/stack/backend';
import { toolStackItems } from '@/data/stack/tools';

export const About = () => {
  return (
    <section
      id='about'
      className='flex w-screen snap-none flex-wrap items-center justify-center bg-white text-gray-800 md:h-screen md:snap-start'
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
                <div className='mr-0.5 h-4 w-4 cursor-pointer rounded-full border-2 border-amber-500 bg-white hover:animate-bounce' />
                <div className='mx-0.25 h-4 w-4 cursor-pointer rounded-full border-2 border-purple-500 bg-white hover:animate-bounce' />
                <div className='mx-0.25 h-4 w-4 cursor-pointer rounded-full border-2 border-blue-500 bg-white hover:animate-bounce' />
                <div className='mx-0.25 h-4 w-4 cursor-pointer rounded-full border-2 border-red-500 bg-white hover:animate-bounce' />
                <div className='ml-0.25 h-4 w-4 cursor-pointer rounded-full border-2 border-green-500 bg-white hover:animate-bounce' />
              </div>
            </div>
          </div>
          <div className='mx-8 w-full border-b-2 text-xl font-bold text-gray-600'>
            FRONTEND
          </div>

          <div className='flex w-full flex-wrap px-8'>
            {frontendStackItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`mt-2 mr-2 flex rounded border ${item.border} bg-white px-2 py-1`}
                >
                  <div className='flex items-center'>{item.logo}</div>
                  <div className='ml-1'>{item.name}</div>
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
                <div
                  key={item.name}
                  className={`mt-2 mr-2 flex rounded border ${item.border} bg-white px-2 py-1`}
                >
                  <div className='flex items-center'>{item.logo}</div>
                  <div className='ml-1'>{item.name}</div>
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
                <div
                  key={item.name}
                  className={`mt-2 mr-2 flex rounded border ${item.border} bg-white px-2 py-1`}
                >
                  <div className='flex items-center'>{item.logo}</div>
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
