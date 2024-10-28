import React from 'react';
import { books } from './book'; // Ensure your books data has category and subcategory attributes

const CategoryFilter = ({ selectedCategory, selectedSubcategory }) => {
  const filteredBooks = books.filter(book => {
    const isCategoryMatch = selectedCategory ? book.category === selectedCategory : true;
    const isSubcategoryMatch = selectedSubcategory ? book.subcategory === selectedSubcategory : true;
    return isCategoryMatch && isSubcategoryMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
      {filteredBooks.map(book => (
        <div key={book.id} className="bg-white rounded-lg shadow-lg p-4">
          <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-semibold">{book.title}</h2>
          <p className="text-gray-500">{book.category} - {book.subcategory}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
