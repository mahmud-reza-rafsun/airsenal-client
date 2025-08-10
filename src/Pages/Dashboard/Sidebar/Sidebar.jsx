import { NavLink } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import Common from "../Common/Common";


const Sidebar = () => {
    return (
        <div>
            <ul className="menu w-full">
                <div className="py-5 space-y-3">
                    <li>
                        <NavLink to="/dashboard/add-product" className="text-lg text-gray-800">
                            <IoBagAddOutline />
                            <span className="text-[15px] font-medium mt-[4px]">Add Product</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-product" className="text-lg text-gray-800"><AiOutlineProduct />
                            <span className="text-[15px] font-medium mt-[2px]">My Products</span>
                        </NavLink>
                    </li>
                </div>
                <div className="divider text-gray-800">Or</div>
                <Common />
            </ul>
        </div>
    );
};

export default Sidebar;