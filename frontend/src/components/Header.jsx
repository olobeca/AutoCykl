import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sticky top-0 item-center justify-between">
      <div className="text-center  bg-slate-500 flex py-2 px-8 shadow-md">
        <Link className="text-sm  text-gray-600 hoover:text-gray-900" to="/dealers">Dla dealerów</Link>
        <Link className="text-sm  text-gray-600 hoover:text-gray-900" to="/help">Pomoc</Link>
      </div>
      <div className="text-center  bg-slate-500 flex py-2 px-8 shadow-md">
        <Link className="text-sm  text-gray-600 hoover:text-gray-900" to="/dealers">Obserwowane</Link>
        <Link className="text-sm  text-gray-600 hoover:text-gray-900" to="/help">Zaloguj się</Link>
      </div>
    </div>
  );
}
export default Header;
