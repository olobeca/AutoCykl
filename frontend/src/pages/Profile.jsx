import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from '../components/Header';
import user from '../icons/user.svg';
import userPlus from '../icons/user-plus.svg';
import location from '../icons/location.svg';
import calendar from '../icons/calendar.svg';
import star from '../icons/star.svg';
import OfferCard from "../components/OfferCard.jsx";
import toyotacorolla from '../toyotacorolla.jpg';
import hondacivic from '../hondacivic.jpg';
import fordfocus from '../fordfocus.jpg';
import SkeletonOfferCard from "../components/SkeletonOfferCard.jsx";

function Profile() {

    const {id} = useParams();
    console.log("Profile page loaded for user ID:", id);

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [userData, setUserData] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);

    async function fetchUserData(userId) {
        if(!userId) {
            console.error("No user ID provided to fetch profile data");
       }
       try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${userId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched profile data:", data.userProfile);
            setUserData(data.userProfile);
            setIsDataLoaded(true);

       } catch (err) {
            console.error("Error fetching profile data:", err);
       }
    }

    useEffect(() => {
       fetchUserData(id);
    }, [id]);


    async function handleFollow() {
        console.log("Follow button clicked for user ID:", id);
        setIsFollowing(!isFollowing);
    }

    return (
         <div className="h-full bg-gray-100">
            <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
            <Header /> 
            <div className="flex flex-col items-center">
                <div className="shadow-md bg-white flex flex-col p-8 gap-8 w-full items-center  justify-center">
                    <div className="rounded-full overflow-hidden w-28 h-28 bg-gray-200 shadow-sm">
                        {userData ? (
                            <img 
                                src={userData.profilePictureUrl && userData.profilePictureUrl !== "" ? userData.profilePictureUrl : user} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Skeleton circle height={112} width={112} />
                        )}
                    </div>
                    <h1 className="text-md text-black">{userData?.name || <Skeleton width={140} />}</h1>
                    <p className="text-sm text-gray-600 text-center max-w-md">{userData?.description || <Skeleton count={3} width={480} containerClassName="flex flex-col gap-0 items-center" /> }</p>
                    <button className= {`px-4 py-2  text-white text-sm font-medium rounded-md flex justify-center gap-2 ${isFollowing ? "bg-gray-400 hover:bg-gray-500 " : "bg-orange-600  hover:bg-orange-700"}`} onClick={handleFollow}>
                        <img src={userPlus} alt="Follow Icon" className="h-5 w-5"/>
                        <h1 className="">{isFollowing ? "Obserwujesz" : "Obserwuj"}</h1>
                    </button>
                    <div className="flex gap-6">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-black text-sm font-semibold">{userData?.location ||<Skeleton width={140} />}</h1>
                            <img src={location} alt="Location Icon" className="h-5 w-5"></img>
                        </div>
                        <div className="flex gap-3 items-center">
                            <h1 className="text-black text-sm font-semibold">{new Date(userData?.createdAt).getFullYear() || <Skeleton width={40} />}</h1>
                            <img src={calendar} alt="Calendar Icon" className="h-5 w-5"></img>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-900">{userData?.offers.length || <Skeleton width={40} />}</h1>
                            <h1 className="text-sm text-gray-600">Ogłoszenia</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-gray-900">{userData?.followers.length || <Skeleton width={40} />}</h1>
                            <h1 className="text-sm text-gray-600">Obserwujący</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex gap-1">
                                <img src={star} alt="Star Icon" className="h-5 w-5"></img>
                                {/* <h1 className="text-gray-900">{userData ? (userData?.raterRatings.length ? (userData?.raterRatings.reduce((acc, rating) => acc + rating.rating, 0) / userData?.raterRatings.length).toFixed(1) : "0.0") : <Skeleton width={40} />}</h1> */}
                                <h1 className="text-gray-900">
                                    {userData
                                        ? (userData.userRatings?.length
                                            ? (userData.userRatings.reduce((acc, rating) => acc + rating.rating, 0) / userData.userRatings.length).toFixed(1)
                                            : "0.0")
                                        : <Skeleton width={40} />}
                                </h1>
                            </div>
                            <h1 className="text-sm text-gray-600">Ocena</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col p-8 gap-8 w-full mt-2 ">
                    <h1 className="text-left text-md font-bold text-black">Aktualne Ogłoszenia</h1>
                    <div className="grid grid-cols-3 gap-4  w-full mt-4">
                    {/* <OfferCard props={{image: toyotacorolla, title: "Toyota Corolla", price: "85 000 PLN", year: "2018", mileage: "50 000 km", fuelType: "Benzyna", location: "Warszawa", isFeatured: true, id: 1}} />
                    <OfferCard props={{image: hondacivic, title: "Honda Civic", price: "90 000 PLN", year: "2019", mileage: "40 000 km", fuelType: "Diesel", location: "Kraków", isFeatured: true, id: 2}} />
                    <OfferCard props={{image: fordfocus, title: "Ford Focus", price: "75 000 PLN", year: "2017", mileage: "60 000 km", fuelType: "Benzyna", location: "Gdańsk", isFeatured: true, id: 3}} /> */}
                    {!isDataLoaded ? 
                    <>
                        <SkeletonOfferCard /> 
                        <SkeletonOfferCard />
                        <SkeletonOfferCard /> 
                    </>
                    :
                    null
                    }
                    {userData?.offers.map((offer) => (<OfferCard key={offer.id} props={{
                            image: toyotacorolla,
                            title: offer.brand + " " + offer.model,
                            price: `${offer.price} zł`,
                            year: offer.year,
                            mileage: `${offer.mileage} km`,
                            fuelType: offer.fuelType,
                            location: offer.location,
                            isFeatured: offer.isFeatured,
                            id: offer.id,
                        }} />))}
                </div>
                </div>
            </div>
            </SkeletonTheme>
        </div>
    )
}


export default Profile