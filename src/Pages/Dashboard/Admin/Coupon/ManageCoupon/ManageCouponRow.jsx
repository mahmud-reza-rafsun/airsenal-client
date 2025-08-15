import { GoTrash } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageCouponRow = ({ coupon, refetch, index, }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, code, date, ammount, description } = coupon || {};
    const handleCouponDelete = async (id) => {
        try {
            await axiosSecure.delete(`/coupon/delete/${id}`);
            toast.success('Coupon Delete Successful!!!')
            refetch();
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{code}</td>
            <td>{date}</td>
            <td>{ammount}</td>
            <td>{description.substring(0, 30)}....</td>
            <td>
                <Link to={`/dashboard/update-coupon/${_id}`}>
                    <button className={`bg-green-400 text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold`}>
                        <RxUpdate className="text-xl" />
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={() => handleCouponDelete(_id)} className={`bg-red-400  text-white cursor-pointer py-[6px] px-2 text-sm rounded-md font-semibold`}>
                    <GoTrash className="text-lg" />
                </button>
            </td>
        </tr>
    );
};

export default ManageCouponRow;