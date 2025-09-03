'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Delivery times typically range from 30-45 minutes depending on your location and restaurant preparation time. You can track your order in real-time through our app."
    },
    {
      question: "What are your delivery areas?",
      answer: "We currently deliver to all major areas within the city. Enter your postcode on our homepage to check if we deliver to your area."
    },
    {
      question: "How can I pay for my order?",
      answer: "We accept all major credit/debit cards, digital wallets, and cash on delivery. All online payments are processed securely."
    },
    {
      question: "What if there's an issue with my order?",
      answer: "Our customer support team is available 24/7. You can reach us through the app or contact our support hotline for immediate assistance."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 2 minutes of placing it. After that, please contact our support team for assistance."
    },
    {
      question: "Do you have a minimum order value?",
      answer: "Minimum order values vary by restaurant. You can see the minimum order amount on each restaurant's page."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-2">Still have questions?</h2>
          <p className="text-green-600">
            Our support team is here to help. Contact us anytime through our support hotline or email.
          </p>
        </div>
      </div>
    </div>
  );
}
