'use client';

export const About = () => {
  return (
    <section
      id='about'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-20'
    >
      <div className='w-full max-w-6xl'>
        <div className='mb-12 text-center'>
          <h2 className='mb-8 text-3xl font-bold text-white underline decoration-rose-700 underline-offset-4'>
            ABOUT ME
          </h2>
        </div>

        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-6'>
            <h3 className='text-2xl leading-tight font-bold text-white'>
              Hey there! I'm Gary Clark, a software developer based in Oregon.
            </h3>
            <div className='space-y-4 leading-relaxed text-gray-300'>
              <p>
                I specialize in frontend development, particularly using
                Next.js, React, and TypeScript, but I'm also comfortable with
                various tools and able to adapt to project needs. I have
                experience working in a full stack capacity and also in CI/CD
                flows.
              </p>
              <p>
                I'm looking for new opportunities where I can merge my love for
                code with my love for learning to solve challenging problems. If
                you have an opening that might be a good fit, let's connect and
                explore the possibilities!
              </p>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <div className='relative'>
              <div className='flex h-64 w-64 items-center justify-center rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/20 to-purple-500/20 backdrop-blur-sm'>
                <div className='text-center'>
                  <div className='mb-2 text-4xl font-bold text-white'>4+</div>
                  <div className='text-gray-300'>Years of Experience</div>
                </div>
              </div>
              <div className='absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-purple-500'>
                <span className='font-bold text-white'>💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
