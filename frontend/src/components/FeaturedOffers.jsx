import "../App.css";

import OfferCard from "./OfferCard.jsx";
import fordfocus from '../fordfocus.jpg';
import hondacivic from '../hondacivic.jpg';
import toyotacorolla from '../toyotacorolla.jpg';
import volkswagengolf from '../wolkswagengolf.jpg';

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
        <div className="grid grid-cols-3 gap-4  w-full mt-12">
            <OfferCard props={{image: toyotacorolla, title: "Toyota Corolla", price: "85 000 PLN", year: "2018", mileage: "50 000 km", fuelType: "Benzyna", location: "Warszawa", isFeatured: true, isHearted: true}} />
            <OfferCard props={{image: hondacivic, title: "Honda Civic", price: "90 000 PLN", year: "2019", mileage: "40 000 km", fuelType: "Diesel", location: "Kraków", isFeatured: true, isHearted: false}} />
            <OfferCard props={{image: fordfocus, title: "Ford Focus", price: "75 000 PLN", year: "2017", mileage: "60 000 km", fuelType: "Benzyna", location: "Gdańsk", isFeatured: true, isHearted: false}} />
            <OfferCard props={{image: volkswagengolf, title: "Volkswagen Golf", price: "95 000 PLN", year: "2020", mileage: "30 000 km", fuelType: "Hybryda", location: "Wrocław", isFeatured: true, isHearted: false}} />
        </div>
    </div> 

  );
}
export default FeaturedOffers;
