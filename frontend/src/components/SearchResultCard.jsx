import "../App.css";
import car from '../car.png'; 
import NavigationBar from "./NavigationBar.jsx";
import FiltersBar from "./FiltersBar.jsx";
import SortingBar from "./SortingBar.jsx";
import OfferCard from "./OfferCard.jsx";

import fordfocus from '../fordfocus.jpg';
import hondacivic from '../hondacivic.jpg';
import toyotacorolla from '../toyotacorolla.jpg';
import volkswagengolf from '../wolkswagengolf.jpg';

function SearchResultCard() {
    return (
        <div className="bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4">
            <NavigationBar props={{home: "Strona główna", category: "Samochody osobowe", searchResults: "Wyniki Wyszukiwania"}}/>
            <div className="flex gap-6">
                <FiltersBar />
                <div className="flex flex-col gap-5 w-4/5  ">
                    <SortingBar />
                    <div className=" grid grid-cols-3 gap-4 mt-4 w-full ">
                        <OfferCard props={{image: toyotacorolla, title: "Toyota Corolla", price: "85 000 PLN", year: "2018", mileage: "50 000 km", fuelType: "Benzyna", location: "Warszawa", isFeatured: false}} />
                        <OfferCard props={{image: hondacivic, title: "Honda Civic", price: "90 000 PLN", year: "2019", mileage: "40 000 km", fuelType: "Diesel", location: "Kraków", isFeatured: false}} />
                        <OfferCard props={{image: fordfocus, title: "Ford Focus", price: "75 000 PLN", year: "2017", mileage: "60 000 km", fuelType: "Benzyna", location: "Gdańsk", isFeatured: false}} />
                        <OfferCard props={{image: volkswagengolf, title: "Volkswagen Golf", price: "95 000 PLN", year: "2020", mileage: "30 000 km", fuelType: "Hybryda", location: "Wrocław", isFeatured: false}} />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default SearchResultCard;

