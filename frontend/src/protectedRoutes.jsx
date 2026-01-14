import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";

function ProtectedRoutes({children}) {
    const {user, setUser, token, setToken} = useContext(UserContext);

    // Przy montowaniu, sprawdź localStorage
    useEffect(() => {
        const savedToken = localStorage.getItem("accessToken");
        const savedUser = localStorage.getItem("user");
        
        if (savedToken && !token) {
            setToken(savedToken);
        }
        if (savedUser && !user?.id) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    // Sprawdzaj token z contextu lub localStorage
    const isAuthenticated = token || localStorage.getItem("accessToken");
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    } 

    return children
}

export default ProtectedRoutes;
