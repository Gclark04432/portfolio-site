'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactMe = () => {
  return (
    <section
      id='contact'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-24'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16 w-full text-center text-3xl font-bold text-white'
      >
        <span className='underline decoration-rose-700 underline-offset-4'>
          GET IN TOUCH
        </span>
      </motion.div>

      <div className='flex w-full max-w-6xl flex-col gap-12 lg:flex-row'>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
