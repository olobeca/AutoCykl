import "../App.css";
import Header from "../components/Header.jsx";
import PuttingOfferInfoBar from "../components/PuttingOfferInfoBar.jsx";
import locationIcon from "../icons/location.svg";
import React from "react";
import uploadIcon from "../icons/upload.svg";
import star from "../icons/star.svg";
import thunder from "../icons/thunder.svg";
import trending from "../icons/trending.svg";
import accept from "../icons/acceptGreen.svg";
import {useState , useEffect} from "react";

function OfferPutting() {
    const [step, setStep] = useState(1);

    const [machineOpen, setMachineOpen] = useState(false);
    const [machineType, setMachineType] = useState("");
    
    function handleNext() {
        setStep(step + 1);
    }

    function handleBack() {
        setStep(step - 1);
    }

    const [description, setDescription] = useState("");

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    const [isHighlighted, setIsHighlighted] = useState(false);

    const [selectedPackage, setSelectedPackage] = useState('standard');

    useEffect(() => {
        if (isHighlighted) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isHighlighted]); {/* poczytać o tym i czx działa */}


    const [offer,setOffer] = useState({
        brand : "",
        model:"",
        year:"",
    })

  return (
    <div>
    <div className={`${isHighlighted ? 'brightness-50' : ''}`}>
      <Header />
      { step===1 && <div className="bg-gray-50 flex flex-col  px-64 gap-2 py-9 h-full">
            <h1 className="text-2xl text-black">Dodaj ogłoszenie</h1>
            <h2 className="text-base text-gray-700 mb-6">Wypełnij formularz, aby dodać nowe ogłoszenie</h2>
            <PuttingOfferInfoBar number={1} />
            <div className="w-full flex gap-0 mt-2">
                <hr className="border-t-8 border-gray-600 w-1/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-4/5 rounded-sm"/>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6  flex flex-col shadow-sm">
                <span className="text-lg text-black font-semibold">Podstawowe informacje</span>
                <span className="text-base text-gray-600 font-light mb-2">Krok 1 z 5</span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Marka *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Wybierz markę"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Model *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. A4"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Rok produkcji *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 2020"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Cena (PLN) *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 50000"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Przebieg (km) *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 50000"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Lokalizacja *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. Warszawa"/>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-300 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
      { step===2 && <div className="bg-gray-50 flex flex-col  px-64 gap-2 py-9 h-full">
            <h1 className="text-2xl text-black">Dodaj ogłoszenie</h1>
            <h2 className="text-base text-gray-700 mb-6">Wypełnij formularz, aby dodać nowe ogłoszenie</h2>
            <PuttingOfferInfoBar number={2} />
            <div className="w-full flex gap-0 mt-2">
                <hr className="border-t-8 border-gray-600 w-2/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-3/5 rounded-sm"/>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6  flex flex-col shadow-sm">
                <span className="text-lg text-black font-semibold">Szczegóły techniczne</span>
                <span className="text-base text-gray-600 font-light mb-2">Krok 2 z 5</span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Typ nadwozia *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Wybierz typ"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Rodzaj paliwa *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Wybierz paliwo"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Skrzynia biegów *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Wybierz skrzynię"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Moc (KM) *</span>
                        <input type="number" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 150"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Pojemność (cm3) *</span>
                        <input type="number" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 2000"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Kolor *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. Czarny"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Gwarancja *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 12 miesięcy"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Wersja *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. e5"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Liczba drzwi *</span>
                        <input type="number" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 4"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Kolor wnętrza *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. Czarny"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">VIN *</span>
                        <input type="text" name="vin" placeholder="np. VF1AB123456789012" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Liczba miejsc *</span>
                        <input type="number" name="seats" min={1} max={9} className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 5"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Moment (Nm)</span>
                        <input type="number" name="torque" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 320"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Wyposażenie</span>
                        <input type="text" name="equipment" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Wprowadź listę oddzieloną przecinkami"/>
                    </div>
                    <div className="flex flex-col gap-0 relative">
                        <span className="font-semibold text-black text-sm">Rodzaj maszyny</span>
                        <button type="button" onClick={() => setMachineOpen(v => !v)} aria-expanded={machineOpen} className="w-full text-left border text-sm border-gray-200 bg-gray-100 py-2 rounded-md p-2 flex justify-between items-center">
                            <span className={`text-sm ${machineType ? 'text-black' : 'text-gray-400'}`}>{machineType || 'Wybierz rodzaj'}</span> 
                            <span className={`text-xs transform transition-transform ${machineOpen ? 'rotate-180' : ''}`}>▾</span>
                        </button>
                        {machineOpen && (
                            <ul className="absolute z-20 left-0 right-0 mt-1 bg-white border rounded-md shadow-sm">
                            {['Samochody osobowe','Samochody dostawcze','Motocykle','Maszyny rolnicze'].map(opt => (
                                <li key={opt}>
                                <button
                                    type="button"
                                    onClick={() => { setMachineType(opt); setMachineOpen(false); }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
                                >
                                    {opt}
                                </button>
                                </li>
                            ))}
                            </ul>
                    )}
                    <input type="hidden" name="machineType" value={machineType} />
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="noAccident" name="noAccident" />
                        <label htmlFor="noAccident" className="text-base text-black">Bez wypadku</label>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-300 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
      { step===3 && <div className="bg-gray-50 flex flex-col  px-64 gap-2 py-9 h-full">
            <h1 className="text-2xl text-black">Dodaj ogłoszenie</h1>
            <h2 className="text-base text-gray-700 mb-6">Wypełnij formularz, aby dodać nowe ogłoszenie</h2>
            <PuttingOfferInfoBar number={3} />
            <div className="w-full flex gap-0 mt-2">
                <hr className="border-t-8 border-gray-600 w-3/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-2/5 rounded-sm"/>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6  flex flex-col shadow-sm">
                <span className="text-lg text-black font-semibold">Zdjęcia</span>
                <span className="text-base text-gray-600 font-light mb-6">Krok 3 z 5</span>
                <div className="flex flex-col mt-4">
                    <span className="text-sm text-semibold text-black">Zdjęcia pojazdu</span>
                    <span className="text-sm text-gray-600 font-light mb-6">Dodaj do 10 zdjęć (pierwsze zdjęcie będzie zdjęciem głównym)</span>
                </div>
                <label className="border-2 w-1/4 border-dashed border-gray-200 rounded-lg p-6 flex flex-col gap-3 items-center justify-center gap-4 cursor-pointer hover:border-orange-400">
                    <img src={uploadIcon} alt="Upload Icon" className="w-16 h-16 rounded-full p-2"/>
                    <span className="text-gray-500">Dodaj zdjęcie</span>
                    <input type="file" className="hidden" />
                </label>
                <span className="text-sm text-gray-600 font-light mb-6">Dodano 0 z 10 zdjęć</span>
                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-300 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
      { step===4 && <div className="bg-gray-50 flex flex-col  px-64 gap-2 py-9 h-full">
            <h1 className="text-2xl text-black">Dodaj ogłoszenie</h1>
            <h2 className="text-base text-gray-700 mb-6">Wypełnij formularz, aby dodać nowe ogłoszenie</h2>
            <PuttingOfferInfoBar number={4} />
            <div className="w-full flex gap-0 mt-2">
                <hr className="border-t-8 border-gray-600 w-3/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-2/5 rounded-sm"/>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6  flex flex-col shadow-sm">
                <span className="text-lg text-black font-semibold">Opis</span>
                <span className="text-base text-gray-600 font-light mb-6">Krok 4 z 5</span>
                <div className="flex flex-col gap-0 mb-4">
                        <span className="font-semibold text-black text-sm">Opis ogłoszenia *</span>
                        <textarea type="text" value={description} onChange={handleDescriptionChange} className="border mb-2 text-sm w-full h-48 border-gray-200 bg-gray-100 rounded-md p-2" placeholder="Opisz stan pojazdu, wyposażenie, itp."/>
                        <span className="text-sm text-gray-500">Minimum 50 znaków (obecnie: {description.length})</span>
                </div>
                <div className="w-full mt-3 bg-blue-50 border-2 border-blue-200 p-4 rounded-md">
                    <nav className="flex flex-col gap-2 items-left">
                        <span>💡 Wskazówki</span>
                        <ul className="list-disc list-inside px-4">
                            <li className="text-sm text-gray-600">Bądź szczegółowy i dokładny</li>
                            <li className="text-sm text-gray-600">Unikaj ogólników</li>
                            <li className="text-sm text-gray-600">Podaj wszystkie istotne informacje</li>
                            <li className="text-sm text-gray-600">Dodaj informacje o powodzie sprzedaży</li>
                            <li className="text-sm text-gray-600">Sprawdź pisownię i gramatykę</li>
                        </ul>
                    </nav>
                </div>
                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-300 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
      { step===5 && <div className="bg-gray-50 flex flex-col  px-64 gap-2 py-9 h-full">
            <h1 className="text-2xl text-black">Dodaj ogłoszenie</h1>
            <h2 className="text-base text-gray-700 mb-6">Wypełnij formularz, aby dodać nowe ogłoszenie</h2>
            <PuttingOfferInfoBar number={5} />
            <div className="w-full flex gap-0 mt-2">
                <hr className="border-t-8 border-gray-600 w-3/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-2/5 rounded-sm"/>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6  flex flex-col shadow-sm">
                <span className="text-lg text-black font-semibold">Podsumowanie</span>
                <span className="text-base text-gray-600 font-light mb-6">Krok 5 z 5</span>
                <div className="w-full mt-2 rounded-md bg-gray-100 flex flex-col gap-4 p-4">
                    <span className="text-lg font-semibold text-black mb-2">Podsumowanie ogłoszenia</span>
                    <div className="flex  justify-between">
                        <span className="text-base text-gray-700">Pojazd:</span>
                        <span className="text-base text-black font-medium">Toyota 222 (2000)</span>
                    </div>    
                    <div className="flex  justify-between">
                        <span className="text-base text-gray-700">Cena:</span>
                        <span className="text-base text-black font-medium">22 222 zł</span>
                    </div> 
                    <div className="flex  justify-between">
                        <span className="text-base text-gray-700">Przebieg:</span>
                        <span className="text-base text-black font-medium">2222 km</span>
                    </div> 
                    <div className="flex  justify-between">
                        <span className="text-base text-gray-700">Lokalizacja:</span>
                        <span className="text-base text-black font-medium">Warszawa</span>
                    </div> 
                    <div className="flex  justify-between">
                        <span className="text-base text-gray-700">Zdjęcia:</span>
                        <span className="text-base text-black font-medium">1 szt.</span>
                    </div> 
                </div>


                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={() => setIsHighlighted(true)} className="bg-green-600 hover:bg-green-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2">Opublikuj ogłoszenie</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-300 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
    </div>
    <div className={`${isHighlighted ? '' : 'hidden'}   bg-white top-2 left-[30%] w-[45%]  rounded-lg fixed flex flex-col text-left justify-center p-4 gap-4`}>
        <span className="text-black font-semibold">Wyróżnij swoje ogłoszenie</span>
        <span className="text-sm text-gray-700 mb-6">Zwiększ widoczność swojego ogłoszenia i sprzedaj szybciej</span> 
        <span className="text-black">Wybierz pakiet</span>
        <div className="flex gap-3 w-full justify-between">
            <div className={`border-2  w-1/3 ${selectedPackage==='standard' ? 'border-orange-400' : 'border-gray-200'} rounded-md p-4 flex flex-col gap-2 cursor-pointer`} onClick={() => setSelectedPackage('standard')}>
                <button className="hidden"></button>
                <img src={star} alt='gwiazdka' className="w-12 h-12 bg-sky-200 rounded-full p-2"></img>
                <span className="text-base text-black">Standardowe</span>
                <span className="text-base text-black">Bezpłatne</span> 
                <div className=" flex flex-col mt-2 gap-2">
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Ogłoszenie na 30 dni</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Standardowe wyświetlanie</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Podstawowa widoczność</span>
                    </div>
                </div>
            </div>
            <div className={`border-2 ${selectedPackage==='highlighted' ? 'border-orange-400' : 'border-gray-200'} rounded-lg p-4 flex flex-col gap-2 cursor-pointer w-1/3`} onClick={() => setSelectedPackage('highlighted')}>
                <button className="hidden"></button>
                <img src={thunder} alt='thunder' className="w-12 h-12 bg-orange-200 rounded-full p-2"></img>
                <span className="text-base text-black">Wyróżnione</span>
                <div className="flex gap-1 items-center">
                    <span className="text-base text-black">49 PLN</span>
                    <span className="text-sm text-gray-700">/ 30 dni</span>
                </div>
                <div className=" flex flex-col mt-2 gap-2">
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Ogłoszenie na 30 dni</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Wyróżniona ramka w wynikach</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Etykieta 'Wyróznione'</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">3x więcej wyświetleń</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Wyzsza pozycja w wynikach</span>
                    </div>
                </div>
            </div>
            <div className={`border-2 w-1/3 ${selectedPackage==='top' ? 'border-orange-400' : 'border-gray-200'} rounded-lg p-4 flex flex-col gap-2 cursor-pointer`} onClick={() => setSelectedPackage('top')}>
                <button className="hidden"></button>
                <img src={trending} alt='trending' className="w-12 h-12 bg-yellow-200 rounded-full p-2"></img>
                <span className="text-base text-black">TOP oferta</span>
                <div className="flex gap-1 items-center">
                    <span className="text-base text-black">99 PLN</span>
                    <span className="text-sm text-gray-700">/ 30 dni</span>
                </div>
                <div className=" flex flex-col mt-2 gap-2">
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Ogłoszenie na 30 dni</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Złota ramka premium</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Etykieta 'TOP oferta'</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">10x więcej wyświetleń</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Najwyższa pozycja w wynikach</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Widoczność na stronie głównej</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={accept} alt='accept' className="w-4 h-4"></img>
                        <span className="text-sm text-gray-700">Push w social mediach</span>
                    </div>
                </div>
            </div> 
            
        </div>
        <div className="w-full flex justify-between gap-2">
               <button className="border w-1/2 border-gray-200 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 mr-2" onClick={() => setIsHighlighted(false)}>
                Anuluj
               </button>
               <button className="border w-1/2 bg-green-600 hover:bg-green-700 text-white border-gray-200 rounded-lg px-4 py-2 text-sm " onClick={() => setIsHighlighted(false)}>
                Opublikuj Ogłoszenie
               </button>
        </div>
    </div>
    </div>
  );
}

export default OfferPutting;
