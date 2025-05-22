import React from 'react'
import Image from 'next/image'

const Detente = () => {
  return (

    <div className='px-4 md:px-10 2xl:px-[10%] py-10 text-emerald-800 bg-gray-100'>
      <div className="flex flex-col md:flex-row gap-8">

        <div className="space-y-5 text-justify md:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold uppercase">Extérieur et détente</h2>
          <p>
            Devant l’entrée se trouve un espace privatif avec une table rustique à deux bancs, un hamac entre des chênes-lièges, une piste de pétanque.
            En contrebas sous les grands arbres , vous trouverez un autre salon de jardin avec fauteuils et table basse, plus une balançoire.
          </p>
          <p>
            Vous pourrez étendre votre linge en plein air, pique-niquer sur le terrain arboré, lire ou dormir dans le hamac, faire une partie de cartes ou de pétanque, etc, pendant que votre véhicule ( indispensable en Corse !) restera garé à l’ombre des arbousiers.
          </p>
          <p>
            La propriété est entièrement clôturée.
          </p>
        </div>
        
        <div className='flex flex-col md:w-2/3'>
          <div className='flex w-1/2 p-2 gap-4'>
            <Image 
              src='/images/exterieur/detente.JPG' 
              width={400} 
              height={500} 
              alt="détente" 
              className="rounded-md h-auto object-contain" 
            />
            <Image 
              src='/images/exterieur/detente-1.JPG' 
              width={400} 
              height={500} 
              alt="détente" 
              className="rounded-md  h-auto object-contain" 
            />
          </div>
          <div className='flex w-1/2 p-2 gap-4'>
            <Image 
              src='/images/exterieur/detente-2.JPG' 
              width={400} 
              height={500} 
              alt="détente" 
              className="rounded-md h-auto object-contain" 
            />
            <Image 
              src='/images/exterieur/detente-3.JPG' 
              width={400} 
              height={500} 
              alt="détente" 
              className="rounded-md h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detente