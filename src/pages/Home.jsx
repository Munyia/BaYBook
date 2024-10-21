import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Popular from '../components/Popular';
import Recommended from '../components/Recommended';

// Mock data for books
const recommendedBooks = [
  {
    title: "Book One",
    author: "Author One",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Book Two",
    author: "Author Two",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Book Three",
    author: "Author Three",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Book Four",
    author: "Author Four",
    cover: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  return (
    <div className="   min-h-screen">
     <Header/>
      <header className="text-center py-8">
      <div className="flex mt-[1%] w-[95vw] ">
          <div className=" w-3/5 pl-[3%] flex flex-col gap-6">
            <h1 className=" font-extrabold text-pry1 text-sec text-[3rem]">
              Welcome to <span className="text-pry"> WordSmithers</span> 
            </h1>
            <div>
            <p className="text-sec  font-semibold text-3xl  tracking-wide leading-relaxed font-playfair">
              "Hello and welcome to <span className=" ">WordSmithers</span>, where the magic of Nigerian
              literature comes to life! 📚 Whether you're a passionate reader
              eager to explore the rich tapestry of Nigerian stories or a
              talented writer looking to share your own narrative, you've found
              the perfect place to connect, inspire, and celebrate the beauty of
              our diverse literary landscape."
            </p>
            </div>
            <div className="flex justify-around text-white">
            <Link to="/destination" className="btn-96 relative px-20 py-8 font-black uppercase bg-black text-white overflow-hidden">
  <span className="absolute inset-0 grid place-items-center bg-white text-black transition-transform duration-200 origin-top">
    Start Reading
  </span>
</Link>
            </div>
          </div>
          <div className=" w-2/5 rounded-2xl">
            <img  src="https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg" className="w-full rounded-3xl hover:  shadow-2xl shadow-gray-900 " alt="" />
          </div>
        </div>
        <p className="text-lg text-pry1 mt-2">Discover your next favorite book!</p>
      </header>

      {/* Carousel Section */}
     <Recommended/>

      {/* Categories Section */}
      <section className="py-8 px-4 bg-[#700b97]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#3e065f]">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-[#3e065f] rounded-lg text-center">
            <h3 className="text-xl">Fantasy</h3>
          </div>
          <div className="p-4 bg-[#3e065f] rounded-lg text-center">
            <h3 className="text-xl">Sci-Fi</h3>
          </div>
          <div className="p-4 bg-[#3e065f] rounded-lg text-center">
            <h3 className="text-xl">Romance</h3>
          </div>
          <div className="p-4 bg-[#3e065f] rounded-lg text-center">
            <h3 className="text-xl">Thriller</h3>
          </div>
        </div>
      </section>


   
      <Popular/>
    </div>
  );
};

export default Home;
