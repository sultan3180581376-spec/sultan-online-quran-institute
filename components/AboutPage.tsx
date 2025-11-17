import React from 'react';
import { Page } from '../types';

interface AboutPageProps {
  navigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-emerald-green">About Sultan Online Qur'an Institute</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Connecting hearts to the Holy Qur'an through authentic knowledge and dedicated teaching.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="prose lg:prose-lg text-gray-700">
            <h2 className="text-3xl font-amiri text-charcoal">Our Mission & Vision</h2>
            <p>
              Our mission is to provide high-quality Qur'anic and Islamic education to Muslims across the globe, irrespective of their age, location, or level of knowledge. We envision a global community where every Muslim can read the Qur'an with correct Tajweed, understand its meaning, and implement its teachings in their daily lives.
            </p>
            <p>
              We aim to make learning accessible, engaging, and spiritually uplifting, fostering a lifelong connection with the Book of Allah.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/quran/600/400" alt="Student learning Quran" className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
          </div>
        </div>

        <div className="bg-soft-beige p-12 rounded-2xl shadow-inner mb-20">
          <h2 className="text-3xl font-amiri text-center text-charcoal mb-8">Our Story</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Sultan Online Qur'an Institute was founded with a simple yet profound goal: to overcome the geographical barriers that prevent many from accessing qualified Qur'an teachers. Witnessing the struggles of families in non-Muslim countries to find reliable Islamic education for their children, our founders, a group of dedicated Islamic scholars and educators, decided to leverage technology to bridge this gap. We started with a handful of students and a passion for teaching, and by the grace of Allah, have grown into a reputable online academy serving hundreds of students worldwide.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-amiri text-center text-charcoal mb-12">Our Unique Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-green mb-3">Expert Teaching Method</h3>
              <p className="text-gray-600">We combine traditional teaching methods with modern pedagogical techniques. Our one-on-one classes ensure that each student receives personalized attention, allowing them to learn at their own pace.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-green mb-3">Advanced Learning System</h3>
              <p className="text-gray-600">Our state-of-the-art Learning Management System provides students with access to class recordings, lesson materials, and progress reports. Interactive tools make learning engaging and effective.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-green mb-3">24/7 Class Availability</h3>
              <p className="text-gray-600">We offer classes around the clock, seven days a week, providing ultimate flexibility to fit learning into your busy life and accommodate all time zones.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-gradient-to-br from-emerald-green to-turquoise-glow text-white p-12 rounded-2xl shadow-lg">
           <h2 className="text-3xl font-amiri font-bold mb-4">Who Can Join?</h2>
           <p className="text-lg max-w-3xl mx-auto">
            Sultan Online Qur'an Institute welcomes everyone! Our programs are designed for:
           </p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
                <div className="bg-white text-emerald-green p-6 rounded-xl font-bold text-xl">
                    Kids (Age 4+)
                </div>
                <div className="bg-white text-emerald-green p-6 rounded-xl font-bold text-xl">
                    Adults (Men & Women)
                </div>
           </div>
           <p className="mt-6 text-gray-200">Whether you are a complete beginner or looking to advance your knowledge, we have the right course and the right teacher for you.</p>
           <button onClick={() => navigate(Page.Enroll)} className="mt-8 bg-royal-gold text-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-gold">
                Start Your Journey
            </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;