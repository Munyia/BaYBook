import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Popular from '../components/Popular';
import Recommended from '../components/Recommended';
import Carousel from '../components/Carousel';


// Mock data for books
const carouselData = [
  {
    id: 1,
    name: 'Romance',
    img: 'https://img.freepik.com/premium-photo/beautiful-portrait-african-american-woman-luxury-red-dress_1150-13770.jpg', // An image representing romance
    description: 'Explore passionate tales of love and relationships.',
  },
  {
    id: 2,
    name: 'Science Fiction',
    img: 'https://img.freepik.com/free-photo/sci-fi-space-scene_144627-10512.jpg', // An image representing science fiction
    description: 'Journey through futuristic worlds and technology.',
  },
  {
    id: 3,
    name: 'Literature',
    img: 'https://img.freepik.com/free-photo/open-book-with-flowers_144627-17633.jpg', // An image representing literature
    description: 'Dive into classic and contemporary literary masterpieces.',
  },
  {
    id: 4,
    name: 'Horror',
    img: 'https://img.freepik.com/free-photo/horror-movie-night-illustration_1284-57699.jpg', // An image representing horror
    description: 'Get ready for spine-chilling stories that will keep you awake at night.',
  },
  {
    id: 5,
    name: 'Fantasy',
    img: 'https://img.freepik.com/free-photo/fantasy-world-with-mountains_144627-13625.jpg', // An image representing fantasy
    description: 'Step into magical realms filled with mythical creatures and adventures.',
  },
  {
    id: 6,
    name: 'Mystery',
    img: 'https://img.freepik.com/free-photo/mystery-book-illustration_23-2148560184.jpg', // An image representing mystery
    description: 'Unravel secrets and solve enigmas in thrilling plots.',
  },
  {
    id: 7,
    name: 'Non-Fiction',
    img: 'https://img.freepik.com/free-photo/knowledge-is-power-illustration_23-2148559952.jpg', // An image representing non-fiction
    description: 'Explore real stories and factual content across various subjects.',
  },
  {
    id: 8,
    name: 'Historical Fiction',
    img: 'https://img.freepik.com/free-photo/historical-novel-illustration_23-2148559951.jpg', // An image representing historical fiction
    description: 'Experience stories set in significant past events and eras.',
  },
  {
    id: 9,
    name: 'Thriller',
    img: 'https://img.freepik.com/free-photo/thriller-book-illustration_23-2148559962.jpg', // An image representing thriller
    description: 'Engage in high-stakes stories filled with suspense and excitement.',
  },
  {
    id: 10,
    name: 'Poetry',
    img: 'https://img.freepik.com/free-photo/poetry-illustration_23-2148559920.jpg', // An image representing poetry
    description: 'Experience the beauty of language through rhythmic and emotional expression.',
  },
];



const Home = () => {
  return (
    <div className="   min-h-screen">
     <Header/>
      <header className="text-center py-8">
      <div className="flex gap-10 mt-[1%] w-[95vw] ">
          <div className=" w-3/5 pl-[3%] flex flex-col gap-6">
            <h1 className=" font-extrabold text-pry1 text-sec text-2xl">
              Welcome to <span className="text-pry"> WordSmithers</span> 
            </h1>
            <div>
            <p className="text-sec font-mont  font-semibold text-lg  tracking-wide leading-relaxed font-playfair">
              "Hello and welcome to <span className=" ">WordSmithers</span>, where the magic of Nigerian
              literature comes to life! 📚 Whether you're a passionate reader
              eager to explore the rich tapestry of Nigerian stories or a
              talented writer looking to share your own narrative, you've found
              the perfect place to connect, inspire, and celebrate the beauty of
              our diverse literary landscape."
            </p>
            </div>
            
<Link to={'/books'}
  class="relative justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Start Reading </span>
</Link>

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
      {/* <section className="py-8 px-4 bg-[#700b97]">
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
      </section> */}

     

      <Carousel autoslide={true} autoslideinterval={5000}>
  {carouselData.map((book) => (
    <div
      key={book.id}
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${book.img})`,
        backgroundSize: 'contain', // Change to contain to maintain aspect ratio
        backgroundRepeat: 'no-repeat', // Prevents repetition of the image
        backgroundPosition: 'center', // Centers the image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-[verdana] font-bold mb-4">
          {book.name} {/* Book title */}
        </h1>
        <p className="text-white text-lg mb-6">
          {book.description} {/* Book description */}
        </p>
        <div className="space-x-4 font-[verdana]">
          <Link
            to={`/books/${book.id}`} // Link to book details or shop page
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r from-p1 via-p3 to-pk hover:text-white"
          >
            View Details {/* Button for viewing details */}
          </Link>
        </div>
      </div>
    </div>
  ))}
</Carousel>

   
      <Popular/>
    </div>
  );
};

export default Home;
