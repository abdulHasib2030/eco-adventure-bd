import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

import  { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';


const HomeLayout = () => {
    const {loading} = useContext(AuthContext)

    const location = useLocation()
    const num = ((location.pathname[location.pathname.length - 1]));
    const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)
    let id = isNumeric(num) && num
    const titlePath = [
        {path: '/', title: "Home"},
        {path: '/login', title: "Login"},
        {path: '/register', title: "Register"},
        {path: `/${id}`, title: "Adventure Experience"},
        {path: '/my-profile', title: "My Profile"},
        {path: '/update-profile', title: "Update Profile"},
        {path: '/forgot-password', title: "Forgot Password"},
       
    ]
    const curretPath = titlePath.find(item => item.path === location.pathname)
    if (curretPath && curretPath.title){
        document.title = curretPath.title
    }
    else{
        document.title = "Home"
    }

    
   if(loading){
    return <Loading></Loading>
   }
    return (
        <div >
            <Toaster></Toaster>
            {/* <ToastContainer></ToastContainer> */}
            <header className='md:w-11/12 mx-auto font-mono '>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='md:w-11/12 mx-auto font-mono'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;