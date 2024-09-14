import React from 'react';

// Feature data
const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Order above $200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h4l3 8h10l3-8h4m-12-2V5a2 2 0 012-2h4a2 2 0 012 2v5M5 6h4m-2-2h6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Money-back",
    description: "30 days guarantee",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V7m6 4V7m-7 4h8M5 12v7h14v-7m-2 0V5H7v7M9 15h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Secured by Stripe",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.048 0-2.091-.41-2.828-1.172A4 4 0 0112 7V3m0 16v-4a4 4 0 010-8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Phone and Email support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2zm-7-8h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
];

function FeaturesSection() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
