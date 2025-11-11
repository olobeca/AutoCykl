
import React from 'react';
import car from '../icons/carGray.svg';
import eye from '../icons/eyeGray.svg';
import heart from '../icons/heartGray.svg';
import messages from '../icons/messagesGray.svg';
import { BarChart, Bar } from 'recharts';
import { ResponsiveContainer, XAxis, YAxis, } from 'recharts';
import { Pie, PieChart,  } from 'recharts';
import TOP from '../ui/TOP';





function SellerPannelReview({props}) {

    const data = [
        { name: 'Pon', value: props.Monday },
        { name: 'Wt', value: props.Thuesday },
        { name: 'Śr', value: props.Wednesday },
        { name: 'Czw', value: props.Thursday },
        { name: 'Pt', value: props.Friday },
        { name: 'Sob', value: props.Saturday },
        { name: 'Niedz', value: props.Sunday },
    ];

    const data2 = [
        {name: 'Standardowe', value: 10},
        {name: 'Wyróżnione', value: 7},
        {name: 'Top', value: 3},
    ]
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
                <div className="flex flex-col gap-0 w-2/3 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <span className="text-black text-lg">Wyświetlenia w tym tygodniu</span>
                    <span className="text-gray-600 text-lg pb-8">Dzienna liczba wyświetleń Twoich ogłoszeń</span>
                        <BarChart width={700} height={260} data={data}>
                            <Bar dataKey="value" fill="#ea580c" />
                            <XAxis dataKey="name" tick={{ fill: '#4b5563' }} />
                            <YAxis tick={{ fill: '#4b5563' }} />
                        </BarChart>
                </div>
                <div className="flex flex-col gap-0 w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <span className="text-black text-lg">Rozkład pakietów</span>
                    <span className="text-gray-600 text-lg pb-8">Podział według typu wyróżnienia</span>
                    <ResponsiveContainer width="100%" height={230}>
                        <PieChart>
                            <Pie
                            data={data2}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#ea580c"
                            label
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex  gap-4 mt-6">
                        {data2.map((item, index) => (
                            <span key={index} className="text-sm text-orange-600">{item.name}: {item.value}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <span className="text-black text-lg font-medium">Najlepsze ogłoszenia</span>
                    <span className="text-gray-600 text-lg pb-8">Ogłoszenia z największą liczbą wyświetleń</span>
                        {props.CarsData.map((car, index) => (
                            <div className="mb-1" key={index}>
                            <div className="rounded-md border border-gray-200 hover:bg-gray-100 flex gap-4 p-3" key={index}>
                                <div className="h-full w-24 overflow-hidden rounded-xl">
                                    <img src={car.image} className="object-cover rounded-xl"></img>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-4">
                                            <span className="text-lg font-normal text-black">{car.name}</span>
                                            <TOP />
                                        </div>
                                        <div className="items-center">
                                            <span className="text-sm text-gray-600">{car.prize} zł</span>
                                            <span className="text-sm text-gray-600 ml-4"></span>
                                            <span className="text-sm text-gray-600">{car.year}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex gap-0 items-center">
                                            <img src={eye} alt="eye icon" className="h-4 w-4"/>
                                            <span className="text-sm text-gray-600 ml-1">{car.views}</span>
                                        </div>

                                        <div className="flex gap-0 items-center">
                                            <img src={heart} alt="heart icon" className="h-4 w-4"/>
                                            <span className="text-sm text-gray-600 ml-1">{car.likes}</span>
                                        </div>

                                        <div className="flex gap-0 items-center">
                                            <img src={messages} alt="messages icon" className="h-4 w-4"/>
                                            <span className="text-sm text-gray-600 ml-1">{car.messages}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            </div>
                        ))}

                    </div>
        </div>
    )
}

export default SellerPannelReview; 