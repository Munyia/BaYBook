import React, { useState } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import data from './databook';

const CategoryFilter = ({ selectedCategory, selectedGenre }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter data based on selected category and genre
  const filteredData = data.filter(book => {
    const isCategoryMatch = selectedCategory ? book.category === selectedCategory : true;
    const isGenreMatch = selectedGenre ? book.genre === selectedGenre : true;
    return isCategoryMatch && isGenreMatch;
  });

  const handleDataClick = (book) => {
    setSelectedBook(book);
  };

  const closeDescription = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {filteredData.map((book, index) => (
          <BookCard
            key={index} // Ideally use a unique id if available
            title={book.title}
            description={book.description}
            coverImage={book.coverImage}
            authorName={book.author}
            publisher={book.publisher}
            year={book.year}
            genre={book.genre}
            onClick={() => handleDataClick(book)}
          />
        ))}
      </div>

      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={closeDescription} />
      )}
    </div>
  );
};

const BookDetailModal = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] max-w-3xl overflow-hidden">
        <div className="flex flex-col sm:flex-row p-4">
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img className="max-w-full h-auto object-cover rounded-md" src={book.coverImage} alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-4 flex flex-col">
            <div className="flex justify-end">
              <button onClick={onClose} className="text-gray-700 hover:text-red-700 text-xl font-bold rounded-full px-2">X</button>
            </div>
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p><span className="font-bold">Author:</span> {book.author}</p>
            <p><span className="font-bold">Publisher:</span> {book.publisher}</p>
            <p><span className="font-bold">Year:</span> {book.year}</p>
            <p><span className="font-bold">Genre:</span> {book.genre}</p>
            <p><span className="font-bold">Chapters:</span> {book.chapters}</p>
            <p className="mt-4">{book.description}</p>
            <div className="flex justify-end mt-4">
              <Link className="bg-pry p-2 rounded font-bold text-sec" to={`/read/${book._id}`}>Start Reading</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
