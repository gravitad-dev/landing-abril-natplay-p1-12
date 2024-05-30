import { useState } from "react";

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const prevSlide = () => {
    const currentIndex = slides.findIndex(
      (slide) => slide.title === currentSlide.title
    );

    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentSlide(slides[prevIndex]);
    }
  };

  const nextSlide = () => {
    const currentIndex = slides.findIndex(
      (slide) => slide.title === currentSlide.title
    );

    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentSlide(slides[nextIndex]);
    }
  };

  return (
    <div className="relative flex justify-center w-full h-full overflow-hidden">
      {/* content */}
      <div className="flex justify-between items-center px-4 md:px-8 h-full min-w-[900px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hidden lg:flex justify-center items-center gap-5 h-full w-full "
          >
            <div>
              <h3 className="font-extrabold text-white text-[46px] ">
                {slide.title}
              </h3>
              <p className="text-white text-[14px]">{slide.text}</p>
            </div>
          </div>
        ))}

        <div className="flex lg:hidden justify-center items-center gap-5 h-full px-8 md:px-0  w-full ">
          <div>
            <h3 className="font-extrabold text-white text-[46px] ">
              {currentSlide.title}
            </h3>
            <p className="text-white text-[14px]">{currentSlide.text}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="lg:hidden absolute top-0 bottom-0 left-2 flex items-center justify-center w-8 md:w-12 lg:w-16 text-white text-xl"
      >
        <img src="/left-arrow-carousel.svg" />
      </button>

      <button
        onClick={nextSlide}
        className="lg:hidden absolute top-0 bottom-0 right-2 flex items-center justify-center w-8 md:w-12 lg:w-16 text-white text-xl"
      >
        <img src="/rigth-arrow-carousel.svg" />
      </button>
    </div>
  );
};

export default HeroCarousel;
