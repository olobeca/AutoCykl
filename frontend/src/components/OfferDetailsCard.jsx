import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavigationBar from "./NavigationBar.jsx";

function OfferDetailsCard() {
  return (
    <div className='bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: 'Offer Title'}} />
        <div className="border border-gray-300 rounded-lg p-4 m-4">
            <div className="flex gap-3 ">

            </div>

        </div>
    </div>
  )
}

export default OfferDetailsCard;
