import "../App.css";
import { Link } from "react-router-dom";

function InputFrame() {
  return (
    <div className='bg-slate-100 flex items-center flex-col pt-16 pb-6 gap-5 px-48'>
        <h1 className="text-black text-lg">Znajdź swój wymarzony samochód</h1>
        <h1 className="text-gray-500 text-xl pb-5">Ponad 50 000 ogłoszeń samochodów osobowych, dostawczych i motocykli</h1>
        <div className="bg-white w-full rounded-md shadow-lg p-6 flex flex-col gap-6">
            <div className="flex items-center gap-8">
                <input type="text" placeholder="Marka pojazdu" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" placeholder="Model" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" placeholder="Cena od" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" placeholder="Cena do" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
            </div>
            <div className="flex items-center gap-8">
                <input type="text" placeholder="Rok produkcji od" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" placeholder="Przebieg do" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" placeholder="Rodzaj paliwa" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
            </div>
            <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 h-12 px-3 w-full">Dodaj Ogłoszenie</button>
        </div>
        <div className="flex items-center gap-28 pt-8">
            <div className="flex flex-col items-center">
                <span className="text-orange-600 text-lg">50 000+</span>
                <span className="text-gray-400 text-lg">Ogłoszeń</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-orange-600 text-lg">5000+</span>
                <span className="text-gray-400 text-lg">Dealerów</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-orange-600 text-lg">1M+</span>
                <span className="text-gray-400 text-lg">Użytkowników</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-orange-600 text-lg">24/7</span>
                <span className="text-gray-400 text-lg">Wsparcie</span>
            </div>
        </div>
    </div>
  );
}
export default InputFrame;
