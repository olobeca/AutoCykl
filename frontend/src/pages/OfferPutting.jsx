import "../App.css";
import Header from "../components/Header.jsx";
import PuttingOfferInfoBar from "../components/PuttingOfferInfoBar.jsx";
import locationIcon from "../icons/location.svg";
import React from "react";
import { useState } from "react"




function OfferPutting() {
    const [step, setStep] = useState(1);
    
    function handleNext() {
        setStep(step + 1);
    }
  return (
    <div >
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
                    <button className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-400 rounded-full p-2"/>
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
                <hr className="border-t-8 border-gray-600 w-1/5 rounded-sm"/>
                <hr className="border-t-8 border-gray-300 w-4/5 rounded-sm"/>
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
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 150"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Pojemność (cm3) *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. 2000"/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <span className="font-semibold text-black text-sm">Kolor *</span>
                        <input type="text" className="border text-sm border-gray-200 bg-gray-100 rounded-md p-2" placeholder="np. Czarny"/>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <hr className="border-t-1 border-gray-200" />
                </div>
                <div className="flex justify-between mt-8">
                    <button className="bg-white border text-sm border-gray-200 rounded-lg text-gray-700 px-3 py-2"> {'< Wstecz'}</button>
                    <button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700 border text-sm border-gray-200 rounded-lg text-white px-4 py-2"> {'Dalej >'}</button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-3 pb-8  flex  gap-6 shadow-sm">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12 bg-blue-400 rounded-full p-2"/>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-black">Informacja o publikacji</span>
                    <span className="text-sm text-gray-700">Ogłoszenie pojawi się na stronie po weryfikacji przez nasz zespół (zazwyczaj do 24h). Otrzymasz powiadomienie email po publikacji.</span>
                </div>
            </div>
      </div>}
    </div>
  );
}

export default OfferPutting;







