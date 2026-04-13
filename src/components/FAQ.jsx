import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What casino games are available at Napoleons?",
      answer: "Napoleons Casinos offer a variety of classic casino games, including American Roulette, Blackjack, Three Card Poker, Electronic Roulette, and much more!*\n\n*Gaming facilities vary within branch."
    },
    {
      question: "Are there age restrictions for entry?",
      answer: "Yes, only individuals aged 18 and above are allowed. If you appear to be under 25, a valid photo ID is required."
    },
    {
      question: "Are there vegetarian and vegan options on the menu?",
      answer: "Yes, Napoleons Casino caters to a diverse range of dietary preferences, including options for vegetarian and vegan dining."
    },
    {
      question: "Are there any special offers for dining at the restaurant?",
      answer: "Yes, Napoleons offers special dining deals! Our Dine in Style package includes an arrival drink, a 3-course dinner, and a bet* for the gaming floor. Members can also enjoy a free birthday meal with this package!\n\n*Terms and conditions apply."
    },
    {
      question: "How can I become a member of Napoleons Casino?",
      answer: "Membership is free and easy to sign up for at your nearest branch - just bring a valid form of ID. As a member, you'll enjoy exclusive offers, including dining perks and special promotions."
    },
    {
      question: "Can I enjoy late-night dining at Napoleons Casino?",
      answer: "Yes, Napoleons is known for late-night dining, with a menu available until the small hours. This includes a variety of dishes, from famous burgers to classic fish and chips."
    }
  ];

  // Arrow icon component
  const ArrowIcon = ({ isOpen }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 30 30" 
      width="30" 
      height="30"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path 
        className="fill-[#CCAB8A] stroke-[#CCAB8A]" 
        strokeMiterlimit="10" 
        d="M23.6 14.2c-.8-.7-1.5-1.4-2.3-2.1-.7-.6-1.4-1.3-2.1-1.9-.4-.3-.4-.7-.2-1 .2-.3.7-.4 1-.1.5.4 1 .9 1.5 1.3 1.5 1.3 2.9 2.7 4.4 4 .1.1.2.2.3.4.1.4 0 .6-.3.9-.6.5-1.2 1.1-1.7 1.6-1.3 1.2-2.6 2.4-4 3.6-.2.1-.4.2-.8.1-.6-.2-.7-.8-.2-1.2.6-.5 1.2-1.1 1.8-1.6.9-.8 1.7-1.6 2.6-2.3 0 0 .1 0 .1-.1-.1-.1-.2 0-.2 0H5.2c-.2 0-.4 0-.6-.2-.2-.2-.3-.5-.2-.8.1-.3.4-.5.7-.5h18.3c.1-.1.1-.1.2-.1z"
      />
    </svg>
  );

  return (
    <section className="px-8 sm:px-16 mb-12 ">
      <div className="max-w-7xl mx-auto" >
        <h3 
          className="text-[#c0392b] font-bold text-4xl text-center mb-0" 
          style={{ marginTop: '60px', marginBottom: 0 }}
        >
          Frequently Asked Questions
        </h3>
        
        <div className="slides-container">
          <div className="slide active">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-200 ${!activeIndices.includes(index) ? 'closed' : ''}`}
              >
                <div 
                  className="cursor-pointer flex justify-between items-center gap-4 pt-6 pb-6 sm:pt-8 sm:pb-8 "
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 
                    className="text-[#222222] sm:text-xl text-md font-normal"
                   
                  >
                    {faq.question}
                  </h5>
                  <span className="flex-shrink-0">
                    <ArrowIcon isOpen={activeIndices.includes(index)} />
                  </span>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndices.includes(index) 
                      ? 'max-h-[500px] opacity-100 mb-6' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-gray-700 ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;