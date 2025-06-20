import { KeyStat } from '@/types';
import { motion } from 'framer-motion';

interface StatCardProps {
  stat: KeyStat;
  index: number;
}

export const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className='group'
    >
      <div className='relative overflow-hidden rounded-xl border border-stone-800 bg-stone-900/80 p-6 transition-all duration-300 hover:border-stone-700'>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
        />
        <div className='relative flex items-center space-x-4'>
          <div
            className={`rounded-lg bg-gradient-to-r p-3 ${stat.color} shadow-lg`}
          >
            <stat.icon className='h-6 w-6 text-white' />
          </div>
          <div>
            <div className='text-2xl font-bold text-white'>{stat.value}</div>
            <div className='text-sm text-gray-400'>{stat.label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
