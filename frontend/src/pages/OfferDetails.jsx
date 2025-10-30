import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import OfferDetailsFirstInfo from "../components/OfferDetailsFirstInfo.jsx";
import SellerDetails from "../components/SellerDetails.jsx";

function OfferDetails() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: 'BMW Seria 5 520d xDrive M Sport'}} />
        <OfferDetailsFirstInfo props={{title: 'BMW Seria 5 520d xDrive M Sport', isFeatured: true, isAccidentFree: true, location: 'Warszawa', views: 120, dateAdded: '2023-03-15', price: '250 000 zł', year: 2020, mileage: '30 000 km', fuelType: 'Diesel', transmission: 'Automatyczna'}} />
        <SellerDetails props={{sellerName: 'Jan Kowalski', image: 'https://via.placeholder.com/150', imageTitle: 'BMW Logo', isVerified: true, activeSince: '2020-01-01'}} />
      </div>
      <Footer />
    </div>
  )
}

export default OfferDetails;
