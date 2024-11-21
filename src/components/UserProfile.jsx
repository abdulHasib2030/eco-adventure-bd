import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UserProfile = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
 
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        {/* Welcome Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome, <span className="text-transparent bg-clip-text md:text-5xl  bg-gradient-to-r from-indigo-600
                    to-purple-600">{user.displayName}</span>
        </h1>

        {/* User Profile Card */}
        <div className="flex flex-col items-center">
          {/* User Image */}
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-lg mb-4"
          />

          {/* User Details */}
          <div className="text-center">
            <p className="text-xl text-gray-700 font-medium">Name: {user.displayName}</p>
            <p className=" text-gray-500">Email: {user.email}</p>
          </div>

          {/* Update Profile Button */}
          <button
            onClick={handleUpdateProfile}
            className="mt-6 px-6 py-2 font-bold text-xl rounded-lg text-white bg-gradient-to-r from-indigo-300 to-purple-400">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
