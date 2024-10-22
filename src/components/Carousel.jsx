import { useState, useEffect } from "react";

const Carousel = ({
  children,
  autoslide = false,
  autoslideinterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3; // Show 3 categories at a time

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
    <div className="relative gap-5 px-2  mx-auto bg-dk-pry1 h-[80vh] overflow-hidden">
      <p className="text-3xl py-5  text-white">Categories</p>
      <div
        className="flex transition-transform ease-linear duration-[1500ms]"
        style={{ transform: `translateX(-${currentSlide * 100 / itemsPerSlide}%)` }}
      >
        {children.map((slide, index) => (
          <div key={index} className="min-w-[33.33%] h-full">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
