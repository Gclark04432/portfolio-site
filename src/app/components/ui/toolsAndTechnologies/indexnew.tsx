import { backendStackItems } from '@/data/stack/backend';
import { frontendStackItems } from '@/data/stack/frontend';
import { toolStackItems } from '@/data/stack/tools';
import { ToolOrTech } from './IndividualItem';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const ToolsAndTechnologies = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: CodeBracketIcon,
      items: frontendStackItems,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      title: 'Backend Development',
      icon: ServerIcon,
      items: backendStackItems,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      title: 'DevOps & Tools',
      icon: WrenchScrewdriverIcon,
      items: toolStackItems,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <section
      id='tech-stack'
      className='flex w-screen flex-col items-center justify-center bg-stone-950 px-4 py-20'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16 w-full text-center text-3xl font-bold text-white'
      >
        <span className='underline decoration-rose-700 underline-offset-4'>
          TOOLS & TECHNOLOGIES
        </span>
      </motion.div>

      <div className='w-full max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className='group'
            >
              <div
                className={`h-full rounded-2xl border p-6 ${category.borderColor} ${category.bgColor} backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md`}
              >
                {/* Category Header */}
                <div className='mb-6 flex items-center space-x-3'>
                  <div
                    className={`rounded-xl bg-gradient-to-r p-3 ${category.color} shadow-lg`}
                  >
                    <category.icon className='h-6 w-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {category.title}
                    </h3>
                    <p className='text-sm text-gray-400'>
                      {category.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className='grid grid-cols-2 gap-3'>
                  {category.items.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + index * 0.1,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className='group/item'
                    >
                      <div className='relative cursor-pointer overflow-hidden rounded-xl border border-stone-700 bg-stone-900/80 p-4 transition-all duration-300 hover:border-stone-600 hover:bg-stone-800/80'>
                        {/* Hover Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-300 group-hover/item:opacity-10`}
                        />

                        {/* Content */}
                        <div className='relative flex items-center space-x-3'>
                          <div className='flex-shrink-0'>{tech.logo}</div>
                          <div className='min-w-0 flex-1'>
                            <p className='truncate text-sm font-medium text-white'>
                              {tech.name}
                            </p>
                            <div className='mt-1 flex items-center space-x-1'>
                              {[...Array(4)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    i < getProficiencyLevel(tech.proficiency)
                                      ? 'bg-rose-500'
                                      : 'bg-stone-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16 text-center'
        >
          <div className='mx-auto max-w-4xl rounded-2xl border border-stone-800 bg-stone-900/50 p-8 backdrop-blur-sm'>
            <div className='mb-6 flex items-center justify-center space-x-3'>
              <SparklesIcon className='h-8 w-8 text-rose-400' />
              <h3 className='text-2xl font-bold text-white'>
                Technical Expertise
              </h3>
            </div>

            <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-rose-400'>15+</div>
                <div className='text-gray-400'>Technologies</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-rose-400'>4+</div>
                <div className='text-gray-400'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-rose-400'>
                  100%
                </div>
                <div className='text-gray-400'>Full Stack</div>
              </div>
            </div>

            <p className='mx-auto max-w-2xl leading-relaxed text-gray-300'>
              I specialize in modern web development with expertise across the
              entire stack. From crafting responsive user interfaces to building
              robust backend systems, I bring a comprehensive skill set to every
              project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to convert proficiency enum to visual level
const getProficiencyLevel = (proficiency: number): number => {
  switch (proficiency) {
    case 0: // EXPERT
      return 4;
    case 1: // PROFICIENT
      return 3;
    case 2: // COMPETENT
      return 2;
    case 3: // BEGINNER
      return 1;
    default:
      return 2;
  }
};
