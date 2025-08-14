import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineAddModerator } from "react-icons/md";
import moment from "moment-timezone";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsersRow = ({ user, index, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, name, image, email, role, lastSignTime } = user || {};
    const signInTime = lastSignTime.split(',')[1];
    const loginTime = moment.tz(signInTime.trim(), "DD MMM YYYY HH:mm:ss [GMT]", "Asia/Dhaka").format("DD MMM YYYY, hh:mm:ss A");
    // make admin
    const handleMakeAdmin = async (id) => {
        try {
            await axiosSecure.patch(`/users/admin/${id}`)
            refetch();
            toast.success('Make Admin Successful!!!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    // make moderator
    const handleMakeModerator = async (id) => {
        try {
            await axiosSecure.patch(`/users/moderator/${id}`)
            refetch();
            toast.success('Make Moderator Successful!!!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <img
                    className="rounded-md h-12 w-12"
                    src={image}
                    alt={name} />
            </td>
            <td className="font-semibold">{name}</td>
            <td>{email}</td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div
                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2   
                            ${role === "Moderator" && 'text-blue-500 bg-blue-100/60'} 
                            ${role === "Admin" && 'text-green-500 bg-green-100/60'} 
                            ${role === "User" && 'text-red-500 bg-red-100/60'} `}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full 
                            ${role === "Moderator" && 'bg-blue-500'} 
                            ${role === "Admin" && 'bg-green-500'} 
                            ${role === "User" && 'bg-red-500'} 
                        `}
                    ></span>
                    <h2 className='text-sm font-normal '>{role}</h2>
                </div>
            </td>
            <td>{loginTime}</td>
            <th>
                <td>
                    <button disabled={role === "Admin"} onClick={() => handleMakeAdmin(_id)} className={`bg-green-400 text-white ${role === "Admin" && 'cursor-wait'} ${role === "Admin" && 'bg-green-500/50'}  cursor-pointer py-1 px-2 text-sm rounded-md font-semibold`}>
                        <HiUserGroup className="text-xl" />
                    </button>
                </td>
                <td>
                    <button disabled={role === "Admin"} onClick={() => handleMakeModerator(_id)} className={`bg-blue-400 text-white ${role === "Admin" && 'cursor-wait'} ${role === "Admin" && 'bg-blue-500/50'} ${role === "Moderator" && 'cursor-wait'} ${role === "Moderator" && 'bg-blue-500/50'} cursor-pointer py-1 px-2 text-sm rounded-md font-semibold`}>
                        <MdOutlineAddModerator className="text-xl" />
                    </button>
                </td>
            </th>
        </tr>
    );
};

export default ManageUsersRow;