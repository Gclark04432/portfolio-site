'use client';

import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitContactForm } from '@/app/lib/SubmitContactForm';
import { SubmissionStatus } from '@/types';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmissionStatus>(
    SubmissionStatus.IDLE,
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(SubmissionStatus.IDLE);

    const status = await submitContactForm(
      formData.name,
      formData.email,
      formData.message,
    );

    setSubmitStatus(status);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus(SubmissionStatus.IDLE);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className='lg:w-2/3'
    >
      <div className='rounded-2xl border border-stone-800 bg-stone-900/50 p-8 backdrop-blur-sm'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
              <label
                htmlFor='name'
                className='mb-2 block text-sm font-medium text-gray-300'
              >
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full rounded-lg border bg-stone-800/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-rose-500/50 focus:outline-none ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-stone-700 hover:border-stone-600 focus:border-rose-500'
                }`}
                placeholder='Your name'
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mt-1 flex items-center text-sm text-red-400'
                >
                  <ExclamationCircleIcon className='mr-1 h-4 w-4' />
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-300'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded-lg border bg-stone-800/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-rose-500/50 focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-stone-700 hover:border-stone-600 focus:border-rose-500'
                }`}
                placeholder='your.email@example.com'
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mt-1 flex items-center text-sm text-red-400'
                >
                  <ExclamationCircleIcon className='mr-1 h-4 w-4' />
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-300'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full resize-none rounded-lg border bg-stone-800/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-rose-500/50 focus:outline-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-stone-700 hover:border-stone-600 focus:border-rose-500'
              }`}
              placeholder='Tell me about your project or just say hello...'
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-1 flex items-center text-sm text-red-400'
              >
                <ExclamationCircleIcon className='mr-1 h-4 w-4' />
                {errors.message}
              </motion.p>
            )}
          </div>

          <motion.button
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg px-6 py-4 font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? 'cursor-not-allowed bg-stone-700'
                : 'bg-gradient-to-r from-rose-600 to-rose-700 shadow-lg hover:from-rose-700 hover:to-rose-800 hover:shadow-rose-500/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                <span>Sending...</span>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircleIcon className='h-5 w-5' />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <PaperAirplaneIcon className='h-5 w-5' />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          {submitStatus === SubmissionStatus.ERROR && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center justify-center space-x-2 text-center text-red-400'
            >
              <ExclamationCircleIcon className='h-5 w-5' />
              <span>Failed to send message. Please try again.</span>
            </motion.div>
          )}

          {submitStatus === SubmissionStatus.SUCCESS && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center justify-center space-x-2 text-center text-green-400'
            >
              <CheckCircleIcon className='h-5 w-5' />
              <span>Message sent successfully.</span>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};
