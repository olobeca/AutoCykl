import "../App.css";

import OfferCard from "./OfferCard.jsx";
import fordfocus from '../fordfocus.jpg';
import hondacivic from '../hondacivic.jpg';
import toyotacorolla from '../toyotacorolla.jpg';
import { useEffect , useState} from "react";

function SimilarOffers ({props}) {

    const [similarOffers, setSimilarOffers] = useState([]);

    useEffect(() => {
        if(!props.carType) {
            console.error("No car type provided to SimilarOffers component");
            return;
        }
        async function fetchSimilarOffers(carType) {
            if(!carType) {
                console.error("No car type provided to fetchSimilarOffers");
                return;
            }
            console.log("Fetching similar offers for car type:", carType);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/offers/getSimilarOffers/${carType}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSimilarOffers(data.offers);
                console.log("Fetched similar offers:", data);

            } catch (err) {
                console.error("Error fetching similar offers:", err);
            }
        }
        fetchSimilarOffers(props.carType);
    }, [props.carType]);

    return (
        <div className="border border-gray-100 shadow-md rounded-lg p-6 m-4">
            <div className="flex flex-col gap-1"> 
                <span className="text-base text-black font-bold">Podobne oferty</span>
                <div className="grid grid-cols-3 gap-4  w-full mt-4">
                    {/* <OfferCard props={{image: toyotacorolla, title: "Toyota Corolla", price: "85 000 PLN", year: "2018", mileage: "50 000 km", fuelType: "Benzyna", location: "Warszawa", isFeatured: true, id: 1}} />
                    <OfferCard props={{image: hondacivic, title: "Honda Civic", price: "90 000 PLN", year: "2019", mileage: "40 000 km", fuelType: "Diesel", location: "Kraków", isFeatured: true, id: 2}} />
                    <OfferCard props={{image: fordfocus, title: "Ford Focus", price: "75 000 PLN", year: "2017", mileage: "60 000 km", fuelType: "Benzyna", location: "Gdańsk", isFeatured: true, id: 3}} /> */}
                    {similarOffers.map((offer) => (<OfferCard key={offer.id} props={{
                            image: toyotacorolla,
                            title: offer.brand + " " + offer.model,
                            price: `${offer.price} zł`,
                            year: offer.year,
                            mileage: `${offer.mileage} km`,
                            fuelType: offer.fuelType,
                            location: offer.location,
                            isFeatured: offer.isFeatured,
                            id: offer.id,
                        }} />))}
                </div>
            </div>
        </div>
    )
}

export default SimilarOffers;