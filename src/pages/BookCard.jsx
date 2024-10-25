// BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white p-4 shadow-lg mx-2">
      <h1 className="text-black text-2xl font-play font-bold mb-2">{book.title}</h1>
      <p className="text-black text-base mb-4">{book.author}</p>
      <Link
        to={`/books/${book.id}`} // Assuming each book has a unique id
        className="relative justify-center mx-auto w-fit flex items-center px-4 py-2 overflow-hidden font-medium transition-all bg-pry rounded-md group"
      >
        <span className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          View Details
        </span>
      </Link>
    </div>
  );
};

export default BookCard;
