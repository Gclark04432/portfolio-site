import {
  CodeBracketIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/react/24/solid';

export const PersonalIntroduction = () => {
  return (
    <div className='space-y-6'>
      <div className='mb-6 flex items-center space-x-3'>
        <div className='rounded-xl bg-gradient-to-r from-rose-500 to-purple-500 p-3 shadow-lg'>
          <CodeBracketIcon className='h-6 w-6 text-white' />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-white'>Gary Clark</h3>
          <div className='flex items-center space-x-4 text-sm text-gray-400'>
            <div className='flex items-center space-x-1'>
              <MapPinIcon className='h-4 w-4' />
              <span>Oregon, USA</span>
            </div>
            <div className='flex items-center space-x-1'>
              <CalendarIcon className='h-4 w-4' />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4 text-lg leading-relaxed text-gray-300'>
        <p>
          Hey there! I'm a software developer with a passion for creating
          exceptional digital experiences. I specialize in frontend development,
          particularly using{' '}
          <span className='font-semibold text-rose-400'>Next.js</span>,
          <span className='font-semibold text-rose-400'> React</span>, and
          <span className='font-semibold text-rose-400'> TypeScript</span>, but
          I'm also comfortable with various tools and able to adapt to project
          needs.
        </p>
        <p>
          I have experience working in a full stack capacity and also in CI/CD
          flows, giving me a comprehensive understanding of the entire
          development lifecycle. My approach combines technical expertise with
          creative problem-solving to deliver solutions that exceed
          expectations.
        </p>
        <p>
          I'm looking for new opportunities where I can merge my love for code
          with my love for learning to solve challenging problems. If you have
          an opening that might be a good fit, let's connect and explore the
          possibilities!
        </p>
      </div>
    </div>
  );
};
