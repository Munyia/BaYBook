import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Importing Header component
import Footer from "../components/Footer"; // Importing Footer component

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "FAQ - Your Book App"; // Update the page title
  }, []);

  const faqs = [
    {
      question: "What is your return policy for books?",
      answer:
        "We offer a 30-day return policy for physical books. If you are not satisfied with your purchase, you can return it within 30 days for a full refund. Ebooks are non-refundable.",
    },
    {
      question: "How do I track my book orders?",
      answer:
        "After your order is shipped, you will receive a tracking number via email. Use this number to track your order on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Do you offer ebook formats?",
      answer:
        "Yes, we offer ebooks in formats such as PDF, EPUB, and MOBI. You can choose your preferred format during the checkout process.",
    },
    {
      question: "Can I create an account to track my purchases?",
      answer:
        "Absolutely! Creating an account allows you to track your orders, save your favorite books, and manage your personal information.",
    },
    {
      question: "How can I redeem my vouchers?",
      answer:
        "To redeem vouchers, enter the code during checkout. Your voucher value will be deducted from the total price of your order.",
    },
    {
      question: "What should I do if I encounter an issue with my ebook?",
      answer:
        "If you experience any issues with your ebook, please contact our support team at support@bookapp.com for assistance.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-bg py-10 min-h-screen font-play">
      <div className="max-w-4xl bg-glass rounded-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl pt-5 font-play font-bold text-center mb-6 text-black">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6 py-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-opacity-70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg sm:text-xl font-semibold text-black">
                  {faq.question}
                </h2>
                <span className="text-xl sm:text-2xl text-black">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-3 font-mont text-gray-700 text-base sm:text-lg">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
