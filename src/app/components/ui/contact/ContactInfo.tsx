import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export const ContactInfo = () => {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'gclark04432@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (971) 447-5720',
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Bend, OR',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='lg:w-1/3'
    >
      <div className='rounded-2xl border border-stone-800 bg-stone-900/50 p-8 backdrop-blur-sm'>
        <h3 className='mb-6 text-2xl font-bold text-white'>Let's Connect</h3>
        <p className='mb-8 leading-relaxed text-gray-400'>
          I'm always interested in new opportunities and exciting projects. Feel
          free to reach out if you'd like to collaborate or just say hello!
        </p>

        <div className='space-y-6'>
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className='group flex items-center space-x-4 text-gray-300 transition-colors duration-300 hover:text-rose-400'
            >
              <div className='rounded-lg bg-stone-800 p-2 transition-colors duration-300 group-hover:bg-rose-700/20'>
                <info.icon className='h-5 w-5' />
              </div>
              <div>
                <div className='text-sm text-gray-500'>{info.label}</div>
                <div className='font-medium'>{info.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
