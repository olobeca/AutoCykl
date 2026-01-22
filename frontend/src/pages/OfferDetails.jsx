import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import OfferDetailsFirstInfo from "../components/OfferDetailsFirstInfo.jsx";
import SellerDetails from "../components/SellerDetails.jsx";
import CarDescription from "../components/CarDescription.jsx";
import TechnicalSpecification from "../components/TechnicalSpecification.jsx";
import CarEquipment from "../components/CarEquipment.jsx";
import SimilarOffers from "../components/SimilarOffers.jsx";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import {useContext} from   "react"
import UserContext from "../context/UserContext.jsx";

function OfferDetails() {

  const {id} = useParams();
  console.log("OfferDetails page loaded for offer ID:", id);
  const [cardata, setCardata] = useState(null);
  const {user} = useContext(UserContext);

  async function fetchOfferDetails(offerId) {
    if(!offerId) {
      console.error("No offer ID provided to fetchOfferDetails");
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/offers/getOfferById/${offerId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCardata(data.offer);      
      console.log("Fetched offer details:", data);

    } catch (err) {
      console.error("Error fetching offer details:", err);
    }
    //add view 
      await fetch(`${process.env.REACT_APP_API_URL}/offers/addView/${offerId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      console.log("Added view for offer ID:", offerId); 
  }

  useEffect(() => {
    fetchOfferDetails(id);
  }, [id]);  

  const [sellerData, setSellerData] = useState(null);

 //zrobic usefedt do pobierania nazwy uzytwkinikwa znajac cardata.ownerId 
  useEffect(() => {
    async function fetchSellerData(id) {
      if(!id) {
        console.error("No seller ID provided to fetchSellerData");
        return;
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched seller data:", data)
        setSellerData(data.userProfile);
      } catch (err) {
        console.error("Error fetching seller data:", err);
      }
    }

    if (cardata && cardata.ownerId) {
      fetchSellerData(cardata.ownerId);
    }
  }, [cardata]);


  return (
    <div className='bg-white'>
      <Header />
      <div className='bg-gray-50 border-gray-200 flex flex-col gap-2 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: cardata?.brand + " " + cardata?.model}} />
        <OfferDetailsFirstInfo props={{title: cardata?.brand + " " + cardata?.model, isFeatured: cardata?.offerType && cardata?.offerType !== "standard", isAccidentFree: cardata?.isNoAccident, location: cardata?.location, views: cardata?.views?.length || 120, dateAdded: cardata?.createdAt ? new Date(cardata.createdAt).toLocaleDateString('pl-PL') : '2023-03-15', price: cardata?.price ? `${cardata.price.toLocaleString('pl-PL')} zł` : '250 000 zł', year: cardata?.year, mileage: cardata?.mileage ? `${cardata.mileage} km` : '30 000 km', fuelType: cardata?.fuelType, transmission: cardata?.transmission, offerId: id, userId: user?.id}} />
        <SellerDetails props={{sellerName: sellerData?.name || 'Jan Kowalski', image: 'https://via.placeholder.com/150', imageTitle: 'Seller Logo', isVerified: true, activeSince: sellerData?.createdAt.slice(0, 10) || '2020-01-01', sellerId: cardata?.ownerId, buyerId: user?.id, offerId: id, phoneNumber: sellerData?.phoneNumber || '123456789'}} />
        <CarDescription props={{description: cardata?.description || 'Brak opisu', isNoAccident: cardata?.isNoAccident, isDealerServicedOnly: true, warrantyEndDate: cardata?.warranty || '2024-03-15', additionalInfo: cardata?.isNoAccident ? ['Pierwszy właściciel', 'Bezwypadkowy', 'Serwisowany w ASO'] : ['Serwisowany w ASO'], serviceHistory: [{date: '2023-01-01', mileage: cardata?.mileage, type: 'Przegląd'}, {date: '2022-01-01', mileage: cardata?.mileage, type: 'Wymiana oleju'}]}} />
        <TechnicalSpecification props={{brand: cardata?.brand, model: cardata?.model, version: cardata?.version, year: cardata?.year, mileage: cardata?.mileage, engineCapacity: cardata?.engineCapacity, power: cardata?.power, torque: cardata?.torque, fuelType: cardata?.fuelType, transmission: cardata?.transmission, bodyType: cardata?.bodyType, doors: cardata?.doors, seats: cardata?.seats, color: cardata?.color, interiorColor: cardata?.interiorColor, vin: cardata?.vin}} />
        <CarEquipment equipment={cardata?.equipment || ['System nawigacji GPS',
          'Tempomat adaptacyjny',
          'Podgrzewane fotele przednie i tylne',
          'Panoramiczny dach',
          'Elektrycznie regulowane fotele',
          'Start-stop',
          'Przyciemniane szyby',
          'Kamera cofania 360°',
          'Asystent pasa ruchu',
          'Klimatyzacja automatyczna 3-strefowa',
          'System nagłośnienia premium',
          'Pamięć ustawień fotela kierowcy',
          'Czujnik zmierzchu i deszczu',
          'Felgi aluminiowe 19"',
          'Czujniki parkowania przód i tył',
          'Automatyczne światła LED',
          'Tapicerka skórzana',
          'Podgrzewana kierownica',
          'Keyless entry',
        'Bluetooth i Apple CarPlay']} />
        <SimilarOffers props={{carType: cardata?.carType || 'Samochody osobowe'}} />
      </div>
      <Footer />
    </div>
  )
}

export default OfferDetails;
