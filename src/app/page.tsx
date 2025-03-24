import { Home } from './home';

export default function Page() {
  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <Home />
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
