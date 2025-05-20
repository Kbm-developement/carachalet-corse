import React from 'react'
import Image from 'next/image'

const Detente = () => {
  return (

    <div className='px-4 md:px-10 2xl:px-[10%] py-10 text-emerald-800 bg-gray-100'>
        <div className="flex flex-col md:flex-row gap-8">
            <Image 
                src='/images/IMG_0636.JPG' 
                width={400} 
                height={500} 
                alt="détente" 
                className="rounded-md w-full md:w-1/2 h-auto object-contain" 
            />
            <div className="md:w-1/2 space-y-5 text-justify">
                <h2 className="text-2xl font-bold uppercase">Extérieurs et détente</h2>
                <p>
                Devant l’entrée se trouve un espace privatif avec une table rustique à deux bancs, un hamac entre des chênes-lièges, une piste de pétanque .
                Et en contrebas sous les grands arbres , il y a un autre salon de jardin avec fauteuils et table basse, plus une balançoire.
                </p>
                <p>
                Vous pourrez étendre votre linge en plein air, pique-niquer sur le terrain arboré, lire ou dormir dans le hamac , faire une partie de cartes ou de pétanque, etc. pendant que votre véhicule ( indispensable en Corse !) restera garé à l’ombre des arbousiers.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Detente