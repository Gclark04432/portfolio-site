import { Home } from './home';
import { About } from './about';
import { Projects } from './projects';
import { ContactMe } from './contact';

export default function Page() {
  return (
    <div className='h-screen w-screen overflow-y-scroll'>
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}
