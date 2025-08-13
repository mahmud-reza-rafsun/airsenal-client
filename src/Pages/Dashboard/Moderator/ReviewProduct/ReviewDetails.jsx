import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";

const ReviewDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/review-products/${id}`);
            return data;
        }
    })
    console.log(review);
    const { _id, productName, image, owner, votes, description } = review || {};
    return (
        <div>
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
                        <div>Seller Name: {owner?.name}</div>
                        <div>Seller Email: {owner?.email}</div>

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
                            <Link to={`/dashboard/review-products`}>
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

export default ReviewDetails;