import "../App.css";
import { Link } from "react-router-dom";

function FeaturedOfferCard({props}) {
  return ( 
    <div className='rounded-md shadow-md flex flex-col gap-4 p-4 bg-white'>
      <img src={props.image} alt={props.title} className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-x-125' />
      <div className='flex flex-col gap-4'>
        <span className='text-lg font-medium text-gray-700'>{props.title}</span>
        <span className='text-base font-normal text-orange-600'>{props.price}</span>
      </div>
      <div className='flex w-full '>
        <span className='text-sm text-gray-500'>{props.year}</span>
        <div className='flex gap-4'>
            <span className='text-sm text-gray-500'>{props.mileage}</span>
            <span className='text-sm text-gray-500'>{props.fuelType}</span>
        </div>
      </div>
      <span className='text-sm text-gray-500'>{props.location}</span>
      <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Zobacz Szczegóły</button>
    </div>

  );
}
export default FeaturedOfferCard;
