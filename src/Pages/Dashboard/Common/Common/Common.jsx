import { RiHome4Line } from "react-icons/ri";
import { LuUserRoundCog } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const Common = () => {
    const { logOutUser } = useAuth();
    const handleLogOut = async () => {
        try {
            await logOutUser()
            toast.success("Log Out Successfull");
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <li>
                <Link to="/" className="text-lg text-gray-800">
                    <RiHome4Line />
                    <span className="text-[15px] font-medium mt-[2px]">Home</span>
                </Link>
            </li>
            <li>
                <NavLink to="/dashboard/profile" className="text-lg text-gray-800"><LuUserRoundCog />
                    <span className="text-[15px] font-medium mt-[2px]">Profile</span>
                </NavLink>
            </li>
            <li>
                <Link onClick={handleLogOut} to="/dashboard/my-product" className="text-lg text-gray-800"><MdLogout />
                    <span className="text-[15px] font-medium mt-[2px]">Log Out</span>
                </Link>
            </li>
        </div>
    );
};

export default Common;