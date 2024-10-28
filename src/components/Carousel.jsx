import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = ({
  children,
  autoslide = false,
  autoslideinterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = window.innerWidth < 640 ? 2 : 3; // Show 2 on smaller devices, 3 on larger

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % Math.ceil(children.length / itemsPerSlide)
    );
  };

  useEffect(() => {
    if (autoslide) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoslideinterval);
      return () => clearInterval(interval);
    }
  }, [autoslide, autoslideinterval]);

  return (
    <div className="relative gap-5 px-2 mx-auto bg-dk-pry1 overflow-hidden">
      <p className="text-3xl py-5 text-white">Categories</p>
      <div
        className="flex transition-transform ease-linear duration-[1500ms]"
        style={{ transform: `translateX(-${currentSlide * 100 / itemsPerSlide}%)` }}
      >
        {children.map((slide, index) => (
          <div key={index} className="min-w-[50%] sm:min-w-[33.33%] h-full relative">
            {slide}
          </div>
        ))}
      </div>
      <Link
        to={'/category'}
        className="relative w-fit flex mt-6 ml-4 mb-5 px-6 py-4 overflow-hidden font-medium transition-all bg-white rounded-md group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Show More</span>
      </Link>
    </div>
  );
};

export default Carousel;
