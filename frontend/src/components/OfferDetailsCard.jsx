import "../App.css";

import NavigationBar from "./NavigationBar.jsx";
import OfferDetailsFirstInfo from "./OfferDetailsFirstInfo.jsx";


function OfferDetailsCard({props}) {
  return (
    <div className='bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: props.title}} />
        <OfferDetailsFirstInfo props={{title: props.title, isFeatured: props.isFeatured, isAccidentFree: props.isAccidentFree, location: props.location, views: props.views, dateAdded: props.dateAdded, price: props.price, year: props.year, mileage: props.mileage, fuelType: props.fuelType, transmission: props.transmission}} />
    </div>
  )
}

export default OfferDetailsCard;

