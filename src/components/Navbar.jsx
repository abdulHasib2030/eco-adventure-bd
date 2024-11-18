import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar justify-between bg-base-100 p-7">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn p-2 py-1 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>

                            <li><a>Update Profile</a></li>
                        </ul>
                    </div>
                    <a className="font-bold px-0 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 text-2xl">ECO-Adventure BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Update Profile</a></li>
                    </ul>
                </div>

                {
                    user ? <div className=" space-x-4">
                        <div className="w-10 rounded-full ">
                            <img
                                alt="Tailwind CSS Navbar  component" className='rounded-full'
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <a className="border border-black px-4 py-2 font-bold hover:bg-gray-300 ">Logout</a>
                    </div>:
                    <div className=" space-x-4">
                        <Link to={'login'} className='border border-black px-4 py-2 font-bold hover:bg-gray-300 '>Login</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;