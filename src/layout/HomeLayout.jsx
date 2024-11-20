import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import  { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';


const HomeLayout = () => {
    const {loading} = useContext(AuthContext)
   if(loading){
    return <Loading></Loading>
   }
    return (
        <div className='md:w-11/12 mx-auto'>
            <Toaster></Toaster>
            {/* <ToastContainer></ToastContainer> */}
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;