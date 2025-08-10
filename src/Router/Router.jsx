import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import PrivetRoute from "./PrivetRoute";

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
            }
        ]
    }
]);

export default router;