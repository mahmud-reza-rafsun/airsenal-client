import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const handleLogOut = async () => {
        try {
            await logOutUser()
            toast.success("Log Out Successfull");
        } catch (error) {
            toast.error(error.message)
        }
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="products">Products</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-6xl mx-auto px-5 lg:px-0">
                <div className="navbar-start">
                    <Link className="cursor-pointer">
                        <div className="flex items-center">
                            <img className="w-16 h-10 object-cover lg:-mt-1 -mt-0" src={logo} alt="" />
                            <h2 className="font-bold lg:inline-block hidden text-2xl">AIrsenal</h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">Admin</span>
                                        </a>
                                    </li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <div className="flex gap-3">
                                <Link to="/login"><button className="btn bg-sky-600 text-white rounded-lg">Login</button></Link>
                                <Link to="/registration">
                                    <button className="btn bg-indigo-500 text-white rounded-lg">Sign Up</button>
                                </Link>
                            </div>
                    }
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="bg-gray-200 py-2 px-3 rounded-md lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute right-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;