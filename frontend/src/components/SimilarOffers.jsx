import "../App.css";

import OfferCard from "./OfferCard.jsx";
import fordfocus from '../fordfocus.jpg';
import hondacivic from '../hondacivic.jpg';
import toyotacorolla from '../toyotacorolla.jpg';

function SimilarOffers() {
    return (
        <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4">
            <div className="flex flex-col gap-1"> 
                <span className="text-base text-black font-bold">Podobne oferty</span>
                <div className="grid grid-cols-3 gap-4  w-full mt-4">
                    <OfferCard props={{image: toyotacorolla, title: "Toyota Corolla", price: "85 000 PLN", year: "2018", mileage: "50 000 km", fuelType: "Benzyna", location: "Warszawa", isFeatured: true, id: 1}} />
                    <OfferCard props={{image: hondacivic, title: "Honda Civic", price: "90 000 PLN", year: "2019", mileage: "40 000 km", fuelType: "Diesel", location: "Kraków", isFeatured: true, id: 2}} />
                    <OfferCard props={{image: fordfocus, title: "Ford Focus", price: "75 000 PLN", year: "2017", mileage: "60 000 km", fuelType: "Benzyna", location: "Gdańsk", isFeatured: true, id: 3}} />
                </div>
            </div>
        </div>
    )
}

export default SimilarOffers;