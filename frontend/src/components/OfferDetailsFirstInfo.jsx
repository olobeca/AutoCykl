import CarDetailsCard from "./CarDetailsCard.jsx";


function OfferDetailsFirstInfo({ props }) {
    return (
        <div className="border border-gray-100 shadow-md rounded-lg p-4 m-4">
          <div className="flex flex-col gap-3">
            <div className="justify-between flex">
              <div className="flex gap-4 p-2">
                  <span className="text-lg text-gray-800">{props.title}</span>
                  {props.isFeatured ? <span className='inline  text-green-600 border border-green-600   h-7 text-xs p-1 rounded-xl'>Bezwypadkowy</span> : null}
                  {props.isAccidentFree ? <span className='inline border border-orange-600  text-xs text-orange-600 p-1 h-7 rounded-xl'>Wyróżnione</span>: null}
              </div>
              <div className="flex gap-4 p-2">
                <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Dodaj do ulubionych</button>
                <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Udostępnij</button>
              </div>
            </div>
            <div className="flex gap-6 p-2">
              <span className="text-sm text-gray-500">{props.location}</span>
              <span className="text-sm text-gray-500">{props.views} wyświetleń</span>
              <span className="text-sm text-gray-500">Dodano {props.dateAdded}</span>
            </div>
            <div className='p-2'>
              <span className="text-lg text-orange-600">{props.price}</span>
            </div>
            <CarDetailsCard props={{year: props.year, mileage: props.mileage, fuelType: props.fuelType, transmission: props.transmission}} />
          </div>
        </div>
    )
}

export default OfferDetailsFirstInfo;