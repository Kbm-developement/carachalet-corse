'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/carousel/carousel-00.jpg',
  '/images/carousel/carousel-0.jpg',
  '/images/carousel/carousel-1.JPG',
  '/images/carousel/carousel-2a.jpg',
  '/images/carousel/carousel-3.jpg',
  '/images/carousel/carousel-4.JPG',
  '/images/carousel/carousel-5.JPG',
  '/images/carousel/carousel-6.JPG',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  }

  const handleTouchEnd = () => {
    if(!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if(distance > 50) {
      nextSlide();
    } else if(distance < -50){
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={800}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100/70 rounded-full p-2 hover:bg-gray-100 cursor-pointer"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100/70  rounded-full p-2 hover:bg-gray-100 cursor-pointer"
      >
        ➡
      </button>
    </div>
  );
}
