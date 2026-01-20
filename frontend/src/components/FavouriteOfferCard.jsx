import "../App.css";
import Featured from "../ui/Featured.jsx";
import heart from '../icons/heartRed.svg';
import trash from '../icons/trashRed.svg';
import { useNavigate } from "react-router-dom";


function FavouriteOfferCard({props}) {

  const id = props.id;
  const navigate = useNavigate();

  async function handleDetails() {
    console.log("Viewing details for offer ID:", id);
    navigate(`/offerDetails/${id}`);
  }

  async function handleRemoveFavourite() {
    try {
      const response = await fetch(`http://localhost:5001/offers/unlikeOffer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ offerId: id, userId: props.userId }),
      });
      if (!response.ok) {
        throw new Error("Failed to remove favourite");
      }
      console.log("Successfully removed favourite for offer ID:", id);
    } catch (error) {
      console.error("Error removing favourite:", error);
    }
  }


  return ( 
    <div className='rounded-md shadow-md hover:shadow-xl flex flex-col gap-4 p-4 bg-white overflow-hidden'>
        <div className="overflow-hidden rounded-md relative">
            <img src={props.image} alt={props.title} className='w-full h-48 object-cover rounded-md ease-in-out hover:scale-110 duration-300' />
            {props.isFeatured ? <Featured /> : null}
            <img src={heart} alt="ulubione" className='absolute top-2 right-2 bg-white p-2 h-10 w-10  rounded-full' />
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
      <div className="flex gap-2 w-full justify-between items-center">
        <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-16" onClick={handleDetails}>Zobacz Szczegóły</button>
        <div>
            <img src={trash} alt="usuń" className=' bg-gray-100 hover:bg-gray-200 p-2 h-10 w-10  rounded-md' />
            <button className="hidden"></button> {/* tu dodam usuwanie */}
        </div>
      </div>
    </div>

  );
}
export default FavouriteOfferCard;
