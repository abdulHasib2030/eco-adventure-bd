import {
    createBrowserRouter,

  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/page/Home";
import Login from "../components/page/Login";
import Register from "../components/page/Register";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('eco_adventures.json')
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    
])

export default Route;