import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigate, children }) => {
  const isActive = currentPage === page;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigate(page);
      }}
      className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
        isActive
          ? 'text-emerald-green font-semibold'
          : 'text-charcoal hover:text-emerald-green'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const navLinks = [
    { page: Page.Home, label: 'Home' },
    { page: Page.About, label: 'About Us' },
    { page: Page.Courses, label: 'Courses' },
    { page: Page.Teachers, label: 'Teachers' },
    { page: Page.Fees, label: 'Fees' },
    { page: Page.Contact, label: 'Contact Us' },
  ];

  return (
    <header className="bg-white text-charcoal shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3">
          <div className="flex-shrink-0 mb-3 sm:mb-0">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate(Page.Home); }} className="text-2xl font-amiri font-bold text-center text-emerald-green">
              SULTAN INSTITUTE
            </a>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 mb-3 sm:mb-0">
            {navLinks.map((link) => (
              <NavLink key={link.page} page={link.page} currentPage={currentPage} navigate={navigate}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div>
             <button
              onClick={() => navigate(Page.Enroll)}
              className="bg-royal-gold text-charcoal font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-gold"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;