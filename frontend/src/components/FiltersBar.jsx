

function FiltersBar() {
    return (
        <div className="bg-white flex flex-col rounded-lg shadow-md  p-8 gap-3">
                        <div className="flex gap-4 justify-between p-2"> 
                            <h1 className="text-base font-normal text-black">Filtry</h1>
                            <h1 className="text-sm font-medium text-orange-600">Wyczyść filtry</h1>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black">Marka Pojazdu</h1>
                            <input type="text" placeholder="Wybierz markę" className="border border-gray-200 bg-slate-200 rounded-lg p-2 w-full" />
                        </div>
                        <div className="w-full mt-2">
                            <hr className="border-t-1 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black">Cena</h1>
                            <input id="default-range" type="range" value="50" className="w-full h-1 bg-gray-500 rounded-3xl appearance-none cursor-pointer"></input>
                        </div>
                        <div className="w-full mt-2">
                            <hr className="border-t-1 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black">Rok produkcji</h1>
                            <input id="default-range" type="range" value="50" className="w-full h-1 bg-gray-500 rounded-3xl appearance-none cursor-pointer"></input>
                        </div>
                        <div className="w-full mt-2">
                            <hr className="border-t-1 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black">Przebieg</h1>
                            <input id="default-range" type="range" value="50" className="w-full h-1 bg-gray-500 rounded-3xl appearance-none cursor-pointer"></input>
                        </div>
                        <div className="w-full mt-2">
                            <hr className="border-t-1 border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Rodzaj paliwa</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4 "/>
                                <span className="text-sm text-gray-600 font-bold">Benzyna</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Diesel</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Hybryda</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Eleketryczny</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">LPG</span>
                            </div>
                            <div className="w-full mt-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Skrzynia biegów</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Manualna</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Automatyczna</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Półautomatyczna</span>
                            </div>
                            <div className="w-full mt-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Typ nadwozia</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Sedan</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Kombi</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">SUV</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Hatchback</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Coupe</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Kabriolet</span>
                            </div>
                            <div className="w-full mt-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Kolor</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Czarny</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Biały</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Srebrny</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Szary</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Niebieski</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Czerwony</span>
                            </div>
                            <div className="w-full mt-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Stan</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Nowy</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Używany</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Uszkodzony</span>
                            </div>
                            <div className="w-full mt-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-base font-normal text-black mb-4">Wyposazenie</h1>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Klimatyzacja</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Nawigacja GPS</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Kamery cofania</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Czujniki parkowania</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Tempomat</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="w-4 h-4"/>
                                <span className="text-sm text-gray-600 font-bold">Podgrzewane fotele</span>
                            </div>
                            <div className="w-full mt-2 mb-2">
                                <hr className="border-t-1 border-gray-300" />
                            </div>
                            <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Zastosuj filtry</button>

                        </div>

                </div>
    )
}

export default FiltersBar;