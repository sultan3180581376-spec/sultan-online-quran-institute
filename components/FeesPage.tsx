import React from 'react';
import { Page } from '../types';

interface FeesPageProps {
  navigate: (page: Page) => void;
}

const FeesPage: React.FC<FeesPageProps> = ({ navigate }) => {
  const plans = [
    {
      days: '2 Days / Week',
      sessions: '8 Sessions / Month',
      prices: { '30 min': 50, '45 min': 70, '60 min': 90 },
    },
    {
      days: '3 Days / Week',
      sessions: '12 Sessions / Month',
      prices: { '30 min': 70, '45 min': 95, '60 min': 120 },
      popular: true,
    },
    {
      days: '5 Days / Week',
      sessions: '20 Sessions / Month',
      prices: { '30 min': 100, '45 min': 140, '60 min': 180 },
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-emerald-green">Affordable Fee Structure</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">High-quality education at a price that fits your family's budget. All prices are in USD per month.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl shadow-lg p-8 border-t-8 ${plan.popular ? 'border-royal-gold bg-white' : 'border-emerald-green bg-white'} flex flex-col transform hover:-translate-y-2 transition-transform duration-300`}>
              {plan.popular && <p className="bg-royal-gold text-charcoal text-sm font-bold tracking-wider uppercase rounded-full px-4 py-1 self-center mb-4 -mt-12">Most Popular</p>}
              <h2 className="text-3xl font-bold text-charcoal text-center mb-2">{plan.days}</h2>
              <p className="text-gray-500 text-center mb-8">{plan.sessions}</p>
              
              <div className="space-y-4 mb-8">
                {Object.entries(plan.prices).map(([duration, price]) => (
                  <div key={duration} className="flex justify-between items-baseline p-4 bg-soft-beige rounded-lg">
                    <span className="font-semibold text-gray-700">{duration} Classes</span>
                    <div>
                      <span className="text-4xl font-bold text-emerald-green">${price}</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => navigate(Page.Enroll)} className={`w-full mt-auto font-bold py-3 px-6 rounded-full transition-all duration-300 ${plan.popular ? 'bg-royal-gold text-charcoal hover:shadow-glow-gold' : 'bg-emerald-green text-white hover:bg-turquoise-glow'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-soft-beige p-12 rounded-2xl">
            <h2 className="text-3xl font-amiri font-bold text-charcoal mb-8">Discounts & Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-emerald-green mb-2">Family Discount</h3>
                    <p className="text-gray-600">Get a 10% discount for the second and each subsequent sibling enrolled from the same family.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-emerald-green mb-2">Hifz Discount</h3>
                    <p className="text-gray-600">Students enrolled in the full-time Hifz program are eligible for a special discounted fee plan.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-emerald-green mb-2">Free Trial Class</h3>
                    <p className="text-gray-600">Not sure yet? We offer a one-week free trial with no obligation. Experience our teaching style first-hand!</p>
                </div>
            </div>
             <button
                onClick={() => navigate(Page.Enroll)}
                className="mt-12 bg-royal-gold text-charcoal hover:shadow-glow-gold font-bold py-3 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                Book Your Free Trial
            </button>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;