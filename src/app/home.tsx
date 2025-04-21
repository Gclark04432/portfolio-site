'use client';

export const Home = () => {
  return (
    <section
      id='home'
      className='flex h-screen w-screen snap-none items-center justify-center md:snap-start'
    >
      <div className='flex h-screen w-4/6 flex-wrap items-center justify-start bg-stone-950 p-10'>
        <div>
          <div className='animate-wiggle w-full text-4xl font-extrabold text-white underline decoration-rose-700 decoration-1 underline-offset-5'>
            Hi! I'm Gary.
          </div>
          <div className='w-full text-xl font-medium text-gray-400'>
            I'm a software engineer specialising in frontend development and web
            design.
          </div>
        </div>
      </div>
      <div className='flex h-screen w-2/6 items-center justify-center bg-stone-950'>
        <div className='shrink-0 items-center'>
          <img
            alt='Gary Clark'
            src='/profile.png'
            className='size-32 h-auto rounded-xl border border-rose-700 grayscale-50'
          />
        </div>
      </div>
    </section>
  );
};
