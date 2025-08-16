import FeaturedProducts from "../Discover/FeaturedProducts/FeaturedProducts";
import Slider from "../../../components/Slider/Slider";
import TrandingProduct from "../Discover/TrandingProduct/TrandingProduct";
import { Link } from "react-router-dom";
import CouponCard from "../../Dashboard/Admin/Coupon/ManageCoupon/CouponCard";
import Sponsor from "../Sponsor/Sponsor";
import Contact from "../Contact/Contact";

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
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-3/5">
                    <Link to="/products">
                        <div className="flex justify-center pb-10">
                            <button className="btn bg-indigo-500 text-white rounded-3xl border-none">Show All Product</button>
                        </div>
                    </Link>
                </div>
                <div className="w-full lg:w-2/5 lg:-mt-10 ">
                    <CouponCard />
                </div>
            </div>
            <div className="mt-8">
                <Sponsor />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;