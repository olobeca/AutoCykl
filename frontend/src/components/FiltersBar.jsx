import {useState} from "react";

function FiltersBar({props}) {
    const {setNewFilters} = props;
    const [filters, setFilters] = useState({
        brand: "",
        minPrice: 0,
        maxPrice: 1000000,
        yearFrom: 2000,
        yearTo: 2024,
        mileageFrom: 0,
        mileageTo: 300000,
        fuelTypes: [],
        gearboxTypes: [],
        bodyTypes: [],
        colors: [],
        features: []
    });
    const [activeThumbPrice, setActiveThumbPrice] = useState(null); // 'min' | 'max' | null
    const [activeThumbYear, setActiveThumbYear] = useState(null);
    const [activeThumbMileage, setActiveThumbMileage] = useState(null);
    const toggleArray = (key, value) => {
        setFilters(prev => {
            const arr = prev[key] || [];
            const exists = arr.includes(value);
            return {...prev, [key]: exists ? arr.filter(x => x !== value) : [...arr, value]};
        });
    }

    function submitFilters() {
        // console.log('FiltersBar.submitFilters called, setNewFilters type:', typeof setNewFilters, 'filters:', filters);
        // if (typeof setNewFilters === 'function') setNewFilters(filters);
        // //debug
        setNewFilters(filters);
    }

    function resetFilters() {
        setFilters({
            brand: "",
            minPrice: 0,
            maxPrice: 1000000,
            yearFrom: 2000,
            yearTo: 2024,
            mileageFrom: 0,
            mileageTo: 300000,
            fuelTypes: [],
            gearboxTypes: [],
            bodyTypes: [],
            colors: [],
            conditions: [],
            features: []
        });
    }
    return (
        <div className="bg-white flex flex-col rounded-lg shadow-md  p-8 gap-3">
            <div className="flex gap-4 justify-between p-2"> 
                <h1 className="text-base font-normal text-black hover:text-gray-700">Filtry</h1>
                <button className="text-sm font-medium text-orange-600 hover:text-orange-500" onClick={resetFilters}>Wyczyść filtry</button>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black">Marka Pojazdu</h1>
                <input type="text" value={filters.brand} onChange={(e) => setFilters(prev => ({...prev, brand: e.target.value}))} placeholder="Wybierz markę" className="border border-gray-200 bg-gray-100 rounded-lg p-2 w-full" />
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-300" />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black">Cena</h1>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Od: {filters.minPrice.toLocaleString()}</span>
                    <span>Do: {filters.maxPrice.toLocaleString()}</span>
                </div>
                <div className="relative h-8">
                    <input
                        type="range"
                        min={0}
                        max={1000000}
                        step={100}
                        value={filters.minPrice}
                        onChange={(e) => {
                            const v = Math.min(Number(e.target.value), filters.maxPrice - 100);
                            setFilters(prev => ({...prev, minPrice: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.minPrice - 0) / (1000000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbPrice('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.minPrice - 0) / (1000000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbPrice('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbPrice(null)}
                        onTouchEnd={() => setActiveThumbPrice(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{
                            top: 10,
                            zIndex: activeThumbPrice === 'min' ? 3 : 1,
                            background: `linear-gradient(90deg,#e5e7eb 0%,#e5e7eb ${((filters.minPrice - 0)/(1000000 - 0))*100}%,#f97316 ${((filters.minPrice - 0)/(1000000 - 0))*100}%,#f97316 ${((filters.maxPrice - 0)/(1000000 - 0))*100}%,#e5e7eb ${((filters.maxPrice - 0)/(1000000 - 0))*100}%,#e5e7eb 100%)`,
                            pointerEvents: 'auto'
                        }}
                    />
                    <input
                        type="range"
                        min={0}
                        max={1000000}
                        step={100}
                        value={filters.maxPrice}
                        onChange={(e) => {
                            const v = Math.max(Number(e.target.value), filters.minPrice + 100);
                            setFilters(prev => ({...prev, maxPrice: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.maxPrice - 0) / (1000000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbPrice('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.maxPrice - 0) / (1000000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbPrice('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbPrice(null)}
                        onTouchEnd={() => setActiveThumbPrice(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{
                            top: 16,
                            zIndex: activeThumbPrice === 'max' ? 3 : 2,
                            background: `transparent`,
                            pointerEvents: 'auto'
                        }}
                    />
                </div>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-300" />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black">Rok produkcji</h1>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Od: {filters.yearFrom}</span>
                    <span>Do: {filters.yearTo}</span>
                </div>
                <div className="relative h-8">
                    <input
                        type="range"
                        min={1980}
                        max={2024}
                        step={1}
                        value={filters.yearFrom}
                        onChange={(e) => {
                            const v = Math.min(Number(e.target.value), filters.yearTo - 1);
                            setFilters(prev => ({...prev, yearFrom: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.yearFrom - 1980) / (2024 - 1980);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbYear('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.yearFrom - 1980) / (2024 - 1980);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbYear('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbYear(null)}
                        onTouchEnd={() => setActiveThumbYear(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{
                            top: 10,
                            zIndex: activeThumbYear === 'min' ? 3 : 1,
                            background: `linear-gradient(90deg,#e5e7eb 0%,#e5e7eb ${((filters.yearFrom - 1980)/(2024 - 1980))*100}%,#f97316 ${((filters.yearFrom - 1980)/(2024 - 1980))*100}%,#f97316 ${((filters.yearTo - 1980)/(2024 - 1980))*100}%,#e5e7eb ${((filters.yearTo - 1980)/(2024 - 1980))*100}%,#e5e7eb 100%)`,
                            pointerEvents: 'auto'
                        }}
                    />
                    <input
                        type="range"
                        min={1980}
                        max={2024}
                        step={1}
                        value={filters.yearTo}
                        onChange={(e) => {
                            const v = Math.max(Number(e.target.value), filters.yearFrom + 1);
                            setFilters(prev => ({...prev, yearTo: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.yearTo - 1980) / (2024 - 1980);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbYear('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.yearTo - 1980) / (2024 - 1980);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbYear('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbYear(null)}
                        onTouchEnd={() => setActiveThumbYear(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{top: 16, zIndex: activeThumbYear === 'max' ? 3 : 2, background: `transparent`, pointerEvents: 'auto'}}
                    />
                </div>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-300" />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black">Przebieg</h1>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Od: {filters.mileageFrom.toLocaleString()}</span>
                    <span>Do: {filters.mileageTo.toLocaleString()}</span>
                </div>
                <div className="relative h-8">
                    <input
                        type="range"
                        min={0}
                        max={300000}
                        step={100}
                        value={filters.mileageFrom}
                        onChange={(e) => {
                            const v = Math.min(Number(e.target.value), filters.mileageTo - 100);
                            setFilters(prev => ({...prev, mileageFrom: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.mileageFrom - 0) / (300000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbMileage('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.mileageFrom - 0) / (300000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbMileage('min'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbMileage(null)}
                        onTouchEnd={() => setActiveThumbMileage(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{
                            top: 10,
                            zIndex: activeThumbMileage === 'min' ? 3 : 1,
                            background: `linear-gradient(90deg,#e5e7eb 0%,#e5e7eb ${((filters.mileageFrom - 0)/(300000 - 0))*100}%,#f97316 ${((filters.mileageFrom - 0)/(300000 - 0))*100}%,#f97316 ${((filters.mileageTo - 0)/(300000 - 0))*100}%,#e5e7eb ${((filters.mileageTo - 0)/(300000 - 0))*100}%,#e5e7eb 100%)`,
                            pointerEvents: 'auto'
                        }}
                    />
                    <input
                        type="range"
                        min={0}
                        max={300000}
                        step={100}
                        value={filters.mileageTo}
                        onChange={(e) => {
                            const v = Math.max(Number(e.target.value), filters.mileageFrom + 100);
                            setFilters(prev => ({...prev, mileageTo: v}));
                        }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.mileageTo - 0) / (300000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (Math.abs(e.clientX - thumbX) <= 12) { setActiveThumbMileage('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onTouchStart={(e) => {
                            const touchX = e.touches && e.touches[0] && e.touches[0].clientX;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (filters.mileageTo - 0) / (300000 - 0);
                            const thumbX = rect.left + percent * rect.width;
                            if (touchX && Math.abs(touchX - thumbX) <= 16) { setActiveThumbMileage('max'); } else { e.preventDefault(); e.stopPropagation(); }
                        }}
                        onMouseUp={() => setActiveThumbMileage(null)}
                        onTouchEnd={() => setActiveThumbMileage(null)}
                        className="absolute left-0 w-full appearance-none h-1 rounded-3xl"
                        style={{top: 16, zIndex: activeThumbMileage === 'max' ? 3 : 2, background: `transparent`, pointerEvents: 'auto'}}
                    />
                </div>
            </div>
            <div className="w-full mt-2">
                <hr className="border-t-1 border-gray-300" />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black mb-4">Rodzaj paliwa</h1>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.fuelTypes.includes('Benzyna')} onChange={() => toggleArray('fuelTypes','Benzyna')} />
                    <span className="text-sm text-gray-600 font-bold">Benzyna</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.fuelTypes.includes('Diesel')} onChange={() => toggleArray('fuelTypes','Diesel')} />
                    <span className="text-sm text-gray-600 font-bold">Diesel</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.fuelTypes.includes('Hybryda')} onChange={() => toggleArray('fuelTypes','Hybryda')} />
                    <span className="text-sm text-gray-600 font-bold">Hybryda</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.fuelTypes.includes('Eleketryczny')} onChange={() => toggleArray('fuelTypes','Eleketryczny')} />
                    <span className="text-sm text-gray-600 font-bold">Eleketryczny</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.fuelTypes.includes('LPG')} onChange={() => toggleArray('fuelTypes','LPG')} />
                    <span className="text-sm text-gray-600 font-bold">LPG</span>
                </div>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black mb-4">Skrzynia biegów</h1>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.gearboxTypes.includes('Manualna')} onChange={() => toggleArray('gearboxTypes','Manualna')} />
                    <span className="text-sm text-gray-600 font-bold">Manualna</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.gearboxTypes.includes('Automatyczna')} onChange={() => toggleArray('gearboxTypes','Automatyczna')} />
                    <span className="text-sm text-gray-600 font-bold">Automatyczna</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.gearboxTypes.includes('Półautomatyczna')} onChange={() => toggleArray('gearboxTypes','Półautomatyczna')} />
                    <span className="text-sm text-gray-600 font-bold">Półautomatyczna</span>
                </div>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black mb-4">Typ nadwozia</h1>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('Sedan')} onChange={() => toggleArray('bodyTypes','Sedan')} />
                    <span className="text-sm text-gray-600 font-bold">Sedan</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('Kombi')} onChange={() => toggleArray('bodyTypes','Kombi')} />
                    <span className="text-sm text-gray-600 font-bold">Kombi</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('SUV')} onChange={() => toggleArray('bodyTypes','SUV')} />
                    <span className="text-sm text-gray-600 font-bold">SUV</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('Hatchback')} onChange={() => toggleArray('bodyTypes','Hatchback')} />
                    <span className="text-sm text-gray-600 font-bold">Hatchback</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('Coupe')} onChange={() => toggleArray('bodyTypes','Coupe')} />
                    <span className="text-sm text-gray-600 font-bold">Coupe</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.bodyTypes.includes('Kabriolet')} onChange={() => toggleArray('bodyTypes','Kabriolet')} />
                    <span className="text-sm text-gray-600 font-bold">Kabriolet</span>
                </div>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black mb-4">Kolor</h1>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Czarny')} onChange={() => toggleArray('colors','Czarny')} />
                    <span className="text-sm text-gray-600 font-bold">Czarny</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Biały')} onChange={() => toggleArray('colors','Biały')} />
                    <span className="text-sm text-gray-600 font-bold">Biały</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Srebrny')} onChange={() => toggleArray('colors','Srebrny')} />
                    <span className="text-sm text-gray-600 font-bold">Srebrny</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Szary')} onChange={() => toggleArray('colors','Szary')} />
                    <span className="text-sm text-gray-600 font-bold">Szary</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Niebieski')} onChange={() => toggleArray('colors','Niebieski')} />
                    <span className="text-sm text-gray-600 font-bold">Niebieski</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.colors.includes('Czerwony')} onChange={() => toggleArray('colors','Czerwony')} />
                    <span className="text-sm text-gray-600 font-bold">Czerwony</span>
                </div>
                <div className="w-full mt-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-base font-normal text-black mb-4">Wyposazenie</h1>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Klimatyzacja')} onChange={() => toggleArray('features','Klimatyzacja')} />
                    <span className="text-sm text-gray-600 font-bold">Klimatyzacja</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Nawigacja GPS')} onChange={() => toggleArray('features','Nawigacja GPS')} />
                    <span className="text-sm text-gray-600 font-bold">Nawigacja GPS</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Kamery cofania')} onChange={() => toggleArray('features','Kamery cofania')} />
                    <span className="text-sm text-gray-600 font-bold">Kamery cofania</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Czujniki parkowania')} onChange={() => toggleArray('features','Czujniki parkowania')} />
                    <span className="text-sm text-gray-600 font-bold">Czujniki parkowania</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Tempomat')} onChange={() => toggleArray('features','Tempomat')} />
                    <span className="text-sm text-gray-600 font-bold">Tempomat</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="w-4 h-4" checked={filters.features.includes('Podgrzewane fotele')} onChange={() => toggleArray('features','Podgrzewane fotele')} />
                    <span className="text-sm text-gray-600 font-bold">Podgrzewane fotele</span>
                </div>
                <div className="w-full mt-2 mb-2">
                    <hr className="border-t-1 border-gray-300" />
                </div>
                <button onClick={submitFilters} className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Zastosuj filtry</button>
            </div>
        </div>
    )
}

export default FiltersBar;