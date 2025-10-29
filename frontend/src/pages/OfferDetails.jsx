import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import OfferDetailsCard from "../components/OfferDetailsCard.jsx";

function OfferDetails() {
  return (
    <div className='bg-white'>
      <Header />
      <OfferDetailsCard props={{title:'BMW Seria 5 520d xDrive M Sport', isFeatured: true, isAccidentFree: true, location: 'Warszawa', views: 120, dateAdded: '2023-03-15', price: '250 000 zł', year: 2020, mileage: '30 000 km', fuelType: 'Diesel', transmission: 'Automatyczna'}} />
      <Footer />
    </div>
  )
}

export default OfferDetails;
