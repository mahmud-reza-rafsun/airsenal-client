import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Pages/Dashboard/Common/Profile/Profile";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ReviewProduct from "../Pages/Dashboard/Moderator/ReviewProduct/ReviewProduct";
import AddProduct from "../Pages/Dashboard/User/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/User/MyProduct/MyProduct";
import MyProductUpdate from "../Pages/Dashboard/User/MyProduct/MyProductUpdate";
import ReviewDetails from "../Pages/Dashboard/Moderator/ReviewProduct/ReviewDetails";
import ReportedContent from "../Pages/Dashboard/Moderator/ReportedContext/ReportedContent";
import ReportContentDetails from "../Pages/Dashboard/Moderator/ReportedContext/ReportContentDetails/ReportContentDetails";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Statistics from "../Pages/Dashboard/Admin/Statistics/Statistics";
import AddCoupon from "../Pages/Dashboard/Admin/Coupon/AddCoupon/AddCoupon";
import ManageCoupon from "../Pages/Dashboard/Admin/Coupon/ManageCoupon/ManageCoupon";
import UpdateManageCoupon from "../Pages/Dashboard/Admin/Coupon/ManageCoupon/UpdateManageCoupon";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/products',
                element: <AllProducts />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute>
            <Dashboard />
        </PrivetRoute>,
        children: [
            {
                path: '/dashboard/add-product',
                element: <AddProduct />
            },
            {
                path: '/dashboard/my-product',
                element: <MyProduct />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/prouct-update/:id',
                element: <MyProductUpdate />
            },
            {
                path: '/dashboard/review-products',
                element: <ReviewProduct />
            },
            {
                path: '/dashboard/review-details/:id',
                element: <ReviewDetails />
            },
            {
                path: '/dashboard/reported-content',
                element: <ReportedContent />
            },
            {
                path: '/dashboard/report-details/:id',
                element: <ReportContentDetails />
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers />
            },
            {
                path: '/dashboard/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard/add-coupon',
                element: <AddCoupon />
            },
            {
                path: '/dashboard/manage-coupons',
                element: <ManageCoupon />
            },
            {
                path: '/dashboard/update-coupon/:id',
                element: <UpdateManageCoupon />
            }
        ]
    }
]);

export default router;