// components/ImageModal.js
import { useState } from 'react';
import Image from 'next/image';

export default function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image cliquable */}
      <div className="cursor-pointer inline-block" onClick={() => setIsOpen(true)}>
        <Image src={src} alt={alt} width={1000} height={1000} className="rounded shadow" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <Image src={src} alt={alt} width={800} height={600} className="rounded shadow-lg" />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
