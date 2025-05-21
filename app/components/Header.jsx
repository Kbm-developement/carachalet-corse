import Image from "next/image"

const Header = () => {
  return (
    <div className="relative h-screen bg-[url('/images/home_2.JPG')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gray-900/45 z-0" />

        <div className='absolute flex gap-10 md:gap-[50px] right-5 md:right-[50px] top-10 font-bold'>
          <a href="mailto:info@cara-corse.fr" className="z-10 cursor-pointer">
            <Image src='/images/email.PNG' width={32} height={32} alt="Télephone" className="md:hidden hover:opacity-80 duration-300" />
            <h2 className="hidden md:block text-2xl hover:text-white/80 duration-300">info@cara-corse.fr</h2> 
          </a>
          <h2 className="z-10 cursor-pointer text-xl md:text-2xl border-b hover:opacity-80 duration-300">FR</h2>
        </div>

        <div className='z-10 flex flex-col items-center justify-center text-center h-1/2 translate-y-1/2'>
          <h1 className='font-black text-[38px] lg:text-[52px] uppercase'>Cara-chalet Corsica</h1>
          <h2 className="text-lg lg:text-xl">Hébergement atypique entre mer et montagne</h2>
        </div>
        
        <div className="absolute bottom-10 left-1/2">
          <Image src="/images/fleche1.png" width={33} height={36} alt="fleche" className="animate-bounce" />
        </div> 
    </div>
  )
}

export default Header