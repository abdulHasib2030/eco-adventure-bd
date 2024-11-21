import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import logo from '../assets/sign.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div>
            <div className="navbar justify-between bg-base-100 py-7 ">
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
                            <li className='font-bold text-xl'><Link to={'/'}>Home</Link></li>
                            {
                                user &&
                                <li className='font-bold text-xl'><Link to={'/my-profile'}>My Profile</Link ></li>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="font-bold flex items-center gap-2 px-0 text-transparent bg-clip-text md:text-4xl  bg-gradient-to-r from-indigo-600
                    to-purple-600 text-xl"> <img src={logo} className='w-12 md:w-14' alt="" /> <span className='md:block hidden'>ECO-Adventure BD</span> </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-xl'><Link to={'/'}>Home</Link></li>
                        {
                            user &&
                            <li className='font-bold text-xl'><Link to={'/my-profile'}>My Profile</Link ></li>
                        }
                    </ul>
                </div>

                {
                    user ? <div className=" space-x-4">
                        <div className="relative group w-12 h-12">
                           
                            <img
                                src={user.photoURL}
                                alt={`${user.displayName}'s profile`}
                                className="w-12 h-12 rounded-full border-2 border-indigo-500 object-cover"
                            />

                            {/* Username on hover */}
                            <div className="absolute bottom-[-1.5rem] w-24 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {user.displayName}
                            </div>
                        </div>
                        <Link onClick={logOut} className="border border-black px-4 py-2 font-bold hover:bg-gray-300 ">Logout</Link>
                    </div> :
                        <div className=" space-x-4">
                            <Link to={'login'} className='border border-black px-4 py-2 font-bold hover:bg-gray-300 '>Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;