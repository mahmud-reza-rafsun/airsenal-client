import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaCartArrowDown } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";
import SliderLoading from '../../../../components/SliderLoading/SliderLoading';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const Statistics = () => {
    const axiosSecure = useAxiosSecure();
    const { data: statistics = [], isLoading } = useQuery({
        queryKey: ['statistics'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/statistics`);
            return data;
        }
    });

    const { product, totalReview, totalUsers, acceptedProduct, rejectedProduct } = statistics || {};
    if (isLoading) return <SliderLoading />

    const chartData = [
        { name: "Product", uv: Number(product), pv: Number(product), amt: Number(product) },
        { name: "Users", uv: Number(totalUsers), pv: Number(totalUsers), amt: Number(totalUsers) },
        { name: "Review", uv: Number(totalReview), pv: Number(totalReview), amt: Number(totalReview) },
        { name: "Accepted", uv: Number(acceptedProduct), pv: Number(acceptedProduct), amt: Number(acceptedProduct) },
        { name: "Rejected", uv: Number(rejectedProduct), pv: Number(rejectedProduct), amt: Number(rejectedProduct) },
    ];

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];

    return (
        <div className="w-full py-4 px-6 text-gray-800 rounded-xl bg-gray-100/30">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="flex gap-7 items-center justify-center p-2 bg-blue-300 text-white rounded-md text-center font-semibold">
                    <span className='text-2xl lg:text-4xl'>
                        <FaCartArrowDown />
                    </span>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{product || 0}</h3>
                        <p className='text-sm'>Product</p>
                    </div>
                </div>
                <div className="flex gap-7 items-center justify-center p-2 bg-yellow-500 text-white rounded-md text-center font-semibold">
                    <span className='text-2xl lg:text-4xl'>
                        <MdReviews />
                    </span>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{totalReview || 0}</h3>
                        <p className='text-sm'>Review</p>
                    </div>
                </div>
                <div className="flex gap-7 items-center justify-center p-2 bg-indigo-300 text-white rounded-md text-center font-semibold">
                    <span className='text-2xl lg:text-[41px]'>
                        <HiMiniUserGroup />
                    </span>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{totalUsers || 0}</h3>
                        <p className='text-sm'>Users</p>
                    </div>
                </div>
                <div className="flex gap-7 items-center justify-center p-2 bg-green-300 text-white rounded-md text-center font-semibold">
                    <span className='text-2xl lg:text-4xl'>
                        <IoShieldCheckmark />
                    </span>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{acceptedProduct || 0}</h3>
                        <p className='text-sm'>Accepted</p>
                    </div>
                </div>
                <div className="flex gap-7 items-center justify-center p-2 bg-red-400/80 text-white rounded-md text-center font-semibold">
                    <span className='text-2xl lg:text-4xl'>
                        <MdOutlineError />
                    </span>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{rejectedProduct || 0}</h3>
                        <p className='text-sm'>Rejected</p>
                    </div>
                </div>
            </div>
            {/* chart */}
            <div className="w-full h-[400px] mt-10 ">
                <LineChart
                    width={1000}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 50,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
                    <ReferenceLine y={9800} label="Max" stroke="red" />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;