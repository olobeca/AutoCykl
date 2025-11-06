import React from 'react';
import Header from '../components/Header';
import heart from '../icons/heartRed.svg';
import trash from '../icons/trashRed.svg';
import filters from '../icons/filters.svg';
import arrows from '../icons/arrows.svg';
import heartBlue from '../icons/heartBlue.svg';

function Favourites() {
    return (
        <div className="h-full bg-gray-100">
            <Header />
            <div>
                <div className="sticky top-0 bg-white flex py-8 px-24 justify-between border items-center">
                    <div className="flex gap-4">
                        <img src={heart} alt="ulubione" className="p-3 h-16 w-16 bg-orange-200 rounded-full"></img>
                        <div className="flex flex-col justify-center">
                            <span className="text-black font-semibold text-xl">Ulubione ogłoszenia</span>
                            <span className="text-gray-600 text-base">6 ogłoszeń</span>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="bg-white hover:bg-gray-200 text-red-600 pl-8 rounded-lg border border-gray-200 text-sm p-2 px-3 w-full">Usuń wszystkie</button>
                        <img className="absolute h-5 w-5 top-2 left-2" src={trash} alt="Trash Icon" />
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col py-8 px-24 justify-between border items-center">
                    <div className="w-full p-3 bg-white rounded-lg shadow-md flex justify-between">
                        <div className="flex gap-3 items-center">
                            <img src={filters} alt="Filters Icon" className="h-5 w-5" />
                            <span className="text-sm text-gray-600">Sortuj i filtruj wyniki</span>
                        </div>
                        <div className="relative items-center">
                            <input type="text" placeholder="Szukaj..." className="border pl-8 border-gray-300 bg-gray-200 text-sm rounded-md py-2 px-4 w-full" />
                            <img src={arrows} alt="Arrows Icon" className="absolute h-5 w-5 top-3 left-1" />
                        </div>
                    </div>
                    <div className=" mt-8 bg-blue-50 border-2 border-blue-200 p-4 rounded-md flex gap-4 w-full">
                        <img src={heartBlue} alt="Heart Icon" className="h-10 w-10 p-2 bg-blue-200 rounded-full" />
                        <nav className="flex flex-col gap-2 items-left">
                            <span>Dlaczego warto dodawać do ulubionych?</span>
                            <ul className="list-disc list-inside px-4">
                                <li className="text-sm text-gray-600">Szybki dostęp do interesujących Cię ogłoszeń</li>
                                <li className="text-sm text-gray-600">Możliwość porównania różnych ofert</li>
                                <li className="text-sm text-gray-600">Powiadomienia o zmianach ceny (wkrótce)</li>
                                <li className="text-sm text-gray-600">Synchronizacja między urządzeniami</li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Favourites;