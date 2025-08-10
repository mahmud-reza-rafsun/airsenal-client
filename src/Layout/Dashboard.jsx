import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import logo from '../assets/images/logo.png'

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="min-w-1/4 min-h-screen bg-gray-100/50">
                <div className="border-b border-gray-400 px-3 py-2">
                    <Link to="/" className="cursor-pointer">
                        <div className="flex items-center ml-14 py-2">
                            <img className="w-16 mix-blend-multiply h-10 object-cover lg:-mt-1 -mt-0" src={logo} alt="" />
                            <h2 className="font-bold lg:inline-block hidden text-2xl">AIrsenal</h2>
                        </div>
                    </Link>
                </div>
                <Sidebar />
            </div>
            <div className="flex-1/2 p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;