import FitnessExercises from "./FitnessExercises.json";

interface Exercise {
    id: number;
    name: string;
    description: string;
    difficulty: number;
    is_bodyweight: boolean;
    date_added: string;
    image_url: string;
    category: string;
    muscle_groups: string[];
    equipment: {
        id: number;
        name: string;
        available: boolean;
    };
}
