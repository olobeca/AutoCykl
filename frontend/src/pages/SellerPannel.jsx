import React from 'react';
import Header from '../components/Header';
import {useState} from 'react';
import SellerPannelReview from '../components/SellerPannelReview';

function SellerPannel() {

    const [step, setStep] = useState('Przegląd');

    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div>
                <div className="sticky top-0 bg-white flex py-8 px-24 justify-between border items-center">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-black font-semibold text-xl">Panel sprzedawcy</span>
                            <span className="text-gray-600 text-base">Zarządzaj swoimi ogłoszeniami i monitoruj statystyki</span>
                        </div>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-3 h-9 rounded-md">+ Dodaj ogłoszenie</button>
                    </div>
                </div>
                <div className="flex flex-col py-8 px-24">
                   <div className="rounded-full bg-gray-300 flex gap-0 items-left w-1/3">
                     <button className={`rounded-full p-1 text-sm w-1/3 ${step === 'Przegląd' ? 'bg-white text-gray-800' : 'bg-gray-300 text-gray-800'}`} onClick={() => setStep('Przegląd')}>Przegląd</button>
                     <button className={`rounded-full p-1 text-sm w-1/3 ${step === 'Moje ogłoszenia' ? 'bg-white text-gray-800' : 'bg-gray-300 text-gray-800'}`} onClick={() => setStep('Moje ogłoszenia')}>Moje ogłoszenia</button>
                     <button className={`rounded-full p-1 text-sm w-1/3 ${step === 'Wiadomości' ? 'bg-white text-gray-800' : 'bg-gray-300 text-gray-800'}`} onClick={() => setStep('Wiadomości')}>Wiadomości</button>
                   </div>
                   {
                    step === 'Przegląd' && (
                        <SellerPannelReview />
                   )}
                </div>

            </div>
        </div>
    );
}
export default SellerPannel;