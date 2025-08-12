import FeaturedProducts from "./Discover/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import TrandingProduct from "./Discover/TrandingProduct/TrandingProduct";

const Home = () => {
    return (
        <div>
            <Slider />
            <div className="flex flex-col lg:flex-row justify-baseline items-center gap-4 py-12">
                <div className="w-full lg:w-3/5">
                    <FeaturedProducts />
                </div>
                <div className="w-full lg:w-2/5">
                    <TrandingProduct />
                </div>
            </div>
        </div>
    );
};

export default Home;