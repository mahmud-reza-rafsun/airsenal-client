import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
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
            }
        ]
    }
]);

export default router;