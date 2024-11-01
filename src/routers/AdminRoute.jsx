import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className="h-[100vh] w-full flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={'/sign-in'} state={{ from: location }} replace />
};

export default AdminRoute;