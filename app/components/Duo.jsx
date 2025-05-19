'use client'
import React from 'react'
import Carousel from './Carousel'

const Duo = () => {
  return (
    
    <div className='px-4 md:px-10 2xl:px-[10%] my-10'>
        <h2 className="text-xl md:text-2xl lg:text-xl font-bold uppercase">
            Un duo charmant : Caravane rénovée & “Chalet” bois
        </h2>
        <div className="flex flex-col gap-10 py-10">
        {/* Liste */}
            <div className="flex flex-col md:flex-row mx-auto md:justify-between space-y-5">
                {/* La caravane */}
                <ul className="list-disc list-inside space-y-3">
                    <li className="underline font-bold text-lg list-none">La caravane</li>
                    <li>Un vrai lit confortable deux places</li>
                    <li>Un coin lecture convertible en lit d’appoint.</li>
                    <li>Lavabo, penderie, vrais WC</li>
                </ul>
                {/* Le chalet */}
                <ul className="list-disc list-inside space-y-3 text-justify md:w-1/2">
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
  )
}

export default Duo