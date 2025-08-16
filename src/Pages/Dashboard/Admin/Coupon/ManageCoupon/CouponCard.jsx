import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import axios from "axios";

const CouponCard = () => {
    const { data: coupons = [] } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-coupon`);
            return data;
        }
    })
    console.log(`${import.meta.env.VITE_API_URL}/get-coupon`);
    console.log(`${import.meta.env.VITE_API_URL}`);
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                {
                    coupons && coupons?.map((coupon) => <SwiperSlide key={coupon?._id}>
                        <div className="rounded-lg bg-black/50 text-white w-full h-[40vh] lg:h-[20vh] p-4 text-center">
                            <h2 className="text-lg md:text-xl font-bold mb-2">Code: {coupon?.code}</h2>
                            <h2 className="text-lg md:text-xl font-bold mb-2">Expair Date: {coupon?.date}</h2>
                            <p className="max-w-xl text-sm"> {coupon?.description.substring(0, 45)}...</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default CouponCard;