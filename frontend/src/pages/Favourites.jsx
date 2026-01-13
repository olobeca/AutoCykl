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
import {useContext} from   "react"
import UserContext from "../context/UserContext.jsx";
import { useEffect } from 'react';
import {useState} from "react";

function Favourites() {

    const {user} = useContext(UserContext);
    const [data,setData] = useState([]);
    console.log("Favourites page - current user:", user);
    function fetchFavourites() {
        fetch(`http://localhost:5001/offers/getLikedOffersByUser/${user.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        })
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((data) => {
            console.log("Fetched favourite offers:", data);
            setData(data.likedOffers || []);
        })
        .catch((err) => console.error("Error fetching favourite offers:", err));
    }
    useEffect(() => {
        if (user && user.id) {
            fetchFavourites();
        }
    }, [user]);
    

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
                    <div className="grid grid-cols-3 gap-6 mt-8 w-full">
                        <FavouriteOfferCard props={{
                            image: fordfocus,
                            title: "Ford Focus",
                            price: "100 000 zł",
                            year: "2020",
                            mileage: "10 000 km",
                            fuelType: "Benzyna",
                            location: "Warszawa",
                            isFeatured: true
                        }} />
                        <FavouriteOfferCard props={{
                            image: hondacivic,
                            title: "Honda Civic",
                            price: "80 000 zł",
                            year: "2019",
                            mileage: "20 000 km",
                            fuelType: "Diesel",
                            location: "Kraków",
                            isFeatured: false
                        }} />
                        <FavouriteOfferCard props={{
                            image: toyotacorolla,
                            title: "Utoyota corolla",
                            price: "120 000 zł",
                            year: "2021",
                            mileage: "5 000 km",
                            fuelType: "Benzyna",
                            location: "Wrocław",
                            isFeatured: true
                        }} />
                        <FavouriteOfferCard props={{
                            image: volkswagengolf,
                            title: "Volkswagen Golf",
                            price: "90 000 zł",
                            year: "2018",
                            mileage: "30 000 km",
                            fuelType: "Diesel",
                            location: "Poznań",
                            isFeatured: false
                        }} />
                        {data.map((offer) => (<FavouriteOfferCard key={offer.id} props={{
                            image: offer.imageUrl,
                            title: offer.title,
                            price: `${offer.price} zł`,
                            year: offer.year,
                            mileage: `${offer.mileage} km`,
                            fuelType: offer.fuelType,
                            location: offer.location,
                            isFeatured: offer.isFeatured
                        }} />))}

                    </div>
                    <div className=" mt-8 bg-blue-50 border-2 border-blue-200 p-4 rounded-md flex gap-4 w-full">
                        <img src={heartBlue} alt="Heart Icon" className="h-10 w-10 p-2 bg-blue-200 rounded-full" />
                        <nav className="flex flex-col gap-2 items-left">
                            <span className="text-black">Dlaczego warto dodawać do ulubionych?</span>
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