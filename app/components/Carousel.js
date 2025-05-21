import React, { useRef ,useEffect, useState } from 'react'

const images =[
    '/images/12.JPG',
    '/images/3.JPG',
    '/images/4.JPG',
    '/images/6.JPG',
    '/images/5.JPG',
];

export default function Carousel() {
  const containerRef = useRef(null)

  const scroll = (direction) => {
    const container = containerRef.current
    if (!container) return
    const cardWidth = container.offsetWidth * 0.8 + 16 // 80vw + 16px gap
    container.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex px-[10vw] space-x-4 scroll-pl-[10vw]">
          {images.map((src, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[80vw] h-[60vh] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  )
}