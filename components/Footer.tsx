import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const quickLinks = [
    { page: Page.About, label: 'About Us' },
    { page: Page.Courses, label: 'Our Courses' },
    { page: Page.Teachers, label: 'Our Teachers' },
    { page: Page.Fees, label: 'Fee Structure' },
  ];

  const socialIcons = [
    { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
    { name: 'YouTube', path: 'M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23-1.54.91-1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z' },
  ];

  return (
    <footer className="bg-charcoal text-white border-t-4 border-royal-gold">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-amiri font-bold mb-4 text-white">SULTAN INSTITUTE</h2>
            <p className="text-gray-400">Learn Quran with Love, Beauty, and Excellence. Your trusted partner from anywhere in the world.</p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-royal-gold mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map(link => (
                <li key={link.label} className="mb-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate(link.page); }} className="hover:text-royal-gold transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-royal-gold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                  <a href="mailto:sultan3180581376@gmail.com" className="flex items-center hover:text-royal-gold transition-colors duration-300 group">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <span className="truncate group-hover:underline">sultan3180581376@gmail.com</span>
                  </a>
              </li>
              <li>
                  <a href="https://wa.me/923180581376" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-royal-gold transition-colors duration-300 group">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-green" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.214 4.433 4.572-1.196z"/></svg>
                      <span className="group-hover:underline">+92 3180581376</span>
                  </a>
              </li>
              <li>
                  <a href="https://teams.microsoft.com/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-royal-gold transition-colors duration-300 group">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-green" fill="currentColor" viewBox="0 0 24 24"><path d="M22.996 8.854c0-3.367-3.413-4.85-6.559-4.85-1.933 0-3.368.74-4.238 1.512l-.234.233-.234-.233c-.87-.772-2.305-1.512-4.238-1.512-3.146 0-6.559 1.483-6.559 4.85 0 2.23.882 3.327 1.638 4.053l.233.234-.233.234c-.756.726-1.638 1.823-1.638 4.053 0 3.367 3.413 4.85 6.559 4.85 1.933 0 3.368-.74 4.238-1.512l.234-.233.234.233c.87.772 2.305 1.512 4.238 1.512 3.146 0 6.559-1.483 6.559-4.85 0-2.23-.882-3.327-1.638-4.053l-.233-.234.233-.234c.756-.726 1.638-1.823 1.638-4.053zM9.545 18c-2.12 0-4.24-1.07-4.24-3.557s2.12-3.557 4.24-3.557 4.24 1.07 4.24 3.557S11.665 18 9.545 18zm10.74 0c-2.12 0-4.24-1.07-4.24-3.557s2.12-3.557 4.24-3.557 4.24 1.07 4.24 3.557S22.405 18 20.285 18z"/></svg>
                      <span className="group-hover:underline">Join Microsoft Teams</span>
                  </a>
              </li>
               <li>
                  <a href="zoommtg://zoom.us/join?confno=8027523809" className="flex items-center hover:text-royal-gold transition-colors duration-300 group">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-green" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm.46,13.25a.69.69,0,0,1-.7,0L8.1,13.1a.68.68,0,0,1,0-1.19l3.66-2.15a.69.69,0,0,1,.7,0,.68.68,0,0,1,.35.6v4.3A.68.68,0,0,1,12.46,15.25Z"/></svg>
                      <span className="group-hover:underline">Zoom ID: 802 752 3809</span>
                  </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-royal-gold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map(icon => (
                <a key={icon.name} href="#" className="text-white hover:text-royal-gold transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     {icon.name === 'Instagram' ? (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.001C8.749 1.162 8.323 1.173 7.053 1.23c-3.651.173-5.834 2.355-6.007 6.007C1.048 8.423 1.038 8.849 1.038 12s.01 3.577.067 4.763c.173 3.65 2.355 5.834 6.007 6.007 1.27.058 1.696.069 4.885.069s3.616-.011 4.885-.069c3.651-.173 5.834-2.355 6.007-6.007.058-1.186.067-1.608.067-4.763s-.01-3.577-.067-4.763c-.173-3.65-2.355-5.834-6.007-6.007C15.677 1.173 15.251 1.162 12 1.162z M12 7.162a4.838 4.838 0 100 9.676 4.838 4.838 0 000-9.676zm0 7.917a3.079 3.079 0 110-6.158 3.079 3.079 0 010 6.158zm6.363-8.887a1.162 1.162 0 100-2.324 1.162 1.162 0 000 2.324z"></path>
                    ) : (
                      <path d={icon.path} />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} SULTAN ONLINE QUR'AN INSTITUTE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;