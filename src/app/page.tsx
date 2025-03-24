import { Home } from './home';
import { About } from './about';

export default function Page() {
  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <Home />
      <About />
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
