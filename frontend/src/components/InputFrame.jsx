import "../App.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function InputFrame() {
  const navigate = useNavigate();
  const [machineOpen, setMachineOpen] = useState(false);
  const [machineType, setMachineType] = useState(""); 

  const [carParameters, setCarParameters] = useState({
    brand: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    mileageTo: "",
    fuelType: ""
  }); 

  function handleWyszukaj() {
    console.log("Searching with parameters:", carParameters);
    navigate("/searchResult", {
        state: { carParameters }
    })
  }

  return (
    <div className='bg-slate-100 flex items-center flex-col pt-16 pb-6 gap-5 px-48'>
        <h1 className="text-black text-lg">Znajdź swój wymarzony samochód</h1>
        <h1 className="text-gray-500 text-xl pb-5">Ponad 50 000 ogłoszeń samochodów osobowych, dostawczych i motocykli</h1>
        <div className="bg-white w-full rounded-md shadow-lg p-6 flex flex-col gap-6">
            <div className="flex items-center gap-8">
                <input type="text" onChange={e => setCarParameters({...carParameters, brand: e.target.value})} value={carParameters.brand} placeholder="Marka pojazdu" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="text" onChange={e => setCarParameters({...carParameters, model: e.target.value})} value={carParameters.model} placeholder="Model" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="number" onChange={e => setCarParameters({...carParameters, priceFrom: e.target.value})} value={carParameters.priceFrom} placeholder="Cena od" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="number" onChange={e => setCarParameters({...carParameters, priceTo: e.target.value})} value={carParameters.priceTo} placeholder="Cena do" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
            </div>
            <div className="flex items-center gap-8">
                <input type="number" onChange={e => setCarParameters({...carParameters, yearFrom: e.target.value})} value={carParameters.yearFrom} placeholder="Rok produkcji od" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                <input type="number" onChange={e => setCarParameters({...carParameters, mileageTo: e.target.value})} value={carParameters.mileageTo} placeholder="Przebieg do" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" />
                {/* <input type="text" placeholder="Rodzaj paliwa" className="border border-gray-300 bg-slate-200 rounded-md p-2 w-full" /> */}
                <div className="relative w-full">
                    <button type="button" onClick={() => setMachineOpen(v => !v)} aria-expanded={machineOpen} className="w-full text-left border  border-gray-300 bg-slate-200 py-2 rounded-md p-2 flex justify-between items-center">
                            <span className={` ${machineType ? 'text-black' : 'text-gray-400'}`}>{machineType || 'Wybierz rodzaj'}</span> 
                            <span className={` transform transition-transform ${machineOpen ? 'rotate-180' : ''}`}>▾</span>
                        </button>
                        {machineOpen && (
                            <ul className="absolute z-20 left-0 right-0 p-2 bg-white border rounded-md shadow-sm">
                            {['Benzyna','Diesel','Hybryda','Elektryczny', 'LPG'].map(opt => (
                                <li key={opt}>
                                <button
                                    type="button"
                                    onClick={() => {setMachineOpen(false); setMachineType(opt); setCarParameters({...carParameters, fuelType: opt}); }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
                                >
                                    {opt}
                                </button>
                                </li>
                            ))}
                            </ul>
                    )}
                </div>
            </div>
            <button onClick={handleWyszukaj} className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 h-12 px-3 w-full" >Wyszukaj</button>
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
