import "../App.css";

import NavigationBar from "./NavigationBar.jsx";
import Featured from "../ui/Featured.jsx";
import AccidentFree from "../ui/AccidentFree.jsx";

function OfferDetailsCard({props}) {
  return (
    <div className='bg-gray-50 border-gray-200 flex flex-col gap-6 px-24  py-4'>
        <NavigationBar props={{home: 'Home',category: 'Category',searchResults: 'Search Results',offerTitle: props.title}} />
        <div className="border border-gray-100 shadow-md rounded-lg p-4 m-4">
          <div className="flex flex-col gap-4">
            <div className="justify-between flex">
              <div className="flex gap-4 p-2">
                  <span className="text-lg text-gray-800">{props.title}</span>
                  {props.isFeatured ? <span className='inline  text-green-600 border border-green-600   h-7 text-xs p-1 rounded-lg'>Bezwypadkowy</span> : null}
                  {props.isAccidentFree ? <span className='inline  bg-orange-600  text-xs text-white p-1 h-7 rounded-lg'>Wyróżnione</span>: null}
              </div>
              <div className="flex gap-4 p-2">
                <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Dodaj do ulubionych</button>
                <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Udostępnij</button>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-sm text-gray-500">{props.location}</span>
              <span className="text-sm text-gray-500">{props.views} wyświetleń</span>
              <span className="text-sm text-gray-500">Dodano {props.dateAdded}</span>
            </div>
            <div>
              <span className="text-lg text-orange-600">{props.price}</span>
            </div>
            <div className="flex gap-3 w-full justify-between whitespace-nowrap">
                <div className="bg-orange-100 border border-orange-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm  text-gray-600">Rok produkcji</span>
                  <span className="text-lg font-semibold text-gray-800">{props.year}</span>
                </div>
                <div className="bg-green-100 border border-green-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Przebieg</span>
                  <span className="text-lg font-semibold text-gray-800">{props.mileage}</span>
                </div>
                <div className="bg-blue-100 border border-blue-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Paliwo</span>
                  <span className="text-lg font-semibold text-gray-800">{props.fuelType}</span>
                </div>
                <div className="bg-purple-100 border border-purple-400 rounded-md overflow-hidden py-6 px-32 flex flex-col items-center">
                  <span className="text-sm text-gray-600">Skrzynia biegów</span>
                  <span className="text-lg font-semibold text-gray-800">{props.transmission}</span>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OfferDetailsCard;

