'use client';

export const Home = () => {
  return (
    <section
      id='home'
      className='flex h-screen w-screen snap-start items-center justify-center'
    >
      <div className='flex h-screen w-4/6 flex-wrap items-center justify-start bg-gray-800 p-10'>
        <div>
          <div className='w-full text-5xl font-extrabold text-white'>
            Hi! I'm Gary.
          </div>
          <div className='w-full text-xl font-medium text-gray-400'>
            I'm a software engineer specialising in frontend development and web
            design.
          </div>
        </div>
      </div>
      <div className='flex h-screen w-2/6 items-center justify-center bg-gray-800'>
        <div className='flex shrink-0 items-center'>
          <img
            alt='Gary Clark'
            src='/profile.png'
            className='size-32 h-auto rounded-full'
          />
        </div>
      </div>
    </section>
  );
};
