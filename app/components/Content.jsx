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
              src='/images/home.JPG' 
              width={800} 
              height={600} 
              alt="montagnes" 
              className="w-full h-auto rounded-lg object-cover" 
          />
        </div>
        
        <div className="lg:w-1/2 xl:w-1/3 lg:px-10 flex flex-col justify-center space-y-5 md:space-y-10 text-justify">
          <p className="font-bold">Hébergement atypique entre mer et montagne
          à 60 km au sud de Bastia, à 200 mètres d’altitude, découvrez notre hébergement original niché en pleine nature, 
          sur la côte orientale de la Corse.
          </p>
          <p>Situé à 7,5 km de la mer, notre petit havre de paix est entouré de maquis, forêts et montagnes, à l’écart de toute agitation.
          La région Costa Verde aux longues plages de sable regorge de sites naturels, archéologiques, culturels et autres.
          Les randonneurs auront le choix entre de nombreux parcours.</p>
          <p>Nous vous prêtons divers guides verts, cartes , prospectus touristiques.
          Quant aux amateurs de bateaux, ils trouveront leur bonheur au Port de plaisance de Taverna, à environ une douzaine de kilomètres.
          Pour faire vos courses, vous trouverez des commerces dans la plaine d’Alistro , à environ 9 km.</p>  
          <button className='w-1/3 text-xl border rounded-lg p-2 bg-gray-100 hover:bg-emerald-800 hover:text-white duration-300 font-bold cursor-pointer'>Réservez</button>
        </div>
      </div> 
    </div>
  )
}

export default Content