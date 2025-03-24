'use client';

const stackItems = [
  { name: 'Javascript', img: '' },
  { name: 'Typescript', img: '' },
  { name: 'Next.js', img: '' },
  { name: 'React', img: '' },
  { name: 'NodeJs', img: '' },
];

export const About = () => {
  return (
    <section
      id='about'
      className='flex h-screen w-screen snap-start items-center justify-center bg-gray-800'
    >
      <div className='flex h-screen w-1/2 items-center justify-center'>
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
      <div className='flex h-screen w-1/2 items-center justify-center'>
        <div className='flex flex-wrap'>
          <div className='ml-20 flex w-full p-8 text-3xl font-extrabold text-gray-400'>
            My Stack
          </div>
          <div className='ml-20 flex w-full flex-wrap p-8'>
            {stackItems.map((item) => {
              return (
                <div className='mt-2 mr-2 rounded bg-gray-900 p-1 text-gray-200'>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
