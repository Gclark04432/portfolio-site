'use client';

import { About } from './components/ui/about';
import { Home } from './components/ui/home';
import { Projects } from './components/ui/projects';
import { ContactMe } from './components/ui/contact';
import { NavBar } from './navbar';
import { Provider } from 'react-redux';
import store from './store.js';
import { ToolsAndTechnologies } from './components/ui/toolsAndTechnologies';

export default function Page() {
  return (
    <Provider store={store}>
      <div className='h-screen w-screen'>
        <NavBar />
        <Home />
        <About />
        <ToolsAndTechnologies />
        <Projects />
        <ContactMe />
      </div>
    </Provider>
  );
}
