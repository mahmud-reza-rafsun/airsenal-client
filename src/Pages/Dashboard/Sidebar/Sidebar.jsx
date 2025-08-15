import { NavLink } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import Common from "../Common/Common/Common";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { LuChartSpline } from "react-icons/lu";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FcMoneyTransfer } from "react-icons/fc";
import useRole from "../../../hooks/useRole";
import SliderLoading from "../../../components/SliderLoading/SliderLoading";


const Sidebar = () => {
    const { role, isLoading } = useRole();
    if (isLoading) return <SliderLoading />
    return (
        <div>
            <ul className="menu w-full">
                {/* users */}
                {
                    role === "User" && <div className="py-5 space-y-3">
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
                }
                {/* moderator */}
                {
                    role === "Moderator" && <div className="py-5 space-y-3">
                        <li>
                            <NavLink to="/dashboard/review-products" className="text-lg text-gray-800">
                                <MdOutlineReviews />
                                <span className="text-[15px] font-medium -mt-[1px]">Product Review</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reported-content" className="text-lg text-gray-800"><MdOutlineReportGmailerrorred />
                                <span className="text-[15px] font-medium mt-[2px]">Reported Content</span>
                            </NavLink>
                        </li>
                    </div>
                }
                {/* admin */}
                {
                    role === "Admin" && <div className="py-5 space-y-3">
                        <li>
                            <NavLink to="/dashboard/statistics" className="text-lg text-gray-800">
                                <LuChartSpline />
                                <span className="text-[15px] font-medium -mt-[1px]">Statistics</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-users" className="text-lg text-gray-800"><LiaUsersCogSolid />
                                <span className="text-[15px] font-medium mt-[2px]">Manage Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-coupon" className="text-lg text-gray-800"><FcMoneyTransfer />
                                <span className="text-[15px] font-medium mt-[2px]">Add Coupon</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-coupons" className="text-lg text-gray-800"><MdManageHistory />
                                <span className="text-[15px] font-medium mt-[2px]">Manage Coupons</span>
                            </NavLink>
                        </li>
                    </div>
                }
                <div className="divider text-gray-800">Or</div>
                <Common />
            </ul>
        </div>
    );
};

export default Sidebar;