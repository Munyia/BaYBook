import React from 'react';
import { Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recommended from '../components/Recommended';
import Carousel from '../components/Carousel';

// Mock data for books
const carouselData = [
  {
    id: 1,
    name: 'Romance',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Dbv0YDlZD_JTSZY7R7aHjPEn7xWUmDc5wA&s', // An image representing romance
    description: 'Explore passionate tales of love and relationships.',
    link: "",
  },
  {
    id: 2,
    name: 'Science Fiction',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNauN5LfABS7YOGhoHG36YPRFIAA-wlutdyyZds8cOeNd2ZQNK0jMsga2VtgVOv1MpDE&usqp=CAU', // An image representing science fiction
    description: 'Journey through futuristic worlds and technology.',
    link: "",
  },
  {
    id: 3,
    name: 'Literature',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvmcq5XJMH2MvJGR9Z_5JxxDqZMnHHlR7auEVhArmOVTr6M_ScrUA-keLGAzdc0uN-80&usqp=CAU', // An image representing literature
    description: 'Dive into classic and contemporary literary masterpieces.',
    link: "",
  },
  {
    id: 4,
    name: 'Horror',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23miIMDeCmpI5cZFMaByHmFf-NRk37RoD2A&s', // An image representing horror
    description: 'Get ready for spine-chilling stories that will keep you awake at night.',
    link: "",
  },
  {
    id: 5,
    name: 'Fantasy',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_INjo1z6I85yswVj3_HHtEbv3090X1LeWMQ&s', // An image representing fantasy
    description: 'Step into magical realms filled with mythical creatures and adventures.',
    link: "",
  },
  {
    id: 6,
    name: 'Mystery',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrbocf1wc-fITC2oxjwAUe6D_TJMsEWNYG4oFR1nSr1I1vFKuwoZNIEs0NMcQi1_ZwOU&usqp=CAU', // An image representing mystery
    description: 'Unravel secrets and solve enigmas in thrilling plots.',
    link: "",
  },
  {
    id: 7,
    name: 'Non-Fiction',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jl5GfT1e6-TfRuJttK4pRHdlsNz8IMReiGEZoTD2p5vbz01OOzldS7p3D6BesHhVBLE&usqp=CAU', // An image representing non-fiction
    description: 'Explore real stories and factual content across various subjects.',
    link: "",
  },
  {
    id: 8,
    name: 'Historical Fiction',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsO4f_r3wMnWCRBiHzZYgvPFYEyzliHhfQg&s', // An image representing historical fiction
    description: 'Experience stories set in significant past events and eras.',
    link: "",
  },
  {
    id: 9,
    name: 'Thriller',
    img: 'data:image/jpeg;base64,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', // An image representing thriller
    description: 'Engage in high-stakes stories filled with suspense and excitement.',
    link: "",
  },
  {
    id: 10,
    name: 'Poetry',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgt0yPGevLjHxhVckCV3UiwTvhLClQ2GB7Q&s', // An image representing poetry
    description: 'Experience the beauty of language through rhythmic and emotional expression.',
    link: "",
  },
];



const Home = () => {
  

  return (
    <div className=" bg-bg  min-h-screen">
        <header className="text-center py-8">
      <div className="relative flex gap-10 mt-[1%] w-[95vw] overflow-hidden">
  {/* Welcome Message - Left Side */}
  <div className="relative z-10 w-3/5 pl-[3%] flex flex-col gap-6">
    <h1 className="font-extrabold text-pry text-sec text-2xl">
      Welcome to <span className="text-pry"> WordSmithers</span>
    </h1>
    <div>
      <p className="text-sec font-mont font-semibold text-lg tracking-wide leading-relaxed font-playfair">
        "Hello and welcome to <span className="text-dk-pry1">WordSmithers</span>, where the magic of Nigerian
        literature comes to life! 📚 Whether you're a passionate reader
        eager to explore the rich tapestry of Nigerian stories or a
        talented writer looking to share your own narrative, you've found
        the perfect place to connect, inspire, and celebrate the beauty of
        our diverse literary landscape."
      </p>
    </div>

    <Link to={'/books'}
      className="relative justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
    >
      <span
        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
      ></span>
      <span
        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
      >Start Reading </span>
    </Link>
  </div>

  {/* Carousel - Right Side */}
  <div className="relative my-auto rounded-3xl w-2/5 overflow-hidden"> {/* Overflow-hidden to keep it within bounds */}
  <div className="relative w-full bg-pry shadow-2xl shadow-pry1 overflow-hidden">
  <div className="flex animate-continuous-carousel shadow-2xl shadow-pry1 bg-pry p-5 gap-5">
    {/* Original set of images */}
    {[
      'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg',
      'https://img.freepik.com/premium-photo/african-people-celebrating-traditional-event_899948-6321.jpg',
      'https://img.freepik.com/premium-photo/african-woman-wearing-colorful-clothes_899948-6323.jpg',
      'https://img.freepik.com/premium-photo/african-people-traditional-dance-celebration_899948-6324.jpg',
      'https://img.freepik.com/premium-photo/african-people-family-reunion-illustration-generative-ai_899948-6325.jpg',
      'https://img.freepik.com/premium-photo/african-woman-reading-book-afternoon_899948-6326.jpg',
      // Add more images as needed
    ].map((image, index) => (
      <div key={index} className="flex-shrink-0 w-[200px] h-[60vh]">
        <img
          src={image}
          className="w-full h-full rounded-3xl shadow-2xl shadow-gray-900 object-cover"
          alt={`carousel-${index}`}
        />
      </div>
    ))}

    {/* Duplicate set of images for seamless looping */}
    {[
      'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg',
      'https://img.freepik.com/premium-photo/african-people-celebrating-traditional-event_899948-6321.jpg',
      'https://img.freepik.com/premium-photo/african-woman-wearing-colorful-clothes_899948-6323.jpg',
      'https://img.freepik.com/premium-photo/african-people-traditional-dance-celebration_899948-6324.jpg',
      'https://img.freepik.com/premium-photo/african-people-family-reunion-illustration-generative-ai_899948-6325.jpg',
      'https://img.freepik.com/premium-photo/african-woman-reading-book-afternoon_899948-6326.jpg',
      // Add more duplicate images to ensure continuous scrolling
    ].map((image, index) => (
      <div key={`duplicate-${index}`} className="flex-shrink-0 w-[200px] h-[60vh]">
        <img
          src={image}
          className="w-full h-full rounded-3xl shadow-2xl shadow-gray-900 object-cover"
          alt={`carousel-duplicate-${index}`}
        />
      </div>
    ))}
  </div>
</div>


  </div>
</div>



        <p className="text-lg text-dk-pry1 mt-2">Discover your next favorite book!</p>
      </header>

      {/* Carousel Section */}
     <Recommended/>

      {/* Categories Section */}
    

     

<Carousel autoslide={true} autoslideinterval={3000}>
  {carouselData.map((book) => (
    <div
      key={book.id}
      className="relative  w-full h-[60vh] flex" // Flex layout for side-by-side
    >
      {/* Text Container - Left Side */}
      <div className="relative flex flex-col rounded-3xl justify-between bg-white  flex-1 p-4"> {/* Flex-1 for equal space */}
        <h1 className="text-black text-2xl  font-[verdana] font-bold mb-2">
          {book.name} {/* Book title */}
        </h1>
        <p className="text-black text-base mb-4">
          {book.description} {/* Book description */}
        </p>
        <div className="space-x-4 font-[verdana]">
        <Link to={'/books'}
      className="relative justify-center mx-auto w-fit flex items-center px-4 py-2 overflow-hidden font-medium transition-all bg-pry rounded-md group"
    >
      <span
        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
      ></span>
      <span
        className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white"
      >View Details </span>
    </Link>
        </div>
      </div>

      {/* Image Container - Right Side */}
      <div className="flex-1 rounded-2xl overflow-hidden">  {/* Parent div with rounded corners */}
  <div
    className="bg-cover bg-center"  // Background image
    style={{
      backgroundImage: `url(${book.img})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '100%', 
      width: '100%',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>
</div>


    </div>
  ))}
</Carousel>

      <Popular/>
      {/* {showModal && <LoginModal onClose={() => setShowModal(false)} />} */}
    </div>
  );
};

export default Home;
