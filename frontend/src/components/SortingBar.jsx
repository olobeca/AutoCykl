import {useState} from "react";

function SortingBar({props}) {

    const [machineOpen, setMachineOpen] = useState(false);

    const {sortingType, setSortingType} = props;

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
                <h2 className="text-base font-semibold">Wyniki wyszukiwania</h2>
                <div className="flex items-center gap-1">
                    <span className="text-gray-400 text-sm">Znaleziono</span>
                    <span className="text-orange-600 text-sm">1,247</span>
                    <span className="text-gray-400 text-sm">ogłoszeń</span>
                </div>
            </div>
            <div className="border border-gray-200 bg-slate-100 rounded-lg p-2 w-3/12 relative">
                <button type="button" onClick={() => setMachineOpen(v => !v)} aria-expanded={machineOpen} className="w-full text-left flex justify-between items-center">
                    <span className={` ${sortingType ? 'text-gray-600' : 'text-gray-400'}`}>{sortingType}</span> 
                    <span className={` transform transition-transform ${machineOpen ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {machineOpen && (
                    <ul className="absolute z-20 left-0 right-0 p-2 bg-white border rounded-md shadow-sm">
                    {['Sortowanie rosnąco', 'Sortowanie malejąco'].map(opt => (
                        <li key={opt}>
                        <button
                            type="button"
                            onClick={() => {setMachineOpen(false); setSortingType(opt); }}
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
    )}
export default SortingBar;