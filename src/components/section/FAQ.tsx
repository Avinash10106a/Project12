import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <div 
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: 'What makes the ProX different from other products?',
      answer: 'The ProX stands out with its revolutionary processor architecture, industry-leading battery life, and premium build quality. It\'s designed specifically for professionals who need reliable performance for demanding tasks.'
    },
    {
      question: 'Does the ProX come with a warranty?',
      answer: 'Yes, the ProX comes with a standard one-year limited warranty that covers manufacturing defects. You can extend this warranty with our ProCare package for up to three years of coverage.'
    },
    {
      question: 'What operating system does the ProX run?',
      answer: 'The ProX runs our latest Pro OS, which is optimized for the hardware to deliver maximum performance and efficiency. It\'s compatible with most industry-standard software applications.'
    },
    {
      question: 'Can I upgrade the components later?',
      answer: 'The ProX features unified memory and storage that are integrated into the system architecture. While this provides significant performance benefits, it means components are not user-upgradeable. We recommend choosing a configuration that will meet your needs over time.'
    },
    {
      question: 'Is international shipping available?',
      answer: 'Yes, we ship the ProX to over a hundred countries worldwide. Shipping times and costs vary by location. You can check specific details during checkout.'
    },
    {
      question: 'What accessories are included in the box?',
      answer: 'The ProX comes with a power adapter, charging cable, quick start guide, and ProX stickers. Additional accessories like the ProX Pencil and ProX Keyboard are available separately.'
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the ProX.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};