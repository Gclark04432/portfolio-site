'use client';

export const ContactMe = () => {
  return (
    <section
      id='contact'
      className='flex h-screen w-screen snap-start items-center justify-center bg-gray-800'
    >
      <div className='max-w-l box-border flex flex-wrap items-center justify-center rounded-2xl p-10'>
        <div className='w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Your Name...'
          />
        </div>

        <div className='mt-4 w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Your Email...'
          />
        </div>

        <div className='mt-4 w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-16 text-sm text-slate-700 shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Message...'
          />
        </div>
        <div className='mt-4 flex w-full min-w-[200px] items-center justify-center'>
          <button className='cursor-pointer rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
