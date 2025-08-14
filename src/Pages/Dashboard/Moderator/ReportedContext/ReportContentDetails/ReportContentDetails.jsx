import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";

const ReportContentDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: details = [] } = useQuery({
        queryKey: ['details', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/report-details/${id}`);
            return data
        }
    })
    console.log(details);
    const { productName, image, description, owner, votes } = details || {};
    return (
        <div className='w-full py-4 lg:py-0 lg:min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-red-100'>
            <div className='mx-auto flex flex-col lg:flex-row justify-between max-w-4xl mt-14 gap-12'>
                {/* Header */}
                <div className='flex flex-col gap-6 flex-1'>
                    <div>
                        <div className='w-full overflow-hidden rounded-xl'>
                            <img
                                className='object-cover w-full'
                                src={image}
                                alt='header image'
                            />
                        </div>
                    </div>
                </div>
                <div className='md:gap-10 flex-1'>
                    {/* Plant Info */}
                    <h2>{productName}</h2>
                    <hr className='my-6' />
                    <div
                        className='
          text-lg font-light text-neutral-500'
                    >
                        {description}
                    </div>
                    <hr className='my-6' />

                    <div
                        className='font-semibold flex flex-col text-left gap-2'>
                        <div>User Name: {owner?.name}</div>
                        <div>User Email: {owner?.email}</div>

                    </div>
                    <hr className='my-6' />
                    <div>
                        <p
                            className='
                gap-4 
                font-semibold
                text-neutral-500
              '
                        >
                            Votes: {votes}
                        </p>
                    </div>
                    <hr className='my-6' />
                    <div className='flex justify-between'>
                        <div>
                            <Link to={`/dashboard/reported-content`}>
                                <button className="btn w-full bg-indigo-500 text-white shadow-none border-none rounded-3xl">Go Back</button>
                            </Link>
                        </div>
                    </div>
                    <hr className='my-6' />
                </div>
            </div>
        </div>
    );
};

export default ReportContentDetails;