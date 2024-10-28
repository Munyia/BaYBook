import React from 'react';
import BookCard from './BookCard';
import data from './databook';

const CategoryFilter = ({ selectedCategory, selectedGenre }) => {
  // Filter data logic remains the same
  const filteredData = data.filter(book => {
    const isCategoryMatch = selectedCategory ? book.category === selectedCategory : true;
    const isGenreMatch = selectedGenre ? book.genre === selectedGenre : true;
    return isCategoryMatch && isGenreMatch;
  });

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
    </div>
  );
};

export default CategoryFilter;
