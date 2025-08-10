import { RiHome2Line } from "react-icons/ri";
import { LuUserRoundCog } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

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
                <NavLink to="/" className="text-lg text-gray-800"><RiHome2Line />
                    <span className="text-[15px] font-medium mt-[1px]">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="text-lg text-gray-800"><LuUserRoundCog />
                    <span className="text-[15px] font-medium mt-[4px]">Profile</span>
                </NavLink>
            </li>
            <li>
                <Link onClick={handleLogOut} className="text-lg text-gray-800"><MdLogout />
                    <span className="text-[15px] font-medium mt-[4px]">Log Out</span>
                </Link>
            </li>
        </div>
    );
};

export default Common;