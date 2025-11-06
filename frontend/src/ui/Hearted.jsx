import "../App.css";
import heart from '../icons/heartRed.svg';
function Hearted() {
  return (
    <img src={heart} alt="ulubione" className='absolute top-2 right-2 bg-white p-2 h-10 w-10  rounded-full' />
  );
}

export default Hearted;