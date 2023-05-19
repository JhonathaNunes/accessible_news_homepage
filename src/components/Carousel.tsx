import { useState } from 'react';
import '../assets/styles/carousel.scss';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface CarouselProps {
  children: JSX.Element[];
}

const Carousel = ({children}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel-container'>
      {children[currentIndex]}
      <button className='carousel-button previous' onClick={handlePrevious} aria-label='Botão slide anterior'>
        <FaChevronLeft />
      </button>
      <button className='carousel-button next' onClick={handleNext} aria-label='Botão próximo slide'>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Carousel;