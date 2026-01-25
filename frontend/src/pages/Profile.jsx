import { useEffect } from "react";
import {useParams} from "react-router-dom";



function Profile() {

    const {id} = useParams();
    console.log("Profile page loaded for user ID:", id);

    async function fetchUserData(userId) {
        if(!userId) {
            console.error("No user ID provided to fetch profile data");
       }
       try {
        

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