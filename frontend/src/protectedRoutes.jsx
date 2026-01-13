import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./context/UserContext";

function ProtectedRoutes({children}) {
    const {user, token} = useContext(UserContext);

    if (!user?.id || !token) {
        return <Navigate to="/login" replace />;
    } 

    return children
}

export default ProtectedRoutes;
