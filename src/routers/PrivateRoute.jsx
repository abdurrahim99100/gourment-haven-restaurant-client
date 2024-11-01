import { useContext } from "react";
import { authContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation()

    if (loading) {
        return <div className="h-[100vh] w-full flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/sign-in'} state={{ from: location }} replace />
};

export default PrivateRoute;