import "../App.css";
import { Link } from "react-router-dom";
import car from '../car.png';

function Logo() {
    return (
        <div className='flex items-center gap-2'>
            <img className="h-16 w-16" src={car} alt="Logo" />
            <span className="text-2xl font-normal text-gray-900">AutoPortal</span>
          </div> 
    )
}
export default Logo;
