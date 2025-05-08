'use client'
import Image from "next/image"
import Carousel from "./Carousel"

const Content = () => {
  return (
    <div className="md:mx-10 2xl:mx-[10%] my-10 space-y-30">

      <div className="flex max-lg:flex-col max-md:mx-5 gap-3 md:gap-5">
        <div className="flex flex-col justify-center text-justify md:gap-5 lg:w-1/2 space-y-3">
          <h2 className="text-2xl font-bold text-center uppercase">
            Vacances Nature au calme en Haute-Corse
          </h2>
          <p>À 60 km au sud de Bastia, à 200 mètres d’altitude, découvrez notre hébergement original niché en pleine nature, 
            sur la côte orientale de la Corse.
          </p>
          <p>Situé à 7,5 km de la mer, notre petit havre de paix est entouré de maquis, forêts et montagnes, à l’écart de toute agitation.</p>
          <p>La région Costa Verde aux longues plages de sable regorge de sites naturels, archéologiques, culturels et autres.
          Les randonneurs auront le choix entre de nombreux parcours .</p>
          <p>Nous vous prêtons divers guides verts, cartes , prospectus touristiques.</p>
          <p>Quant aux amateurs de bateaux, ils trouveront leur bonheur au Port de plaisance de Taverna, à environ une douzaine de kilomètres.
          Pour faire vos courses, vous trouverez des commerces dans la plaine d’Alistro , à environ 9 km.</p>
        </div>

        <div className="flex max-md:flex-col max-md:items-center gap-5">
          <Image src='/images/carte.jpg' width={400} height={600} alt="carte corse" className="rounded-lg max-md:w-[320px] max-md:h-[300px]" />
          <div className="flex-col">
            <Image src='/images/home.jpg' width={450} height={350} alt="carte corse" className="rounded-lg h-[280px] max-md:w-full max-md:h-[300px]" />
            <Image src='/images/mer_2.jpg' width={450} height={350} alt="carte corse" className="rounded-lg relative top-8 h-[280px] max-md:w-full max-md:h-[300px]" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:gap-10 py-10 max-md:mx-5">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-2xl font-bold uppercase">
            Un duo charmant : Caravane rénovée & “Chalet” bois
          </h2>

          <div className="flex md:flex-col justify-center gap-5">

            <ul className="list-disc list-inside space-y-3 max-md:w-1/2">
              <ol className="underline">La caravane</ol>
              <li>Un vrai lit confortable deux places</li>
              <li>Un coin lecture convertible en lit d’appoint.</li>
              <li>Lavabo, penderie, vrais WC</li>
            </ul>

            <ul className="list-disc list-inside space-y-3 max-md:w-1/2 text-justify">
              <ol className="underline">Le Chalet</ol>
              <li>Espace repas avec cuisine équipée : évier double bac, réfrigérateur, lave-linge, micro-ondes, plancha, bouilloire, vaisselle, ventilateur</li>
              <li>Ouvert sur la nature avec vue sur un terrain arboré</li>
              <li>Accès à une douche en plein air dans les arbres via un ponton en bois – un vrai régal !</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
        <Carousel />
        </div> 
      </div>

      <div className="flex max-md:flex-col md:gap-5 max-md:mx-5">
        <Image src='/images/IMG_0636.jpg' width={400} height={500} alt="carte corse" className="rounded-md w-full md:w-1/2 object-contain" />
        <div className="space-y-5 my-5">
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

export default Content