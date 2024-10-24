import React from 'react';
import { Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recommended from '../components/Recommended';
import Carousel from '../components/Carousel';

// Mock data for carousel
const carouselData = [
  // Carousel data remains the same
];

const Test = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-10">
        {/* Carousel Section */}
        <section>
          <h1 className="text-center text-4xl font-bold mb-8 font-mont">Explore Books by Genre</h1>
          <Carousel items={carouselData} />
        </section>

        {/* Popular Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold font-mont text-center">Popular Books</h2>
          <div className="mt-6">
            <Popular />
          </div>
        </section>

        {/* Recommended Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold font-mont text-center">Recommended for You</h2>
          <div className="mt-6">
            <Recommended />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold font-mont">Start Reading Today!</h2>
          <p className="mt-2 text-lg font-play">Browse our collection and find your next favorite book.</p>
          <Link
            to="/books"
            className="mt-4 inline-block px-8 py-3 bg-purple-600 text-white font-play rounded-lg hover:bg-purple-700"
          >
            Browse Books
          </Link>
        </section>
      </div>
    </div>
  );
};

export default  Test
;
