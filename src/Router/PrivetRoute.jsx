import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { loading, user } = useAuth();
    if (user) return children;
    if (loading) return <LoadingSpinner />
    return (
        <div>

        </div>
    );
};

export default PrivetRoute;