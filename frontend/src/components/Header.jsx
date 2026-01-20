import "../App.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext.jsx";

function Header() {
  const navigate = useNavigate();
  const { user, setUser, setToken } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleLogout() {
    setUser({});
    setToken("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsMenuOpen(false);
    navigate("/");
  }
  return (
    <header className="sticky top-0 z-50  bg-white border-b border-gray-200">
      <div className=" flex items-center justify-between border-b bg-gray-50 border-gray-200">
        <div className="items-center justify-between  flex py-3 px-8  gap-6" >
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/dealers">Dla dealerów</Link>
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/help">Pomoc</Link>
        </div>
        <div className="items-center justify-between flex py-3 px-8  gap-6">
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/favourites">Obserwowane</Link>
          {user.name ? (
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/sellerPanel">Panel Sprzedawcy</Link>
          ) : null}
          {user.name ? (
            <div className="relative">
              <button className="text-sm text-gray-600" onClick={toggleMenu}>Witaj {user.name}</button>
              {isMenuOpen && (
                <div className="absolute right-[-0.5rem] mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => { setIsMenuOpen(false); navigate("/messages"); }}
                  >
                     Wiadomości
                  </button>
                  <div className="border-t border-gray-200" />
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    Wyloguj
                  </button>
                </div>
              )}
            </div>
          ) : (
          <Link className="text-sm  text-gray-600 hover:text-gray-900" to="/login">Zaloguj się</Link>
          )}
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
          <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3" onClick={() => navigate("/offerPutting")}>Dodaj Ogłoszenie</button>
        </div>

      </div>
    </header>
  );
}
export default Header;
