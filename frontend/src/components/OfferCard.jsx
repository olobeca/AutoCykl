import "../App.css";
import Featured from "../ui/Featured.jsx";
import Hearted from "../ui/Hearted.jsx";
import { useNavigate } from "react-router-dom";

function OfferCard({props}) {

  const id = props.id;
  const navigate = useNavigate();

  async function handleDetails() {
    console.log("Viewing details for offer ID:", id);
    navigate(`/offerDetails/${id}`);
  }

  return ( 
    <div className='rounded-md shadow-md hover:shadow-xl flex flex-col gap-4 p-4 bg-white overflow-hidden'>
        <div className="overflow-hidden rounded-md relative">
            <img src={props.image} alt={props.title} className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
            {props.isFeatured ? <Featured /> : null}
            {props.isHearted ? <Hearted /> : null}
            {/* <span className="absolute top-2 right-2 bg-orange-600 text-xs text-white py-1 px-2 rounded-md">Dodaj do ulubionych</span> */}
        </div>
      <div className='flex flex-col gap-4'>
        <span className='text-lg font-medium text-gray-700'>{props.title}</span>
        <span className='text-base font-normal text-orange-600'>{props.price}</span>
      </div>
      <div className='flex w-full  justify-between items-center'>
        <span className='text-sm text-gray-500'>{props.year}</span>
        <div className='flex gap-4'>
            <span className='text-sm text-gray-500'>{props.mileage}</span>
            <span className='text-sm text-gray-500'>{props.fuelType}</span>
        </div>
      </div>
      <span className='text-sm text-gray-500'>{props.location}</span>
      <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3" onClick={handleDetails}>Zobacz Szczegóły</button>
    </div>

  );
}
export default OfferCard;
