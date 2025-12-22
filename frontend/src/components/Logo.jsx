import "../App.css";
import car from '../car.png';
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-2' onClick={() => navigate("/")}>
            <img className="h-16 w-16" src={car} alt="Logo" />
            <span className="text-2xl font-normal text-gray-900">AutoPortal</span>
          </div> 
    )
}
export default Logo;
