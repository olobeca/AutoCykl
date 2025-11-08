
import React from 'react';
import car from '../icons/carGray.svg';
import eye from '../icons/eyeGray.svg';
import heart from '../icons/heartGray.svg';
import messages from '../icons/messagesGray.svg';
import { BarChart, Bar } from 'recharts';




function SellerPannelReview({props}) {

    const data = [
        { name: 'A', value: 12 },
        { name: 'B', value: 19 },
        { name: 'C', value: 8 },
    ];
    return (
        <div className="flex flex-col mt-8 gap-4">
            <div className="grid grid-cols-4 gap-4">
                <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-gray-600">Aktywne ogłoszenia</span>
                        <img src={car} alt="car icon" className="h-5 w-5"/>
                    </div>
                    <span className="text-base text-black">{props.activeOffers}</span>
                    <span className="text-sm text-gray-600">z {props.totalOffers} ogłoszeń</span>
                </div>
                <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-gray-600">Wyświetlenia</span>
                        <img src={eye} alt="eye icon" className="h-5 w-5"/>
                    </div>
                    <span className="text-base text-black">{props.views}</span>
                    <span className="text-sm text-green-600">+{props.viewPercentChange}% w tym tygodniu</span>
                </div>
                <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-gray-600">Polubienia</span>
                        <img src={heart} alt="heart icon" className="h-5 w-5"/>
                    </div>
                    <span className="text-base text-black">{props.likes}</span>
                    <span className="text-sm text-green-600">+{props.likesPercentChange}% w tym tygodniu</span>
                </div>
                <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between mb-8">
                        <span className="text-sm text-gray-600">Wiadomości</span>
                        <img src={messages} alt="messages icon" className="h-5 w-5"/>
                    </div>
                    <span className="text-base text-black">{props.messages}</span>
                    <span className="text-sm text-red-600">{props.unreadMessages} nieprzeczytanych</span>
                </div>
            </div> 
            <div className="flex w-full gap-4">
                <div className="flex flex-col gap-2 w-2/3 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <span className="text-black text-lg">Wyświetlenia w tym tygodniu</span>
                    <span className="text-gray-600 text-lg">Dzienna liczba wyświetleń Twoich ogłoszeń</span>
                </div>
                <div className="flex flex-col gap-2 w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200">

                </div>
            </div>
        </div>
    )
}

export default SellerPannelReview; 