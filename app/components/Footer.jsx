import Image from "next/image"

const Footer = () => {
  return (
    <div className="relative bg-[url('/images/home_2.jpg')] bg-cover bg-center mt-10">
      <div className="absolute inset-0 bg-gray-900/60 z-0" />

      <div className="px-4 md:px-10 2xl:px-[10%] relative z-10 space-y-5 py-10">
        <div className="flex flex-wrap justify-center gap-6 md:justify-between mx-4 md:mx-10">
          {[
            { src: "/images/11h00.png", alt: "Heure d’arrivée", label: "Arrivée 11h" },
            { src: "/images/14h00.png", alt: "Heure de départ", label: "Départ 14h" },
            { src: "/images/animaux.png", alt: "Animaux autorisés", label: "Animaux autorisés" },
            { src: "/images/zone.png", alt: "Respect de la zone", label: "Respectueux" },
          ].map((item, i) => (
            <div key={i} 
            className="flex flex-col items-center space-y-2 w-24 transform transition duration-300 hover:scale-105">
              <Image src={item.src} width={80} height={80} alt={item.alt} className="w-16 md:w-20 h-auto" />
              <p className="text-center text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 className='text-xl sm:text-2xl md:text-3xl border-b pb-3'>Gardons le contact</h2>
        <div className='space-y-2 border-b pb-5'>
          <p>San Guiliano, 20230 Corse</p>
          <a href="tel:0675682536" className="block hover:underline">06 75 78 07 80</a>
          <a href="mailto:info@jacqui.fr" className="block hover:underline">info@jacqui.fr</a>
        </div>
        <p className='text-center text-xs'>© 2025 Kikine - Tous droits réservés</p>
      </div>
    </div>
  )
}

export default Footer