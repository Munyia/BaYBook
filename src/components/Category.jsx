import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';

const categories = [
  { id: 1, title: 'Fiction', subcategories: ['Adventure', 'Horror'] },
  { id: 2, title: 'Non-Fiction', subcategories: ['Biography', 'Self-Help'] },
  { id: 3, title: 'Mystery', subcategories: ['Thriller', 'Detective'] },
  { id: 4, title: 'Science Fiction', subcategories: ['Dystopian', 'Space Opera'] },
  { id: 5, title: 'Fantasy', subcategories: ['Epic', 'Urban'] },
  { id: 6, title: 'Romance', subcategories: ['Historical', 'Contemporary'] },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if the same category is clicked again
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(null); // Reset subcategory when changing categories
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="min-h-screen font-play bg-bg py-3 px-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Explore Categories</h1>
        <p className="text-lg text-gray-600">Find your next favorite book or product!</p>
      </header>

      <div className="flex justify-center gap-3 mb-4 flex-wrap relative">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
          }}
          className={`px-4 py-2 rounded ${!selectedCategory ? 'bg-dk-pry1 text-white' : 'bg-pry'} `}
        >
          All
        </button>
        {categories.map(category => (
          <div key={category.id} className="relative flex flex-col items-start">
            <button
              onClick={() => handleCategoryClick(category.title)}
              className={`px-4 py-2 rounded ${selectedCategory === category.title ? 'bg-dk-pry1 text-white' : 'bg-pry'} `}
            >
              {category.title}
            </button>
            {/* Dropdown for subcategories */}
            {selectedCategory === category.title && (
              <div className="absolute top-full left-0 right-0 mt-1 flex space-x-2 bg-opacity-50 backdrop-blur-md p-2 rounded-md z-10">
                {category.subcategories.map((subcategory, index) => (
                  <button
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`px-3 py-1 rounded ${selectedSubcategory === subcategory ? 'bg-dk-pry1 text-white' : 'bg-pry'}`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Filtered Book List */}
      <CategoryFilter selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
    </div>
  );
};

export default Category;
