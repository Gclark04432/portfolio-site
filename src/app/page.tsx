export default function Home() {
  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <section
        id='home'
        className='flex h-screen w-screen snap-start items-center justify-center bg-amber-400'
      >
        Home
      </section>
      <section
        id='about'
        className='flex h-screen w-screen snap-start items-center justify-center bg-cyan-400'
      >
        About Me
      </section>
      <section
        id='projects'
        className='flex h-screen w-screen snap-start items-center justify-center bg-fuchsia-400'
      >
        Projects
      </section>
      <section
        id='contact'
        className='flex h-screen w-screen snap-start items-center justify-center bg-indigo-400'
      >
        Contact Me
      </section>
    </div>
  );
}
