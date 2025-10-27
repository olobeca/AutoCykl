import "../App.css";
import toyotacorolla from '../toyotacorolla.jpg';
import WelcomePageCattegoriesCard from "./WelcomePageCattegoriesCard";

function WelcomePageCattegories() {
    return (
        <div className='mt-5 bg-stone-100 flex flex-col items-center justify-center pt-32 gap-4 px-48'>
            <h1 className="text-black font-bold text-xl">Przeglądaj kategorie</h1>
            <h1 className="text-gray-500 text-md pb-5">Znajdź pojazd dopasowany do Twoich potrzeb</h1>
            <div className="flex grid grid-cols-4 w-full gap-4 mb-8">
                <div className="relative overflow-hidden rounded-md">
                    <img src={toyotacorolla} alt="Toyota Corolla" className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
                    <span className='absolute bottom-7 left-2 text-lg text-white py-1 px-2 rounded-md'>Samochody Osobowe</span>
                    <span className='absolute bottom-2 left-2  text-base text-white py-1 px-2 rounded-md'>45 234 Ogłoszenia</span>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src={toyotacorolla} alt="Toyota Corolla" className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
                    <span className='absolute bottom-7 left-2 text-lg text-white py-1 px-2 rounded-md'>Samochody Osobowe</span>
                    <span className='absolute bottom-2 left-2  text-base text-white py-1 px-2 rounded-md'>45 234 Ogłoszenia</span>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src={toyotacorolla} alt="Toyota Corolla" className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
                    <span className='absolute bottom-7 left-2 text-lg text-white py-1 px-2 rounded-md'>Samochody Osobowe</span>
                    <span className='absolute bottom-2 left-2  text-base text-white py-1 px-2 rounded-md'>45 234 Ogłoszenia</span>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src={toyotacorolla} alt="Toyota Corolla" className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
                    <span className='absolute bottom-7 left-2 text-lg text-white py-1 px-2 rounded-md'>Samochody Osobowe</span>
                    <span className='absolute bottom-2 left-2  text-base text-white py-1 px-2 rounded-md'>45 234 Ogłoszenia</span>
                </div>
            </div>
        </div>


    )
}


export default WelcomePageCattegories;
