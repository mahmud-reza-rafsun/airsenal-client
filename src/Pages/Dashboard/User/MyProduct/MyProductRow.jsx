import { GoTrash } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast"
import { Link } from "react-router-dom";

const MyProductRow = ({ product, refetch, index }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, productName, votes, status } = product || {};

    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/get-product/${id}`);
            toast.success('Delete Product Successful!!')
            refetch();
        } catch (error) {
            toast.error(error);
        }
    }
    const mordernDelete = (id) => {
        toast(
            (t) => (
                <div className='text-center space-y-3'>
                    <div>
                        <p>Are you <b>Sure?</b> </p>
                    </div>
                    <div className='gap-3 flex'>
                        <button className='bg-red-400 text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold' onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                        }
                        }>Delete</button>
                        <button className='bg-blue-400 text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold' onClick={() => toast.dismiss(t.id)}>Close</button>
                    </div>
                </div>
            )
        );
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td className="font-semibold">
                {productName}
            </td>
            <td>
                {votes}
            </td>
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
            <td className="flex gap-10">
                <span onClick={() => mordernDelete(_id)} className="text-red-500 text-xl cursor-pointer"><GoTrash /></span>
                <Link to={`/dashboard/prouct-update/${_id}`}>
                    <span className="text-green-500 text-xl cursor-pointer"><RxUpdate /></span>
                </Link>
            </td>
        </tr>
    );
};

export default MyProductRow;