import { HashLoader } from "react-spinners";

const SliderLoading = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-[70vh]">
            <HashLoader
                color="#4575e1"
                cssOverride={{}}
                loading
                speedMultiplier={1}
            />
        </div>
    );
};

export default SliderLoading;