import { StackCategory } from '@/types';
import { motion } from 'framer-motion';
import { TechnologiesGrid } from './TechnologiesGrid';

interface CategoryCardProps {
  category: StackCategory;
  index: number;
}

export const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className='group'
    >
      <div
        className={`h-full rounded-2xl border p-6 ${category.borderColor} ${category.bgColor} backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md`}
      >
        <div className='mb-6 flex items-center space-x-3'>
          <div
            className={`rounded-xl bg-gradient-to-r p-3 ${category.color} shadow-lg`}
          >
            <category.icon className='h-6 w-6 text-white' />
          </div>
          <div>
            <h3 className='text-xl font-bold text-white'>{category.title}</h3>
            <p className='text-sm text-gray-400'>
              {category.items.length} technologies
            </p>
          </div>
        </div>

        <TechnologiesGrid
          gridItems={category.items}
          gradient={category.color}
        />
      </div>
    </motion.div>
  );
};
