import { Home } from './home';
import { About } from './about';
import { ContactMe } from './contact';

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
      <ContactMe />
    </div>
  );
}
