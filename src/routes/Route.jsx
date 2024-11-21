import {
    createBrowserRouter,

  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/page/Home";
import Login from "../components/page/Login";
import Register from "../components/page/Register";
import ErrorPage from "../components/page/ErrorPage";
import AdventureDetailsPage from "../components/page/AdventureDetailsPage";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../components/UserProfile";
import UpdateProfile from "../components/UpdateProfile";
import ForgotPasssword from "../components/page/ForgotPasssword";


const Route = createBrowserRouter([
    
    {
        path:'/',
        errorElement: <ErrorPage></ErrorPage>,
        element:<HomeLayout></HomeLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('eco_adventures.json'),
                
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/:id',
                element: <PrivateRoute>
                    <AdventureDetailsPage></AdventureDetailsPage>
                </PrivateRoute>,
                loader: () => fetch('eco_adventures.json'),

            },
            {
                path: '/my-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path:'/forgot-password',
                element: <ForgotPasssword></ForgotPasssword>
            }
        ]
    },
    
])

export default Route;