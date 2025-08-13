import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import logo from '../assets/images/logo.png'
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Top Navbar for mobile */}
            <div className="flex items-center justify-between sticky top-0 md:hidden bg-white shadow pl-5 pr-10 py-2">
                <img
                    className="w-16 mix-blend-multiply h-10 object-cover"
                    src={logo}
                    alt="logo"
                />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl duration-500"
                >
                    {
                        isOpen ? <RxCross2 /> : <HiMiniBars3 />
                    }
                </button>
            </div>
            <div className="flex">

                {/* Sidebar */}
                <div
                    className={`fixed md:static top-0 left-0 min-h-screen bg-white shadow-lg transition-transform duration-300 z-50
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}
                >
                    <div className="border-b  border-gray-400 px-3 p-0 lg:py-2">
                        <Link to="/" className="cursor-pointer">
                            <div className="flex items-center ml-4 py-2">
                                <img
                                    className="w-16 mix-blend-multiply h-10 object-cover"
                                    src={logo}
                                    alt="logo"
                                />
                                <h2 className="font-bold mt-2 lg:mt-1 text-2xl">
                                    AIrsenal
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;