import React, { useState, useRef } from 'react';
import CategoryFilter from './CategoryFilter';

const categories = [
  { id: 1, title: 'Fiction', genres: ['Adventure', 'Horror', 'Literary'] },
  { id: 2, title: 'Non-Fiction', genres: ['Biography', 'Self-Help', 'Travel'] },
  { id: 3, title: 'Mystery', genres: ['Thriller', 'Detective', 'Cozy Mystery'] },
  { id: 4, title: 'Science Fiction', genres: ['Dystopian', 'Space Opera', 'Cyberpunk'] },
  { id: 5, title: 'Fantasy', genres: ['Epic', 'Urban', 'Dark Fantasy'] },
  { id: 6, title: 'Romance', genres: ['Historical', 'Contemporary', 'Romantic Comedy'] },
  { id: 7, title: 'Horror', genres: ['Gothic', 'Psychological', 'Supernatural'] },
  { id: 8, title: 'Young Adult', genres: ['Contemporary', 'Fantasy', 'Dystopian'] },
  { id: 9, title: 'Children\'s', genres: ['Picture Books', 'Early Readers', 'Middle Grade'] },
  { id: 10, title: 'Graphic Novels', genres: ['Superhero', 'Manga', 'Memoir'] },
  { id: 11, title: 'Historical Fiction', genres: ['WWII', 'Medieval', 'American History'] },
  { id: 12, title: 'Poetry', genres: ['Contemporary', 'Classic', 'Haiku'] },
  { id: 13, title: 'Self-Help', genres: ['Motivational', 'Health & Wellness', 'Relationships'] },
  { id: 14, title: 'Cookbooks', genres: ['Healthy Cooking', 'Baking', 'Culinary Arts'] },
  { id: 15, title: 'Business', genres: ['Marketing', 'Finance', 'Entrepreneurship'] },
];

const sortingOptions = [
  { value: 'author', label: 'Sort by Author' },
  { value: 'newest', label: 'Newest Arrival' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'downloads', label: 'Most Downloaded' },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sortBy, setSortBy] = useState(sortingOptions[0].value); // Default sort option
  const scrollRef = useRef(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if the same category is clicked again
    } else {
      setSelectedCategory(category);
      setSelectedGenre(null); // Reset genre when changing categories
    }
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedData = (data) => {
    switch (sortBy) {
      case 'author':
        return [...data].sort((a, b) => a.author.localeCompare(b.author));
      case 'newest':
        return [...data].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      case 'popularity':
        return [...data].sort((a, b) => b.popularity - a.popularity);
      case 'downloads':
        return [...data].sort((a, b) => b.downloads - a.downloads);
      default:
        return data;
    }
  };

  return (
    <div className="min-h-screen font-play bg-bg py-3 px-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Explore Categories</h1>
        <p className="text-lg text-gray-600">Find your next favorite book or product!</p>
      </header>

      {/* Sort Options */}
      <div className="mb-4 justify-center mx-auto flex items-center">
        <label className="mr-2 text-gray-700">Sort by:</label>
        <select value={sortBy} onChange={handleSortChange} className="bg-white border rounded-md p-2">
          {sortingOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center mb-4 relative">
        {/* Button for "All" Categories */}
        <div className="overflow-hidden ml-12 mr-5 justify-center flex items-center">
          <button
            onClick={() => {
              setShowAllCategories(!showAllCategories);
              setSelectedCategory(null); // Reset selected category
              setSelectedGenre(null); // Reset selected genre
            }}
            className={`px-6 justify-center text-center py-2 rounded-md ${!selectedCategory ? 'bg-dk-pry1' : 'bg-pry'}`}
          >
            All
          </button>
        </div>

        {/* Wrapper for Category Buttons */}
        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide flex-grow">
          {categories.map(category => (
            <div key={category.id} className="flex flex-col items-start mx-2">
              <button
                onClick={() => handleCategoryClick(category.title)}
                className={`w-32 h-12 flex items-center justify-center shadow-2xl shadow-slate-900 rounded-md text-white transition ${selectedCategory === category.title ? 'bg-dk-pry1' : 'bg-pry'}`}
              >
                {category.title}
              </button>

              {/* Show genres only if the corresponding category is selected */}
              {selectedCategory === category.title && (
                <div className="absolute top-full left-0 right-0 mt-1 flex overflow-x-auto max-h-20 bg-white bg-opacity-50 backdrop-blur-md rounded-md z-10 p-2 space-x-2">
                  {category.genres.map((genre, index) => (
                    <button
                      key={index}
                      onClick={() => handleGenreClick(genre)}
                      className={`w-28 h-10 flex items-center justify-center rounded-md text-white transition ${selectedGenre === genre ? 'bg-dk-pry1' : 'bg-pry'}`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 transition hover:bg-dk-pry1 z-10"
          onClick={scrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black rounded-full p-2 transition hover:bg-dk-pry1 z-10"
          onClick={scrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Filtered Book List */}
      <CategoryFilter selectedCategory={selectedCategory} selectedGenre={selectedGenre} />
    </div>
  );
};

export default Category;
