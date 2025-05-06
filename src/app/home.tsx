'use client';

import {
  CodeBracketIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/solid';
import {
  CSSLogo,
  HTMLLogo,
  JavascriptLogo,
  NextjsWhiteLogo,
  ReactLogo,
  TailwindcssLogo,
  TypescriptLogo,
} from '../../public/logos';

export const Home = () => {
  return (
    <section
      id='home'
      className='flex w-screen flex-col justify-center bg-stone-950 px-10 py-30'
    >
      <div className='flex w-full self-center md:w-2xl lg:w-4xl'>
        <div className='flex w-4/6 flex-wrap items-center justify-start'>
          <div>
            <div className='absolute flex w-full text-4xl font-extrabold'>
              <div className='text-white'>Hi! I'm</div>
              <div className='ml-1 animate-pulse text-rose-700'>Gary</div>
              <div className='text-white'>.</div>
            </div>
            <div className='mt-10 w-full text-xl font-medium text-gray-400'>
              I'm a software engineer specialising in frontend development and
              web design.
            </div>
            <div className='mt-10 flex w-full justify-between'>
              <div className='animate-box-slide h-2 w-2 border-1 border-red-900' />
            </div>
          </div>
        </div>
        <div className='flex w-2/6 items-center justify-end'>
          <div className='shrink-0 items-center'>
            <img
              alt='Gary Clark'
              src='/images/profile.png'
              className='size-36 h-auto rounded-xl border border-rose-700 grayscale-50'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col self-center text-white md:w-2xl lg:w-4xl'>
        <div className='mb-2 flex font-bold text-white'>
          <CodeBracketIcon className='mr-2 w-4 text-red-700' />
          Core Skills:
        </div>
        <div className='flex flex-wrap'>
          <div className='mr-2 flex items-center'>
            <TypescriptLogo />
            <div className='ml-1'>Typescript</div>
          </div>
          <div className='mr-2 flex items-center'>
            <JavascriptLogo />
            <div className='ml-1'>Javascript</div>
          </div>
          <div className='mr-2 flex items-center'>
            <ReactLogo />
            <div className='ml-1'>React</div>
          </div>
          <div className='mr-2 flex items-center'>
            <NextjsWhiteLogo />
            <div className='ml-1'>Next.js</div>
          </div>
          <div className='mr-2 flex items-center'>
            <HTMLLogo />
            <div className='ml-1'>HTML</div>
          </div>
          <div className='mr-2 flex items-center'>
            <CSSLogo />
            <div className='ml-1'>CSS</div>
          </div>
          <div className='mr-2 flex items-center'>
            <TailwindcssLogo />
            <div className='ml-1'>Tailwind CSS</div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex w-full self-center text-white md:w-2xl lg:w-4xl'>
        <MagnifyingGlassCircleIcon className='mr-2 w-4 text-red-700' />
        Open For Work
      </div>
    </section>
  );
};
