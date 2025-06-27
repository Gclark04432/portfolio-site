import { Project } from '@/types';
import { EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { ProjectTechnology } from './ ProjectTechnology';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className='group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 backdrop-blur-sm transition-all duration-500 hover:border-rose-500/50'
    >
      <div className='relative h-48 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
          style={{ backgroundImage: `url(${project.img})` }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent' />

        <div className='absolute inset-0 flex flex-col justify-between p-6'>
          <div>
            <h3 className='mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-rose-400'>
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      <div className='p-6'>
        <p className='mb-6 line-clamp-3 leading-relaxed text-gray-300'>
          {project.description}
        </p>

        <div className='mb-6'>
          <h4 className='mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase'>
            Technologies Used
          </h4>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <ProjectTechnology tech={tech} key={tech.name} />
            ))}
          </div>
        </div>

        <div className='flex space-x-3'>
          {project.github ? (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-800 hover:shadow-rose-500/25'
              href={project.github}
              target='_blank'
            >
              <EyeIcon className='h-4 w-4' />
              <span>View Project</span>
            </motion.a>
          ) : (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-800 hover:shadow-rose-500/25'
            >
              <EyeIcon className='h-4 w-4' />
              <span>Coming Soon</span>
            </motion.div>
          )}

          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex items-center justify-center space-x-2 rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-stone-600 hover:bg-stone-700 hover:text-white'
              href={project.demo}
              target='_blank'
            >
              <ArrowTopRightOnSquareIcon className='h-4 w-4' />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
    </motion.div>
  );
};
