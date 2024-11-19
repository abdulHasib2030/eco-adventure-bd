import React, { useContext } from 'react';
import banner from '../../assets/banner1.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import { FcOvertime } from 'react-icons/fc';
import tk from '../../assets/taka.png'

const AdventureDetailsPage = () => {
    // Sample Data (Replace with props or state as needed)
    const location = useLocation()
    const { data } = useContext(AuthContext)
    const id = (location.pathname[location.pathname.length - 1]);
    const adventure = data.find(data => data.id === parseInt(id))
    console.log(adventure);
    return (
        <div className='relative'>
            <div className="w-full flex justify-center items-center relative">
                <img src={banner} className="w-full border border-gray-500 h-60 md:h-[420px]  object-cover" alt="" />
                <div className='absolute top-[40%]  text-center text-white'>
                    <h1 className='md:text-6xl text-3xl font-bold text-white'>{adventure.title}</h1>
                    <p className='md:text-xl font-semibold'>{adventure.short_description}</p>

                </div>
            </div>

            <div className="w-full bg-gray-100 py-10  top-14">
                <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header Tabs */}
                    <div className="bg-gray-200 flex justify-between items-center p-4 text-sm font-medium">
                        <button className="px-4 py-2 border-b-2 border-yellow-500 text-yellow-500">INFORMATION</button>
                        
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                        {/* Main Details Section */}
                        <div className="col-span-2">
                            <h1 className="text-3xl font-bold">{adventure.title}</h1>

                            <p className="text-gray-500 text-xl font-semibold mb-4 flex items-center justify-between "> <span className='flex items-center gap-2'><FcOvertime className='text-2xl'></FcOvertime> {adventure.duration} </span>  <span className='flex items-center gap-2'><img src={tk} className='w-7 h-7' alt="" />{adventure.adventure_cost}</span></p>
                            <p className="text-gray-600 mb-6">
                        {adventure.summery}
                            </p>
                            

                            {/* Departure Information */}
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Category name</p>
                                <p className="text-gray-600">{adventure.category_name}</p>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Booking Availability</p>
                                <p className="text-green-600">{adventure.booking_availability}</p>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Location</p>
                                <p className="text-gray-600">{adventure.location}</p>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Adventure level</p>
                                <p className="text-gray-600">{adventure.adventure_level}</p>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Max Group Size</p>
                                <p className="text-gray-600">{adventure.max_group_size}</p>
                            </div>

                            {/* Included Items */}
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Included</p>
                                <ul className="list-disc pl-6 text-gray-600">
                                    {adventure.included_items.map((included) => 
                                        <li>{included}</li>
                                    )}
                                    
                                    
                                </ul>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Eco-friendly features</p>
                                <ul className="list-disc pl-6 text-gray-600">
                                    {adventure.eco_friendly_features.map((feature) => 
                                        <li>{feature}</li>
                                    )}
                                    
                                    
                                </ul>
                            </div>
                            <div className="border-t border-gray-300 py-4">
                                <p className="font-semibold">Special Instructions</p>
                                <ul className="list-disc pl-6 text-gray-600">
                                    {adventure.special_instructions.map((special) => 
                                        <li>{special}</li>
                                    )}
                                    
                                    
                                </ul>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Book this tour</h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name*" className="w-full p-2 border rounded" />
                                <input type="email" placeholder="Email*" className="w-full p-2 border rounded" />
                                <input type="email" placeholder="Confirm Email*" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Phone*" className="w-full p-2 border rounded" />
                                <input type="date" placeholder="dd-mm-yyyy" className="w-full p-2 border rounded" />
                                <input type="number" placeholder="Number of tickets" className="w-full p-2 border rounded" />
                                <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
                                
                                <button className="w-full bg-gradient-to-r from-indigo-300 to-purple-400  text-white py-2 rounded shadow-md  font-bold">
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetailsPage;

