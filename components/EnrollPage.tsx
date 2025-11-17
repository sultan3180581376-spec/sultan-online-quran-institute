import React, { useState } from 'react';

const EnrollPage: React.FC = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        age: '',
        gender: '',
        country: '',
        timePreference: '',
        course: '',
        whatsapp: '',
        email: '',
    });

    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.studentName.trim()) newErrors.studentName = "Student Name is required";
        if (!formData.parentName.trim()) newErrors.parentName = "Parent Name is required";
        if (!formData.age.trim() || isNaN(Number(formData.age)) || Number(formData.age) <= 0) newErrors.age = "A valid age is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.course) newErrors.course = "Please select a course";
        if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "A valid email is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitting(true);
            try {
                const response = await fetch("https://formspree.io/f/mvojoyez", { // Public test endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    setSubmitted(true);
                } else {
                    const data = await response.json();
                    if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                        alert(data["errors"].map((error: any) => error["message"]).join(", "));
                    } else {
                        alert("There was an error submitting the form. Please try again.");
                    }
                }
            } catch (error) {
                console.error("Submission error:", error);
                alert("An error occurred. Please try again later.");
            } finally {
                setSubmitting(false);
            }
        } else {
            console.log("Form validation failed.");
        }
    };

    if (submitted) {
        return (
            <div className="bg-soft-beige py-24 flex items-center justify-center text-center min-h-[60vh]">
                <div className="max-w-lg p-10 bg-white rounded-2xl shadow-xl">
                    <h1 className="text-3xl font-amiri font-bold text-emerald-green mb-4">Registration Successful!</h1>
                    <p className="text-gray-700 text-lg">Your admission form has been submitted successfully. We will contact you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-soft-beige py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-amiri font-bold text-emerald-green">Enroll Now</h1>
                        <p className="text-gray-600 mt-3">Take the first step. Fill out the form below to register for a course or a free trial class.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
                                <input type="text" name="studentName" id="studentName" value={formData.studentName} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.studentName ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                            </div>
                            <div>
                                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
                                <input type="text" name="parentName" id="parentName" value={formData.parentName} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.parentName ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Student Age</label>
                                <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.age ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.country ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                            </div>
                             <div>
                                <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700">Time Preference (Your Local Time)</label>
                                <input type="text" name="timePreference" id="timePreference" value={formData.timePreference} onChange={handleChange} placeholder="e.g., Evenings, Weekends" className="mt-1 block w-full input-style border-gray-300" />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Selection</label>
                            <select name="course" id="course" value={formData.course} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.course ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Select a course or free trial</option>
                                <option value="Free Trial">One Week Free Trial</option>
                                <option value="Norani Qaida">Norani Qaida</option>
                                <option value="Quran Reading">Quran Reading with Tajweed</option>
                                <option value="Hifz-e-Quran">Hifz-e-Quran</option>
                                <option value="Tafseer">Tafseer-ul-Quran</option>
                                <option value="Islamic Studies">Basic Islamic Studies</option>
                            </select>
                             {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                                <input type="tel" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full input-style ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>
                        
                        <div>
                            <button type="submit" disabled={submitting} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-xl font-bold text-charcoal bg-royal-gold hover:shadow-glow-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-gold transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {submitting ? 'Submitting...' : 'Submit Registration'}
                            </button>
                        </div>
                    </form>
                </div>
                 <style>{`
                    .input-style {
                        padding: 0.75rem 1rem;
                        border-radius: 0.5rem;
                        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                        transition: border-color 0.2s, box-shadow 0.2s;
                        background-color: #F8F9FA;
                    }
                    .input-style:focus {
                        outline: none;
                        border-color: #0A7F42;
                        box-shadow: 0 0 0 2px rgba(10, 127, 66, 0.3);
                    }
                 `}</style>
            </div>
        </div>
    );
};

export default EnrollPage;