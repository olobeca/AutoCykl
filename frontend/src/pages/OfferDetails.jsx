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
      const response = await fetch(`http://localhost:5001/offers/getOfferById/${offerId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
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
      await fetch(`http://localhost:5001/offers/addView/${offerId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      console.log("Added view for offer ID:", offerId); 
  }

  useEffect(() => {
    fetchOfferDetails(id);
  }, [id]);  



  return (
    <div className='bg-white'>
      <Header />
      <div className='bg-gray-50 border-gray-200 flex flex-col gap-2 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: 'BMW Seria 5 520d xDrive M Sport'}} />
        <OfferDetailsFirstInfo props={{title: 'BMW Seria 5 520d xDrive M Sport', isFeatured: true, isAccidentFree: true, location: 'Warszawa', views: 120, dateAdded: '2023-03-15', price: '250 000 zł', year: 2020, mileage: '30 000 km', fuelType: 'Diesel', transmission: 'Automatyczna', offerId: id, userId: user?.id}} />
        <SellerDetails props={{sellerName: 'Jan Kowalski', image: 'https://via.placeholder.com/150', imageTitle: 'BMW Logo', isVerified: true, activeSince: '2020-01-01', sellerId: cardata?.ownerId, buyerId: user?.id, offerId: id}} />
        <CarDescription props={{description: 'BMW Seria 5 520d xDrive M Sport w idealnym stanie, bezwypadkowy, serwisowany w ASO.', isNoAccident: true, isDealerServicedOnly: true, warrantyEndDate: '2024-03-15', additionalInfo: ['Pierwszy właściciel', 'Bezwypadkowy', 'Serwisowany w ASO'], serviceHistory: [{date: '2023-01-01', mileage: '20 000 km', type: 'Przegląd'}, {date: '2022-01-01', mileage: '10 000 km', type: 'Wymiana oleju'}]}} />
        <TechnicalSpecification />
        <CarEquipment equipment={['System nawigacji GPS',
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
        <SimilarOffers />
      </div>
      <Footer />
    </div>
  )
}

export default OfferDetails;
