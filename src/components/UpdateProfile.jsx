import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { IoMdPhotos } from "react-icons/io";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const {userData, setUserData} = useState({name: user.displayName, email: user.email, photo:user.photoURL})
    const navigate = useNavigate()
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        console.log(userData)
        // const form = e.target
        // const name = e.target.name.value
        // const email = e.target.email.value
        // const photo = e.target.photo.value
        // console.log(name, email, photo)

        // updateUserProfile({displayName : name, email : email, photoURL: photo})
        // .then(() => {
        //     toast.success("Successfully Updated Profile.")
        //     navigate('/my-profile')
        // })
        // .catch((err)=>{
        //     toast.error(err.message)
        // })
    }
    return (
        <div className='min-h-96 flex items-center justify-center'>
            <form action=""  onSubmit={handleProfileUpdate} className='w-4/5 mx-auto space-y-3 '>
            <h1 className='font-bold text-center py-5 text-3xl'>Update Your Profile Information</h1>
             
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text"  className="grow" placeholder="Username" value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email"  className="grow" placeholder="Email" value={userData.email} onChange={()=> setUserData({...userData, email: e.target.value})}/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <IoMdPhotos />
                    <input type="text"  className="grow" placeholder="Photo-URL" value={userData.photo} onChange={()=> setUserData({...userData, photo: e.target.value})} />
                </label>

                <button
                      type='submit'
            className="mt-6 px-6 py-2 font-bold text-xl rounded-lg text-white bg-gradient-to-r from-indigo-300 to-purple-400">
            Update Profile
          </button>
            </form>
        </div>
    );
};

export default UpdateProfile;