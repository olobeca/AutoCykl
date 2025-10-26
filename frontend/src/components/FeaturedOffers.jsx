import "../App.css";
import { Link } from "react-router-dom";
import car from '../car.png';

function FeaturedOffers() {
  return (
    <div className='mt-5 flex flex-col items-center justify-center px-48'>
        <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-3'>
                <span className='text-lg font-medium text-black'>Polecane oferty</span>
                <span className='text-base font-normal text-gray-500'>Sprawdzone pojazdy od zaufanych sprzedawców</span>
            </div>
            <a href="#" className='text-orange-600 font-normal text-base'>Zobacz wszystkie</a>
        </div>

    </div>
  );
}
export default FeaturedOffers;
