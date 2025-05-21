import React, { useRef ,useEffect, useState } from 'react'

const images =[
    '/images/12.JPG',
    '/images/3.JPG',
    '/images/4.JPG',
    '/images/5.JPG',
    '/images/6.JPG',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      const children = container?.children;
      if (!container || !children) return;

      const activeImage = children[currentIndex];
      const containerWidth = container.offsetWidth;
      const imageLeft = activeImage.offsetLeft;
      const imageWidth = activeImage.offsetWidth;

      const scrollLeft = imageLeft - (containerWidth / 2) + (imageWidth / 2);

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full overflow-hidden pb-5">
          <div 
            ref={containerRef}
            className="flex overflow-x-scroll no-scrollbar scroll-smooth px-10 gap-5"
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Image ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-lg transition-all duration-500 cursor-pointer object-cover
                  ${i === currentIndex ? 'w-144 lg:w-160 scale-105 z-10 shadow-xl' : 'w-48 opacity-60 hover:opacity-90'}
                `}
              />
            ))}
          </div>
    
          
        </div>
      );
    }
    
export default Carousel;