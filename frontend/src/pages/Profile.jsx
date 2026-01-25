import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";



function Profile() {

    const {id} = useParams();
    console.log("Profile page loaded for user ID:", id);

    const [userData, setUserData] = useState(null);

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

       } catch (err) {
            console.error("Error fetching profile data:", err);
       }
    }

    useEffect(() => {
       fetchUserData(id);
    }, [id]);

    return (
        <div>
            
        </div>
    )
}


export default Profile