'use client';
import { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavItem } from '@/types';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '@/features/nav/navSlice';
import { motion, AnimatePresence } from 'framer-motion';

const navigation: NavItem[] = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About Me', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact Me', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const NavBar = () => {
  const [atTopOfPage, setAtTopOfPage] = useState<boolean>(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50 && atTopOfPage) {
      setAtTopOfPage(false);
    } else if (latest < 50) {
      setAtTopOfPage(true);
    }
  });

  const location = useSelector((state: any) => state.location.value);
  const dispatch = useDispatch();

  const handleNavChange = (newNav: NavItem) => {
    dispatch(update(newNav.name));
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          atTopOfPage
            ? 'bg-transparent'
            : 'border-b border-rose-500/20 bg-stone-950/95 backdrop-blur-md'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo/Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex items-center space-x-3'
            >
              <div className='relative'>
                <img
                  alt='Gary Clark'
                  src='/images/profile.png'
                  className='h-10 w-10 rounded-full ring-2 ring-rose-500/50 transition-all duration-300 hover:ring-rose-500'
                />
                <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-rose-500 to-purple-500 opacity-20 blur-sm'></div>
              </div>
              <span className='hidden bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-lg font-semibold text-transparent sm:block'>
                Gary Clark
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:block'>
              <div className='flex items-center space-x-1'>
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavChange(item)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    aria-current={location === item.name ? 'page' : undefined}
                    className={classNames(
                      location === item.name
                        ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-stone-800/50 hover:text-white',
                      'relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
                    )}
                  >
                    {item.name}
                    {location === item.name && (
                      <motion.div
                        layoutId='activeTab'
                        className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-rose-500 to-purple-500'
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 transition-all duration-300 hover:bg-stone-800/50 hover:text-white'>
                      <span className='sr-only'>Open main menu</span>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {open ? (
                          <XMarkIcon className='h-6 w-6' />
                        ) : (
                          <Bars3Icon className='h-6 w-6' />
                        )}
                      </motion.div>
                    </DisclosureButton>

                    <DisclosurePanel className='absolute top-full right-0 left-0 border-b border-rose-500/20 bg-stone-950/95 backdrop-blur-md'>
                      <div className='space-y-1 px-2 pt-2 pb-3'>
                        {navigation.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as='a'
                            href={item.href}
                            onClick={() => handleNavChange(item)}
                            aria-current={
                              location === item.name ? 'page' : undefined
                            }
                            className={classNames(
                              location === item.name
                                ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white'
                                : 'text-gray-300 hover:bg-stone-800/50 hover:text-white',
                              'block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300',
                            )}
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
