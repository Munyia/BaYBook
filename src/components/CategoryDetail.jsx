import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const allBooks = [
  { id: 1, title: 'Book 1', category: 'fiction', author: 'Author 1' },
  { id: 2, title: 'Book 2', category: 'fiction', author: 'Author 2' },
  { id: 3, title: 'Book 3', category: 'non-fiction', author: 'Author 3' },
  { id: 4, title: 'Book 4', category: 'non-fiction', author: 'Author 4' },
  { id: 5, title: 'Book 5', category: 'mystery', author: 'Author 5' },
  // Add more books
];

const CategoryDetail = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Filter books based on the selected category
    const filteredBooks = allBooks.filter(
      (book) => book.category.toLowerCase() === categoryName.toLowerCase()
    );
    setBooks(filteredBooks);
  }, [categoryName]);

  return (
    <div className="min-h-screen font-play bg-gray-100 py-3 px-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          {categoryName} Books
        </h1>
      </header>

      <div className="grid grid-cols-1 pb-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="relative block rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-gray-600">Author: {book.author}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No books available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
