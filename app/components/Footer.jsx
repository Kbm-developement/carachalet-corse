import Image from "next/image"

const Footer = () => {
  return (
    <div className="relative bg-[url('/images/home_2.jpg')] bg-cover bg-center mt-10">
      <div className="absolute inset-0 bg-gray-900/60 z-0" />

      <div className="md:mx-10 2xl:mx-[10%] relative z-10 space-y-5 py-10">
        <div className="flex justify-between mx-10">

          <div className="flex-col space-y-3">
            <Image src="/images/11h00.png" width={100} height={100} alt="arrivée 11h"/>
            <p className="text-center text-sm">Arrivée 11h</p>
          </div>
          <div className="flex-col space-y-3">
            <Image src="/images/14h00.png" width={100} height={100} alt="départ 14h"/>
            <p className="text-center text-sm">Départ 14h</p>
          </div>
          <div className="flex-col space-y-3">
            <Image src="/images/animaux.png" width={100} height={100} alt="animaux autorisés"/>
            <p className="text-center text-sm">Animaux autorisés</p>
          </div>
          <div className="flex-col space-y-3">
            <Image src="/images/zone.png" width={100} height={100} alt="arrivée 11h" />
            <p className="text-center text-sm">Respectueux</p>
          </div>
        </div>

        <h2 className='text-2xl md:text-3xl border-b mx-10 pb-3'>Gardons le contact</h2>
        <div className='border-b mx-10 pb-5'>
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