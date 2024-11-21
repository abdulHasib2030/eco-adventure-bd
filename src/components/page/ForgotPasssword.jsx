import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const ForgotPasssword = () => {
    const location = useLocation()
    console.log(location.state.em ? location.state.em.email : "Hello");

    const [emailChange, setEmailChange] = useState({email: location.state.em ? location.state.em.email : "" })
   
    const handleReset = () => {
        if (emailChange.email){
            window.location.href = "https://mail.google.com/";
        }
        else{
            toast.error("Enter Email Address")
        }

      };
console.log(emailChange);
    return (
        <div className='min-h-screen flex justify-center items-center flex-col space-y-5'>
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
                <input type="text" className="grow" placeholder="Email" value={emailChange.email ? emailChange.email : '' } onChange={(e)=> setEmailChange({ email:e.target.value})} />
            </label>
            <button className='btn btn-ghost bg-red-300' onClick={handleReset}>Reset Password</button>
        </div>
        
    );
};

export default ForgotPasssword;