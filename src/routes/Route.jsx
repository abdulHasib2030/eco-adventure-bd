import {
    createBrowserRouter,

  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/page/Home";
import Login from "../components/page/Login";
import Register from "../components/page/Register";
import ErrorPage from "../components/page/ErrorPage";
import AdventureDetailsPage from "../components/page/AdventureDetailsPage";


const Route = createBrowserRouter([
    {
        path:'/',
        errorElement: <ErrorPage></ErrorPage>,
        element:<HomeLayout></HomeLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
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
                element: <AdventureDetailsPage></AdventureDetailsPage>
            }
        ]
    },
    
])

export default Route;