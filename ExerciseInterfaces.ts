export interface Equipment {
    id: number;
    name: string;
    available: boolean;
  }
  
  export interface Exercise {
    id: number;
    name: string;
    description: string;
    difficulty: number;
    is_bodyweight: boolean;
    date_added: string; 
    image_url: string;
    category: string;
    muscle_groups: string[];
    equipment: Equipment;
  }
  
  export interface ExerciseData {
    exercises: Exercise[];
  }