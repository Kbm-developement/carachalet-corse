import React from 'react'

const Tarifs = () => {
  return (
    <div className='px-4 md:px-10 2xl:px-[10%] pt-10 text-emerald-800 bg-gray-100'>
        <h2 className='font-bold text-xl md:text-2xl uppercase'>Tarifs</h2>
        <div className="overflow-x-auto max-w-3xl mx-auto py-5">
            <table className="min-w-full text-left">
                <thead className="">
                    <tr>
                        <th className="px-4 py-2 border-b">Mois</th>
                        <th className="px-4 py-2 border-b">Tarif/Semaine</th>
                        <th className="px-4 py-2 border-b">Coût nuit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border-b">Mai</td>
                        <td className="px-4 py-2 border-b">260 €</td>
                        <td className="px-4 py-2 border-b">~ 37 €/nuit</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-b">Juin</td>
                        <td className="px-4 py-2 border-b">360 €</td>
                        <td className="px-4 py-2 border-b">~ 52 €/nuit</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-b">Juillet-Aout</td>
                        <td className="px-4 py-2 border-b">460 €</td>
                        <td className="px-4 py-2 border-b">~ 66 €/nuit</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-b">Septembre</td>
                        <td className="px-4 py-2 border-b">360 €</td>
                        <td className="px-4 py-2 border-b">~ 52 €/nuit</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-b">Octobre</td>
                        <td className="px-4 py-2 border-b">260 €</td>
                        <td className="px-4 py-2 border-b">~ 37 €/nuit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex justify-center gap-5 pb-10'>
            <button className='border rounded-lg p-2 bg-gray-100 hover:bg-emerald-800  hover:text-white duration-300 font-bold cursor-pointer'>Réservation</button>
            <button href='facebook.com' className='border rounded-lg p-2 bg-gray-100 hover:bg-emerald-800 hover:text-white duration-300 font-bold cursor-pointer'>Contactez moi</button>
        </div>
        
    </div>
  )
}

export default Tarifs