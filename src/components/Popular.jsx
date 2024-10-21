import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

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

const Popular = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  return (
    <div className="w-full bg-white p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#8e05c2]">Popular Books</h2>
      </div>

      {/* Navigation arrows positioned on both ends of the screen */}
      {canScrollLeft && (
        <button
          className="absolute top-18 left-0 bg-black text-white rounded-full p-1 transition hover:bg-gray-800"
          onClick={scrollLeft}
        >
          ←
        </button>
      )}
      {canScrollRight && (
        <button
          className="absolute top-18 right-0 bg-black text-white rounded-full p-1 transition hover:bg-gray-800"
          onClick={scrollRight}
        >
          →
        </button>
      )}

      {/* Horizontal Scrollable Book Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {booksData.map((book) => (
          <div
            key={book.id}
            className="flex-shrink-0 p-3 border bg-white shadow-slate-900 rounded-2xl text-center w-48 group transition hover:scale-105 shadow-3xls"
          >
            <img
              src={book.img}
              alt={book.name}
              className="w-full shadow-slate-900 rounded-2xl h-64 object-cover mb-2 "
            />
            <h3 className="text-lg font-semibold ">{book.name}</h3>
            {book.description && (
              <p className="text-sm text-gray-700 mb-2">{book.description}</p>
            )}
            <Link
              to={`/book/${book.id}`}
              className="mt-2 inline-block bg-[#3e065f]  py-1 px-3 rounded-lg hover:bg-[#8e05c2] transition duration-300"
            >
              {book.shopText}
            </Link>
          </div>
        ))}
      </div>

      {/* See more and Shop all Links */}
      <div className="flex pt-5 underline items-center justify-center">
        <Link to={'/books'} className="mx-2 text-[#3e065f] hover:text-[#700b97]">See more Books</Link>
        <div className="w-px h-6 bg-gray-400"></div>
        <Link to={'/books'} className="mx-2 text-[#3e065f] hover:text-[#700b97]">Shop all Books</Link>
      </div>
    </div>
  );
};

export default Popular;
