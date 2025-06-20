import { getProficiencyLevel } from '@/app/lib/GetProficiencyLevel';
import { StackItem } from '@/types';
import { motion } from 'framer-motion';
import { ToolOrTech } from './IndividualItem';

interface TechnologiesGridProps {
  gridItems: StackItem[];
  gradient: string;
}

export const TechnologiesGrid = ({
  gridItems,
  gradient,
}: TechnologiesGridProps) => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      {gridItems.map((tech, index) => (
        <ToolOrTech tech={tech} index={index} gradient={gradient} />
      ))}
    </div>
  );
};
