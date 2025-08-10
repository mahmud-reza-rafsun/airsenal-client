
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/slider/slider-1.jpg';
import slider2 from '../../assets/slider/slider-2.jpg';
import slider3 from '../../assets/slider/slider-3.jpg';



const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full h-[80vh]">
                        <img src={slider1} alt="Slider 1" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 flex flex-col justify-center items-start px-6 md:px-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Empowering Innovation with AI</h2>
                            <p className="text-base max-w-xl">
                                Artificial Intelligence is revolutionizing the way we interact with technology. From smart assistants to automation, AI is the core of modern innovation.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-[80vh]">
                        <img src={slider2} alt="Slider 2" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 flex flex-col justify-center items-start px-6 md:px-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Smarter Insights. Faster Results.</h2>
                            <p className="text-base max-w-xl">
                                Harness the power of machine learning to uncover hidden patterns and make data-driven decisions at scale with greater speed and accuracy.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-[80vh]">
                        <img src={slider3} alt="Slider 3" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 flex flex-col justify-center items-start px-6 md:px-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">AI-Powered Solutions for Real Life</h2>
                            <p className="text-base max-w-xl">
                                From automating daily tasks to transforming industries, AI solutions are making everyday life smarter, easier, and more efficient than ever.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;