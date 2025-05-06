import { Home } from './home';
import { About } from './about';
import { Projects } from './projects';
import { ContactMe } from './contact';
import { NavBar } from './navbar';

export default function Page() {
  return (
    <div className='h-screen w-screen'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}
