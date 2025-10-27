import "../App.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

function Header() {
  return (
    <header className="sticky top-0 z-50  bg-white border-b border-gray-200">
      <div className=" flex items-center justify-between border-b bg-gray-50 border-gray-200">
        <div className="items-center justify-between  flex py-3 px-8  gap-6" >
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/dealers">Dla dealerów</Link>
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/help">Pomoc</Link>
        </div>
        <div className="items-center justify-between flex py-3 px-8  gap-6">
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/dealers">Obserwowane</Link>
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/help">Zaloguj się</Link>
        </div>
      </div> 
      <div className=" items-center justify-center flex px-2 py-1">
        <div className="flex items-center h-16 justify-between gap-28">
          <Logo />
          <nav className="flex items-center gap-12">
            <a className="text-gray-700 hover:text-orange-600 transition-colors" href="#">Samochody Osobowe</a>
            <a className="text-gray-700 hover:text-orange-600 transition-colors" href="#">Samochody Dostawcze</a>
            <a className="text-gray-700 hover:text-orange-600 transition-colors" href="#">Motocykle</a>
            <a className="text-gray-700 hover:text-orange-600 transition-colors" href="#">Maszyny Rolnicze</a>
          </nav>
          <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Dodaj Ogłoszenie</button>
        </div>

      </div>
    </header>
  );
}
export default Header;
