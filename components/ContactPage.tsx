import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        country: '',
        course: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.message && formData.course) {
            setSubmitting(true);
            try {
                const response = await fetch("https://formspree.io/f/mvojoyez", { // Public test endpoint
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    setSubmitted(true);
                } else {
                    alert('There was an error submitting the form. Please try again.');
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('An error occurred. Please try again later.');
            } finally {
                setSubmitting(false);
            }
        } else {
            alert('Please fill in all required fields.');
        }
    };

    if (submitted) {
        return (
            <div className="bg-soft-beige py-24 flex items-center justify-center text-center min-h-[60vh]">
                <div className="max-w-md p-10 bg-white rounded-2xl shadow-xl">
                    <h1 className="text-3xl font-amiri font-bold text-emerald-green mb-4">Thank You!</h1>
                    <p className="text-gray-700">Your message has been sent successfully. We will contact you soon via Email or WhatsApp.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-soft-beige py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-amiri font-bold text-emerald-green">Contact Us</h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">We're here to help. Reach out to us with any questions or to get started on your learning journey.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-green focus:border-emerald-green" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-green focus:border-emerald-green" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                                    <input type="tel" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-green focus:border-emerald-green" />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                    <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-green focus:border-emerald-green" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course of Interest</label>
                                <select id="course" name="course" required value={formData.course} onChange={handleChange} className="mt-1 block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-green focus:border-emerald-green sm:text-sm rounded-lg">
                                    <option value="">Select a course</option>
                                    <option>Norani Qaida</option>
                                    <option>Quran Reading with Tajweed</option>
                                    <option>Hifz-e-Quran</option>
                                    <option>Tafseer-ul-Quran</option>
                                    <option>Basic Islamic Studies</option>
                                    <option>Free Trial</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-green focus:border-emerald-green"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={submitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-charcoal bg-royal-gold hover:shadow-glow-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-gold transition-shadow duration-300 disabled:bg-gray-400">
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                           <h3 className="text-2xl font-bold text-charcoal mb-6">Direct Contact</h3>
                            <ul className="space-y-6 text-gray-700">
                                <li className="flex items-start">
                                    <a href="mailto:sultan3180581376@gmail.com" className="flex items-center text-charcoal hover:text-emerald-green transition-colors duration-300 group">
                                        <svg className="w-8 h-8 mr-4 text-royal-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
                                        <div>
                                            <span className="font-semibold block">Email</span>
                                            <span className="group-hover:underline">sultan3180581376@gmail.com</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="flex items-start">
                                     <a href="https://wa.me/923180581376" target="_blank" rel="noopener noreferrer" className="flex items-center text-charcoal hover:text-emerald-green transition-colors duration-300 group">
                                        <svg className="w-8 h-8 mr-4 text-royal-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.214 4.433 4.572-1.196z"/></svg>
                                        <div>
                                            <span className="font-semibold block">WhatsApp</span>
                                            <span className="group-hover:underline">+92 3180581376</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="flex items-start">
                                     <a href="https://teams.microsoft.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-charcoal hover:text-emerald-green transition-colors duration-300 group">
                                        <svg className="w-8 h-8 mr-4 text-royal-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M22.996 8.854c0-3.367-3.413-4.85-6.559-4.85-1.933 0-3.368.74-4.238 1.512l-.234.233-.234-.233c-.87-.772-2.305-1.512-4.238-1.512-3.146 0-6.559 1.483-6.559 4.85 0 2.23.882 3.327 1.638 4.053l.233.234-.233.234c-.756.726-1.638 1.823-1.638 4.053 0 3.367 3.413 4.85 6.559 4.85 1.933 0 3.368-.74 4.238-1.512l.234-.233.234.233c.87.772 2.305 1.512 4.238 1.512 3.146 0 6.559-1.483 6.559-4.85 0-2.23-.882-3.327-1.638-4.053l-.233-.234.233-.234c.756-.726 1.638-1.823 1.638-4.053zM9.545 18c-2.12 0-4.24-1.07-4.24-3.557s2.12-3.557 4.24-3.557 4.24 1.07 4.24 3.557S11.665 18 9.545 18zm10.74 0c-2.12 0-4.24-1.07-4.24-3.557s2.12-3.557 4.24-3.557 4.24 1.07 4.24 3.557S22.405 18 20.285 18z"/></svg>
                                        <div>
                                            <span className="font-semibold block">Microsoft Teams</span>
                                            <span className="group-hover:underline">Join Community</span>
                                        </div>
                                     </a>
                                </li>
                                <li className="flex items-start">
                                     <a href="zoommtg://zoom.us/join?confno=8027523809" className="flex items-center text-charcoal hover:text-emerald-green transition-colors duration-300 group">
                                        <svg className="w-8 h-8 mr-4 text-royal-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm.46,13.25a.69.69,0,0,1-.7,0L8.1,13.1a.68.68,0,0,1,0-1.19l3.66-2.15a.69.69,0,0,1,.7,0,.68.68,0,0,1,.35.6v4.3A.68.68,0,0,1,12.46,15.25Z"/></svg>
                                        <div>
                                            <span className="font-semibold block">Zoom ID</span>
                                            <span className="group-hover:underline">802 752 3809</span>
                                        </div>
                                     </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798821473!2d-74.2598661352447!3d40.69767006333939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1628000000000!5m2!1sen!2s" 
                                width="100%" 
                                height="250" 
                                style={{border:0}} 
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps Placeholder"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;