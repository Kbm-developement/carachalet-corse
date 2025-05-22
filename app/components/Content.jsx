import Image from "next/image"

const Content = () => {
  return (
    <div className="px-4 md:px-10 2xl:px-[10%] py-10 space-y-10 md:space-y-20 text-emerald-800 bg-gray-100">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center uppercase">
        Vacances Nature au calme en Haute-Corse
      </h2>
      <div className="flex flex-col lg:justify-center lg:flex-row gap-6">
        <div className="lg:w-1/2 flex items-center">
          <Image 
              src='/images/1.JPG' 
              width={800} 
              height={600} 
              alt="montagnes" 
              className="w-full h-auto rounded-lg object-cover" 
          />
        </div>
        
        <div className="lg:w-1/2 xl:w-1/3 lg:px-10 flex flex-col justify-center space-y-5 md:space-y-7 text-justify">
          <p className="font-bold">Hébergement atypique entre mer et montagne
            à 60 km au sud de Bastia, à 200 mètres d’altitude, découvrez notre hébergement original niché en pleine nature, 
            sur la côte orientale de la Corse.<br></br>
            Situé à 7,5 km de la mer, notre petit havre de paix est entouré de maquis, forêts et montagnes, à l’écart de toute agitation.
          </p>
          <p>La région <strong>Costa Verde</strong> aux longues plages de sable regorge de sites naturels, archéologiques (<strong>Aléria</strong>), culturels et autres (<strong>L'INRAE</strong> et sa collection d'agrumes - unique en Europe, <strong>Étang de Diane</strong>...).<br></br>
          Les randonneurs auront le choix entre de nombreux parcours, notamment le circuit <strong>Mare a Mare Nord</strong> au départ de <strong>Moriani-Plage</strong>.</p>

          <p>Quant aux amateurs de bateaux et de plongée, ils trouveront leur bonheur au <strong>Port de plaisance de Taverna</strong>, à environ une douzaine de kilomètres.<br></br>
          Pour faire vos courses, vous trouverez des commerces (bureau de poste, supermarché, coiffeur, pharmacie, boutiques ...) dans <strong>la Plaine d’Alistro</strong> , à environ 9 km.</p> 

          <p className="">Nous mettons à votre disposition divers guides verts, des cartes, des prospectus touristiques avec les adresses des restaurants, ainsi que les monuments incontournables, villages pittoresques, lieux d'artisanat, etc.</p> 

          <a href="https://www.leboncoin.fr/ad/locations_saisonnieres/1860279047" className='lg:w-1/3 text-xl border rounded-lg p-2 bg-gray-100 hover:bg-emerald-800 hover:text-white duration-300 font-bold cursor-pointer text-center'>Réservez</a>
        </div>
      </div> 
    </div>
  )
}

export default Content