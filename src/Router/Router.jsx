import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Pages/Dashboard/Common/Profile/Profile";
import MyProductUpdate from "../Pages/Dashboard/MyProduct/MyProductUpdate";
import FeatureCardDetails from "../Pages/Home/Discover/FeaturedProducts/FeatureCardDetails";
import AllProducts from "../Pages/AllProducts/AllProducts";

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
                path: '/feature-card-details/:id',
                element: <FeatureCardDetails />
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
            }
        ]
    }
]);

export default router;