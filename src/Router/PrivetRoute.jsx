import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();
    if (user) return children;
    if (loading) return <LoadingSpinner />
    return <Navigate to="/login" state={{ from: location.pathname }} replace={true} />
};

export default PrivetRoute;