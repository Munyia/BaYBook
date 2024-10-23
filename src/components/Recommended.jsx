import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useAuth } from '../components/context/AuthContext';

// Mock data for books
const booksData = [
  { id: 1, name: 'The Alchemist', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', description: 'An inspirational journey of self-discovery.', shopText: 'Read Now' },
  { id: 2, name: 'To Kill a Mockingbird', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 3, name: '1984', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 4, name: 'The Great Gatsby', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 5, name: 'Moby Dick', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 6, name: 'Pride and Prejudice', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 7, name: 'War and Peace', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 8, name: 'The Odyssey', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 9, name: 'Ulysses', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
  { id: 10, name: 'Don Quixote', img: 'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg', shopText: 'Read Now' },
];

const Recommended = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for modal
  const { isAuthenticated } = useAuth(); // Get authentication status



  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    const refCurrent = scrollRef.current;
    refCurrent.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Run on initial render

    return () => refCurrent.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleBookClick = (bookId) => {
    if (isAuthenticated) {
      // Logic to navigate to the book details
      history.push(`/book/${bookId}`);
    } else {
      setShowLoginModal(true); // Show the login modal instead of an alert
    }
  };

  return (
    <div className="w-full bg-bg border-y-4 border-pry my-10 border-double p-6 relative">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-[#8e05c2]">Recommended Books</h2>
    </div>

      {/* Horizontal Scrollable Book Carousel */}
      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 transition hover:bg-dk-pry1 z-10"
            onClick={scrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto py-5 no-scrollbar gap-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {booksData.map((book) => (
            <div
              key={book.id}
              className="relative flex-shrink-0 p-3 border bg-white shadow-slate-900 rounded-2xl w-48 group transition hover:scale-105 shadow-2xl"
            >
              <img
                src={book.img}
                alt={book.name}
                className="w-full rounded-2xl bg-bg h-64 object-cover mb-2"
              />
              {/* Overlay for text */}
              <div className="absolute bottom-0 inset-x-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2 rounded-b-2xl">
                <h3 className="text-lg font-semibold">{book.name}</h3>
            <button
                  onClick={() => handleBookClick(book.id)} // Use button for click event
                  className="relative justify-center mx-auto w-fit flex items-center px-4 py-2 overflow-hidden font-base transition-all bg-pry rounded-md group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">{book.shopText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 transition hover:bg-dk-pry1 z-10"
            onClick={scrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

      {/* See more and Shop all Links */}
      <div className="flex pt-5 underline items-center justify-center">
        <Link to={'/books'} className="mx-2 text-[#3e065f] hover:text-[#700b97]">See more Books</Link>
        <div className="w-px h-6 bg-gray-400"></div>
        <Link to={'/books'} className="mx-2 text-[#3e065f] hover:text-[#700b97]">Shop all Books</Link>
      </div>
    </div>
  );
};

export default Recommended;
