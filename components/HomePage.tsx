import React from 'react';
import { Page } from '../types';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HeroSection: React.FC<{ navigate: (page: Page) => void; }> = ({ navigate }) => (
  <div 
    className="relative bg-gradient-to-br from-emerald-green to-turquoise-glow text-white flex items-center justify-center min-h-screen py-20 px-4 overflow-hidden"
  >
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed'
      }}
    ></div>

    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/10 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

    <div className="relative z-10 text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-amiri font-bold mb-4 leading-tight">
        Welcome to SULTAN ONLINE QUR'AN INSTITUTE
      </h1>
      <p className="text-xl md:text-2xl mb-10 font-light text-gray-200">
        Learn Quran with Love, Beauty, and Excellence
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => navigate(Page.Enroll)}
          className="bg-royal-gold text-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-gold w-full sm:w-auto"
        >
          Enroll Now
        </button>
        <button
          onClick={() => navigate(Page.Courses)}
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-emerald-green w-full sm:w-auto"
        >
          Explore Courses
        </button>
      </div>
    </div>
  </div>
);

const WhyChooseUsSection: React.FC = () => {
    const features = [
        { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'One-on-One Classes' },
        { icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2', title: 'Male & Female Teachers' },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Flexible Timings' },
        { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', title: 'Affordable Monthly Fees' },
        { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Tajweed-Certified Teachers' },
        { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Kids & Adults Welcome' },
    ];
    
    return (
        <section className="bg-white py-24 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-amiri font-bold text-charcoal mb-4">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">We are dedicated to providing an authentic, accessible, and personalized Qur'anic education for students of all ages and backgrounds.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="bg-emerald-green/10 text-emerald-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedCoursesSection: React.FC<{ navigate: (page: Page) => void; }> = ({ navigate }) => {
    const courses = [
        { 
            title: 'Norani Qaida', 
            description: 'Master the fundamentals of Arabic alphabet and pronunciation, the first step to reading the Quran correctly.',
            image: 'https://picsum.photos/seed/kidslearning/600/400'
        },
        { 
            title: 'Qur\'an Reading with Tajweed', 
            description: 'Learn to recite the Holy Qur\'an with proper rules of Tajweed, enhancing the beauty of your recitation.',
            image: 'https://picsum.photos/seed/quranrecitation/600/400'
        },
        { 
            title: 'Hifz-e-Quran', 
            description: 'Embark on the blessed journey of memorizing the Holy Qur\'an with our expert Hifz tutors.',
            image: 'https://picsum.photos/seed/quranmemorize/600/400'
        },
        { 
            title: 'Tafseer-ul-Quran', 
            description: 'Gain a deeper understanding of the Quranic verses with detailed explanation and context.',
            image: 'https://picsum.photos/seed/quranstudy/600/400'
        },
        { 
            title: 'Basic Islamic Studies', 
            description: 'Learn the essentials of Islamic faith, pillars, and practices for a well-rounded Islamic education.',
            image: 'https://picsum.photos/seed/islamicicons/600/400'
        },
    ];

    return (
        <section className="bg-soft-beige py-24 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-amiri font-bold text-charcoal mb-4">Our Featured Courses</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our range of courses designed to cater to different learning needs and goals.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 transition-transform duration-300 flex flex-col group border border-royal-gold/30 hover:shadow-2xl">
                            <div className="relative">
                                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-emerald-green mb-2">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                                <button onClick={() => navigate(Page.Courses)} className="mt-auto bg-royal-gold text-charcoal font-bold py-2 px-4 rounded-full self-start hover:shadow-glow-gold transition-shadow duration-300 text-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        { name: 'Aisha Rahman', location: 'USA', review: 'My children\'s progress in Tajweed has been remarkable. The one-on-one attention from their teacher is priceless. Highly recommended!', avatar: 'https://picsum.photos/id/1027/100/100' },
        { name: 'Omar Khan', location: 'UK', review: 'As an adult learner, I was hesitant, but Sultan Institute made it so comfortable. My teacher is patient and knowledgeable. Alhamdulillah for this platform.', avatar: 'https://picsum.photos/id/1005/100/100' },
        { name: 'Fatima Al-Jamil', location: 'Canada', review: 'The Hifz program is very well-structured. The regular follow-ups and flexible schedule helped my son stay motivated and on track.', avatar: 'https://picsum.photos/id/1011/100/100' },
    ];

    return (
        <section className="bg-white py-24 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-amiri font-bold text-charcoal mb-4">What Our Students Say</h2>
                <p className="text-lg text-gray-600 mb-20 max-w-3xl mx-auto">We are humbled by the positive feedback from our students and their families across the globe.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-soft-beige p-8 rounded-2xl shadow-md relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full border-4 border-royal-gold"/>
                            </div>
                            <p className="text-gray-600 italic mt-12 mb-4">"{testimonial.review}"</p>
                            <h4 className="font-bold text-emerald-green text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <>
      <HeroSection navigate={navigate} />
      <WhyChooseUsSection />
      <FeaturedCoursesSection navigate={navigate} />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;