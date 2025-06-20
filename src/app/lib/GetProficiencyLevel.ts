import { Proficiency } from '@/types';

export const getProficiencyLevel = (proficiency: Proficiency): number => {
  switch (proficiency) {
    case Proficiency.EXPERT:
      return 5;
    case Proficiency.PROFICIENT:
      return 4;
    case Proficiency.COMPETENT:
      return 3;
    case Proficiency.ADVANCED_BEGINNER:
      return 2;
    case Proficiency.BEGINNER:
      return 1;
    default:
      return 1;
  }
};
