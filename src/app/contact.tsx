'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const serviceId = 'service_069so8j';
    const templateId = 'template_2s8l0in';
    const publicKey = 'KCgPkY7AnA2baLgFu';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    const { status, text } = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    );

    if (status === 200) {
      setName('');
      setEmail('');
      setMessage('');
      alert('success!');
    } else {
      alert(`failure: ${text}!`);
    }
  };

  return (
    <section
      id='contact'
      className='flex w-screen flex-wrap items-center justify-center bg-stone-950 py-20'
    >
      <div className='w-full text-center text-2xl text-white underline decoration-rose-700 underline-offset-4'>
        CONTACT ME
      </div>
      <div className='max-w-l box-border flex flex-wrap items-center justify-center rounded-2xl p-10'>
        <div className='w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-white shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Your Name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mt-4 w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-white shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Your Email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mt-4 w-full min-w-[200px]'>
          <input
            className='ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-16 text-sm text-white shadow-sm transition duration-600 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none'
            placeholder='Message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <a className='mt-4 flex w-full min-w-[200px] items-center justify-center'>
          <button
            id='submit-button'
            className='cursor-pointer rounded-lg border px-4 py-2 font-bold text-white'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </a>
      </div>
    </section>
  );
};
