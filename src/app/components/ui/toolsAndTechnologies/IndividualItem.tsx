import { getProficiencyLevel } from '@/app/lib/GetProficiencyLevel';
import { StackItem } from '@/types';
import { motion } from 'framer-motion';

interface ToolOrTechProps {
  tech: StackItem;
  index: number;
  gradient: string;
}

export const ToolOrTech = ({ tech, index, gradient }: ToolOrTechProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className='group/item'
    >
      <div className='relative cursor-pointer overflow-hidden rounded-xl border border-stone-700 bg-stone-900/80 p-4 transition-all duration-300 hover:border-stone-600 hover:bg-stone-800/80'>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover/item:opacity-10`}
        />

        <div className='relative flex items-center space-x-3'>
          <div className='flex-shrink-0'>{tech.logo}</div>
          <div className='min-w-0 flex-1'>
            <p className='truncate text-sm font-medium text-white'>
              {tech.name}
            </p>
            <div className='mt-1 flex items-center space-x-1'>
              {[...Array(5)].map((_, i) => (
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
  );
};
