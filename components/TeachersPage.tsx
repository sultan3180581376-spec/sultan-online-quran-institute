import React from 'react';
import { Teacher } from '../types';

const teachersData: Teacher[] = [
  {
    name: "Qari Ahmed Ali",
    qualification: "Ijazah in 10 Qira'at, Masters in Islamic Studies",
    experience: "15+ Years",
    specialty: "Tajweed & Qira'at",
    bio: "Qari Ahmed Ali is a master of recitation with a deep passion for teaching the science of Tajweed. His students admire his attention to detail and his ability to make complex rules easy to understand.",
    gender: 'male',
  },
  {
    name: "Hafiz Yusuf Ibrahim",
    qualification: "Hafiz-ul-Quran, Alim Course Graduate",
    experience: "12+ Years",
    specialty: "Hifz & Tafseer",
    bio: "Hafiz Yusuf has helped dozens of students complete their Hifz. His method focuses on strong memorization with a clear understanding of the text, creating a lasting bond with the Qur'an.",
    gender: 'male',
  },
  {
    name: "Sheikh Omar Hassan",
    qualification: "PhD in Quranic Studies, Al-Azhar University",
    experience: "20+ Years",
    specialty: "Tafseer & Islamic Fiqh",
    bio: "Dr. Omar is a renowned scholar with a gift for explaining the depths of the Qur'an in a relatable way. His classes are a journey into the wisdom and guidance of Allah's words.",
    gender: 'male',
  },
  {
    name: "Ustadha Fatima Zahra",
    qualification: "Ijazah in Tajweed, Bachelors in Arabic Language",
    experience: "10+ Years",
    specialty: "Tajweed for Sisters & Kids",
    bio: "Ustadha Fatima creates a warm and encouraging environment for her students. She specializes in teaching female students and children, making them comfortable and confident in their recitation.",
    gender: 'female',
  },
  {
    name: "Hafidha Aisha Siddiqa",
    qualification: "Hafidha & Alimah, Certified Teacher",
    experience: "8+ Years",
    specialty: "Hifz for Sisters",
    bio: "Hafidha Aisha is a dedicated Hifz teacher who understands the unique challenges of memorization. She provides personalized plans and constant motivation to help her students achieve their goals.",
    gender: 'female',
  },
  {
    name: "Dr. Maryam Abdullah",
    qualification: "Masters in Islamic Theology, Certified Youth Counselor",
    experience: "14+ Years",
    specialty: "Islamic Studies for Youth",
    bio: "Dr. Maryam is passionate about nurturing the next generation. Her Islamic Studies classes are interactive and address contemporary issues, helping young Muslims strengthen their faith and identity.",
    gender: 'female',
  },
];

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-8 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center hover:shadow-2xl">
    <img 
      src={`https://picsum.photos/seed/${teacher.name.split(' ').join('')}/200/200`} 
      alt={teacher.name} 
      className="w-32 h-32 rounded-full border-4 border-royal-gold mx-auto mb-4 object-cover"
    />
    <h3 className="text-2xl font-bold text-emerald-green">{teacher.name}</h3>
    <p className="text-royal-gold font-semibold mb-2">{teacher.specialty}</p>
    <div className="text-sm text-gray-600 mb-4 text-center w-full">
      <p><strong>Qualification:</strong> {teacher.qualification}</p>
      <p><strong>Experience:</strong> {teacher.experience}</p>
    </div>
    <p className="text-charcoal text-sm flex-grow">{teacher.bio}</p>
  </div>
);

const TeachersPage: React.FC = () => {
  return (
    <div className="bg-soft-beige py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-emerald-green">Our Expert Teachers</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Meet our team of dedicated, qualified, and experienced teachers who are committed to your success.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachersData.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;