'use client'
import React from 'react'
import Carousel from './Carousel'


const Duo = () => {

  return (
    <div>
      <div className='px-4 md:px-10 2xl:px-[10%] pt-10 bg-[#7D6B51] text-white'>
        <h2 className="text-xl md:text-2xl font-bold uppercase">
          Un duo charmant : Caravane rénovée & “Chalet” bois
        </h2>
        <div className="flex flex-col gap-10 pt-10">
          {/* Liste */}
          <div className="flex flex-col md:flex-row mx-auto md:justify-between">
            {/* La caravane */}
            <ul className="list-disc list-inside space-y-5">
              <li className="underline font-bold text-lg list-none">La caravane</li>
              <li>Un vrai lit confortable deux places</li>
              <li>Un coin lecture convertible en lit d’appoint.</li>
              <li>Lavabo, penderie, vrais WC</li>
            </ul>
                  {/* Le chalet */}
            <ul className="list-disc list-inside space-y-5 text-justify md:w-1/2">
              <li className="underline font-bold text-lg list-none">Le Chalet</li>
              <li>Espace repas avec cuisine équipée : évier double bac, réfrigérateur, lave-linge, micro-ondes, plancha, bouilloire, vaisselle, ventilateur</li>
              <li>Ouvert sur la nature avec vue sur un terrain arboré</li>
              <li>Accès à une douche en plein air dans les arbres via un ponton en bois – un vrai régal !</li>
            </ul>
          </div>
      
          {/* Carousel */}
          <div>
            <Carousel />
          </div> 
        </div>
      </div>

      {/* 4 demi-cercles */}
      <div className="w-full flex bg-gray-100 pb-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-1/4 h-16 sm:h-32 lg:h-64 aspect-square bg-[#7D6B51] border border-[#7D6B51] border-l-0 first:border-l rounded-b-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Duo