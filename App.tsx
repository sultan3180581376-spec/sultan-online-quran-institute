import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import TeachersPage from './components/TeachersPage';
import FeesPage from './components/FeesPage';
import ContactPage from './components/ContactPage';
import EnrollPage from './components/EnrollPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // This effect can be used to update the document title when the page changes
    document.title = `SULTAN ONLINE QUR'AN INSTITUTE - ${Page[currentPage]}`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigate={navigate} />;
      case Page.About:
        return <AboutPage navigate={navigate} />;
      case Page.Courses:
        return <CoursesPage navigate={navigate} />;
      case Page.Teachers:
        return <TeachersPage />;
      case Page.Fees:
        return <FeesPage navigate={navigate} />;
      case Page.Contact:
        return <ContactPage />;
      case Page.Enroll:
        return <EnrollPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-soft-beige font-poppins text-charcoal min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp />
      <AIChatbot />
    </div>
  );
};

export default App;