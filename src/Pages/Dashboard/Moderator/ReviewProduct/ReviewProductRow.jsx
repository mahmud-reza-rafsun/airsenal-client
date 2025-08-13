import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ReviewProductRow = ({ review, index, refetch }) => {
    const { _id, productName, status } = review || {};
    const handleApprovePost = async (id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/approve-products/${id}`);
            refetch();
            toast.success('Post Approved!!!')
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleRejectedPost = async (id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/rejected-products/${id}`);
            toast.success('Post Rejected!!!')
            refetch();
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div
                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2   
                            ${status === "Pending" && 'text-blue-500 bg-blue-100/60'} 
                            ${status === "Accepted" && 'text-green-500 bg-green-100/60'} 
                            ${status === "Rejected" && 'text-red-500 bg-red-100/60'} `}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full 
                            ${status === "Pending" && 'bg-blue-500'} 
                            ${status === "Accepted" && 'bg-green-500'} 
                            ${status === "Rejected" && 'bg-red-500'} 
                        `}
                    ></span>
                    <h2 className='text-sm font-normal '>{status}</h2>
                </div>
            </td>
            <td>
                <Link to={`/dashboard/review-details/${_id}`}>
                    <button className="btn btn-sm bg-indigo-500 text-white border-none shadow-none rounded-3xl">See Details</button>
                </Link>
            </td>
            <td className="flex gap-5">
                <button disabled={status === "Accepted"} onClick={() => handleApprovePost(_id)} className={`bg-blue-400 text-white ${status === "Accepted" && 'cursor-wait'} ${status === "Accepted" && 'bg-blue-500/50'}  cursor-pointer py-1 px-2 text-sm rounded-md font-semibold`}>Accept</button>
                <button disabled={status === "Accepted"} onClick={() => handleRejectedPost(_id)} className={`bg-red-400  text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold ${status === "Accepted" && 'cursor-wait'} ${status === "Accepted" && 'bg-red-400/50'} ${status === "Rejected" && 'cursor-wait'} ${status === "Rejected" && 'bg-red-400/50'} `}>Reject</button>
            </td>
        </tr >
    );
};

export default ReviewProductRow;