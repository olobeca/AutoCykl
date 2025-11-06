import React from 'react';
import Header from '../components/Header';
import heart from '../icons/heartRed.svg';
import trash from '../icons/trashRed.svg';
import filters from '../icons/filters.svg';
import arrows from '../icons/arrows.svg';
import heartBlue from '../icons/heartBlue.svg';
import FavouriteOfferCard from '../components/FavouriteOfferCard';
import fordfocus from '../fordfocus.jpg';
import hondacivic from '../hondacivic.jpg';
import toyotacorolla from '../toyotacorolla.jpg';
import volkswagengolf from '../wolkswagengolf.jpg';

function SellerPannel() {
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
                <div className="flex flex-col py-8 px-24 justify-between items-center">
                   <div >

                   </div>
                </div>

            </div>
        </div>
    );
}
export default SellerPannel;