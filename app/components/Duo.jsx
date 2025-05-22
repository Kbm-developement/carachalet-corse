'use client'
import React from 'react'
import Carousel from './Carousel'


const Duo = () => {

  return (
    <div className='bg-gray-100 pt-10'>
      <div className='px-4 md:px-10 2xl:px-[10%] pt-10 bg-[#7D6B51] text-white'>
        <h2 className="text-lg md:text-xl font-bold uppercase">
          Un duo charmant pour une à trois personnes <span className='px-2'>:</span> Caravane rénovée & “Chalet"
        </h2>
        <p className='px-2'>La caravane est adossée à une structure tout en bois</p>
        <div className="flex flex-col gap-10 pt-10">
          {/* Liste */}
          <div className="flex flex-col md:flex-row md:justify-between md:px-10 space-y-3">
            {/* La caravane */}
            <ul className="list-disc list-inside space-y-3">
              <li className="underline font-bold text-lg list-none">La caravane</li>
              <li>Un vrai lit confortable deux places.</li>
              <li>Un coin lecture convertible en lit d’appoint.</li>
              <li>Lavabo, penderie, toilettes.</li>
              <li>Literie fournie.</li>
            </ul>
                  {/* Le chalet */}
            <ul className="list-disc list-inside space-y-3 text-justify md:w-1/2 ">
              <li className="underline font-bold text-lg list-none">Le Chalet</li>
              <li>Espace repas avec cuisine équipée : évier double bac, chauffe-eau, réfrigérateur, lave-linge, micro-ondes, plancha, bouilloire, vaisselle, ventilateur.</li>
              <li>Ouvert sur la nature avec vue sur un terrain arboré.</li>
              <li>Accès à une vraie douche en plein air dans les arbres, via un ponton en bois.</li>
              <li>Possibilité de louer des packs de linge toilette et cuisine (10€/semaine/personne).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className='bg-[#7D6B51] pt-10 px-4'>
        <Carousel />
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