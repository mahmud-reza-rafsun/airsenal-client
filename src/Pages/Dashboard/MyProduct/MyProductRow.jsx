import { GoTrash } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast"
import { Link } from "react-router-dom";

const MyProductRow = ({ product, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, productName, newTag, description, image } = product || {};
    console.log(newTag);

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
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={image}
                            alt={productName} />
                    </div>
                </div>
            </td>
            <td>
                {productName}
            </td>
            <td className="grid grid-cols-3 mt-3">
                {newTag.map((tag, index) => (
                    <span key={index} className="cursor-pointer text-blue-500 rounded-full text-[13px]">
                        #{tag}
                    </span>
                ))}
            </td>
            <td className="">{description.substring(0, 30)}...</td>
            <td className="flex gap-10 justify-center items-center">
                <span onClick={() => mordernDelete(_id)} className="text-red-500 text-xl cursor-pointer"><GoTrash /></span>
                <Link to={`/dashboard/prouct-update/${_id}`}>
                    <span className="text-green-500 text-xl cursor-pointer"><RxUpdate /></span>
                </Link>
            </td>
        </tr>
    );
};

export default MyProductRow;