export interface StackItem {
  name: string;
  img: string;
  proficiency: Proficiency;
  border: string;
}

export enum Proficiency {
  EXPERT,
  PROFICIENT,
  COMPETENT,
  BEGINNER,
}
