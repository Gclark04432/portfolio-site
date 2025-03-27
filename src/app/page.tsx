import { Home } from './home';
import { About } from './about';
import { Projects } from './projects';
import { ContactMe } from './contact';

export default function Page() {
  return (
    <div className='h-screen w-screen snap-none snap-y overflow-y-scroll md:snap-mandatory'>
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}
