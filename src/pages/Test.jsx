import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, title: 'Fiction', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdmHX5f1xvYLy7Yrxx6hI3FbIUiwHH1psww&s' },
  { id: 2, title: 'Non-Fiction', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBntdS2Kr0gxAbuknz1pY4Srfkw2DkAAH6Q&s' },
  { id: 3, title: 'Mystery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0afrokp_uabbS0XkKluX3uKnXF_YrSlXfQw&s' },
  { id: 4, title: 'Science Fiction', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn2O4f85iRUGth0pwLOtyRf-g24gOMKcPbQ&s' },
  { id: 5, title: 'Fantasy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-_6EZT4O15Ivw11_Fh7nI1AQd5YxoT2A3w&s' },
  { id: 6, title: 'Romance', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ6cNJqc9u0BDLrQ5QHeszHs8yqGBUsLJxKOxBhPSdl6I0CxBkUnhUs-zSr3U5w4Ta4A&usqp=CAU' },
  // Add more categories as needed
];

const Category = () => {
  return (
    <div className="min-h-screen font-play bg-gray-100 py-3 px-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800">Explore Categories</h1>
        <p className="text-lg text-gray-600">Find your next favorite book or product!</p>
      </header>

      <div className="mb-6 flex justify-center flex-wrap gap-4">
        {/* Filter Section */}
        <select className="border border-gray-300 rounded-md px-4 py-2">
          <option>Sort by Popularity</option>
          <option>Sort by Newest</option>
          <option>Sort by Price</option>
        </select>
        <input
          type="text"
          placeholder="Search categories..."
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 pb-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.title.toLowerCase()}`}
            className="relative block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-10 transition">
              <h2 className="text-white text-xl font-semibold">{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Category;
