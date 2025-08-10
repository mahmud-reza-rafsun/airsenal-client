import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const hideRoute = ['/login', '/registration']
    const location = useLocation();
    const hideNavFooter = hideRoute.includes(location.pathname);
    return (
        <div>
            {!hideNavFooter && <Navbar />}
            <div className="min-h-[calc(100vh-243px)] max-w-6xl mx-auto pt-3 lg:py-5 px-5 lg:px-0">
                <Outlet />
            </div>
            {!hideNavFooter && < Footer />}
        </div>
    );
};

export default MainLayout;