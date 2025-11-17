import React from 'react';
import { Page, Course } from '../types';

interface CoursesPageProps {
  navigate: (page: Page) => void;
}

const coursesData: Course[] = [
  {
    title: "Norani Qaida",
    description: "This is the foundational course for beginners, children, and adults who want to learn how to read the Holy Qur'an with proper pronunciation. It is the first step towards reciting the Qur'an correctly.",
    longDescription: "This is the foundational course for beginners, children, and adults who want to learn how to read the Holy Qur'an with proper pronunciation. It is the first step towards reciting the Qur'an correctly.",
    duration: "3-6 months (Depends on student's pace)",
    learningOutcomes: [
      "Recognition of Arabic alphabets and their sounds.",
      "Understanding of basic Tajweed rules (Makharij, Harakat).",
      "Ability to join letters to form words and read them correctly.",
      "A solid foundation for fluently reading the Holy Qur'an."
    ],
    teachingStyle: "Interactive one-on-one sessions with a focus on correct pronunciation from the very first lesson. We use colorful and engaging Qaida books to make learning enjoyable for kids."
  },
  {
    title: "Quran Reading with Tajweed",
    description: "This course is for students who have completed the Norani Qaida and can read the Arabic script. The primary focus is on applying the rules of Tajweed to perfect the recitation of the Holy Qur'an.",
    longDescription: "This course is for students who have completed the Norani Qaida and can read the Arabic script. The primary focus is on applying the rules of Tajweed to perfect the recitation of the Holy Qur'an.",
    duration: "Ongoing (Based on student's proficiency)",
    learningOutcomes: [
      "Mastery of advanced Tajweed rules (e.g., Rules of Noon Sakinah, Meem Sakinah, Madd).",
      "Fluent and beautiful recitation of the Qur'an, observing all rules.",
      "Confidence in reciting the Qur'an publicly and in prayers.",
      "Understanding the importance and virtues of Tarteel (measured recitation)."
    ],
    teachingStyle: "Personalized guidance where the teacher listens to the student's recitation, corrects mistakes, and explains the application of Tajweed rules with examples from the Qur'an."
  },
  {
    title: "Hifz-e-Quran (Quran Memorization)",
    description: "A blessed journey for those who wish to memorize the Holy Qur'an by heart. This program is structured to help students memorize, revise, and retain the Qur'an with strong accuracy.",
    longDescription: "A blessed journey for those who wish to memorize the Holy Qur'an by heart. This program is structured to help students memorize, revise, and retain the Qur'an with strong accuracy.",
    duration: "2-4 years (Varies greatly)",
    learningOutcomes: [
      "Memorization of the entire Holy Qur'an.",
      "Strong retention through a structured revision plan.",
      "Correct application of Tajweed rules while reciting from memory.",
      "Developing discipline, patience, and a deep connection with the Qur'an."
    ],
    teachingStyle: "A dedicated Hifz teacher guides the student through a three-part lesson: New memorization (Sabqi), recent memorization review (Para-Sabqi), and old memorization review (Manzil)."
  },
  {
    title: "Tafseer-ul-Quran (Quran Exegesis)",
    description: "Go beyond recitation and delve into the meanings of the Qur'an. This course provides a detailed explanation of the Quranic verses, their context, and the timeless wisdom they contain.",
    longDescription: "Go beyond recitation and delve into the meanings of the Qur'an. This course provides a detailed explanation of the Quranic verses, their context, and the timeless wisdom they contain.",
    duration: "Ongoing",
    learningOutcomes: [
      "Understanding the message and guidance of the Qur'an.",
      "Knowledge of the historical context (Asbab al-Nuzul) of verses.",
      "Ability to relate Quranic teachings to contemporary life.",
      "Strengthening of faith (Iman) through a deeper connection with Allah's words."
    ],
    teachingStyle: "Scholarly lectures and discussions based on classical and contemporary Tafseer works. The course encourages questions and reflections to foster a deeper understanding."
  },
  {
    title: "Basic Islamic Studies",
    description: "This comprehensive course covers the fundamentals of Islam, designed for kids and new Muslims. It provides essential knowledge about Islamic beliefs, practices, and history.",
    longDescription: "This comprehensive course covers the fundamentals of Islam, designed for kids and new Muslims. It provides essential knowledge about Islamic beliefs, practices, and history.",
    duration: "1 year (Structured curriculum)",
    learningOutcomes: [
      "Understanding the 5 Pillars of Islam and 6 Articles of Faith.",
      "Knowledge of the Seerah (life) of Prophet Muhammad (ﷺ).",
      "Learning about the lives of other prophets and righteous predecessors.",
      "Basic understanding of Islamic ethics and manners."
    ],
    teachingStyle: "Engaging lessons using stories, visuals, and age-appropriate activities. The curriculum is designed to instill a strong Islamic identity and moral values."
  },
  {
    title: "Prayer & Duas Training",
    description: "A practical course focused on teaching the method of Salah (Prayer) and memorization of essential daily Duas (supplications) with their meanings.",
    longDescription: "A practical course focused on teaching the method of Salah (Prayer) and memorization of essential daily Duas (supplications) with their meanings.",
    duration: "2-4 months",
    learningOutcomes: [
      "Learning the step-by-step method of performing Wudu and Salah correctly.",
      "Memorization of Salah recitations and key Duas for various occasions.",
      "Understanding the meaning and importance of what is recited in Salah.",
      "Building a consistent habit of prayer and supplication."
    ],
    teachingStyle: "Practical demonstrations, repetition, and memorization aids. Teachers ensure students learn with correct pronunciation and understanding."
  }
];


const CourseDetailCard: React.FC<{ course: Course; navigate: (page: Page) => void; }> = ({ course, navigate }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 transition-shadow duration-300 hover:shadow-2xl">
    <div className="p-8 md:p-10">
      <h2 className="text-3xl font-amiri font-bold text-emerald-green mb-4">{course.title}</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">{course.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-charcoal mb-3">What You Will Learn</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {course.learningOutcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Course Details</h3>
          <p className="text-gray-600 mb-2"><strong>Duration:</strong> {course.duration}</p>
          <p className="text-gray-600"><strong>Teaching Style:</strong> {course.teachingStyle}</p>
        </div>
      </div>

      <button
        onClick={() => navigate(Page.Enroll)}
        className="bg-royal-gold text-charcoal hover:shadow-glow-gold font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Enroll in this Course
      </button>
    </div>
  </div>
);

const CoursesPage: React.FC<CoursesPageProps> = ({ navigate }) => {
  return (
    <div className="bg-soft-beige py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-emerald-green">Our Courses</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">A path for every learner. Find the perfect course to begin or continue your journey with the Holy Qur'an.</p>
        </div>
        
        <div>
          {coursesData.map((course, index) => (
            <CourseDetailCard key={index} course={course} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;