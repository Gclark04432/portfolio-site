export interface StackItem {
  name: string;
  img: string;
  proficiency: Proficiency;
}

export enum Proficiency {
  EXPERT,
  PROFICIENT,
  COMPETENT,
  BEGINNER,
}
