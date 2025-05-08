
import React, { useState } from 'react'

const images =[
    '/images/1.JPG',
    '/images/3.JPG',
    '/images/4.JPG',
    '/images/5.JPG',
    '/images/6.JPG',
]
export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden rounded-lg shadow-md">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full flex-shrink-0 object-cover h-96 md:h-128 lg:object-fill"
              />
            ))}
          </div>
    
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full shadow cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 bg-opacity-70 p-2 rounded-full shadow cursor-pointer"
          >
            ›
          </button>
        </div>
      );
    }