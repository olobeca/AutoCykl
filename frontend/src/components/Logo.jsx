import "../App.css";
// import car from '../car.png';
import car from "../icons/car.svg";
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-2' onClick={() => navigate("/")}>
            {/* <img className="h-16 w-16 cursor-pointer" src={car} alt="Logo" /> */}
            <img src={car} alt="Logo" className="w-12 h-12 p-2 bg-orange-600 rounded-full" />
            <span className="text-2xl font-normal text-gray-900 cursor-pointer">AutoCykl</span>
          </div> 
    )
}
export default Logo;
