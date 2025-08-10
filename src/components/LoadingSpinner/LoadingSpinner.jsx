import { PropagateLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen">
            <PropagateLoader
                size={10}
                color="#3197f6"
                speedMultiplier={1.5}
            />
        </div>
    );
};

export default LoadingSpinner;