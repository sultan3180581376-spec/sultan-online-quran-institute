
export enum Page {
  Home,
  About,
  Courses,
  Teachers,
  Fees,
  Contact,
  Enroll,
}

export type Course = {
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  learningOutcomes: string[];
  teachingStyle: string;
};

export type Teacher = {
  name: string;
  qualification: string;
  experience: string;
  specialty: string;
  bio: string;
  gender: 'male' | 'female';
};
