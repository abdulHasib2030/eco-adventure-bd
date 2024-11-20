import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';


const Register = () => {
    
    const { createNewUser, user, setUser, updateUserProfile , googleAuth, setLoading} = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = (e) => {
        
        // setError({"none": ""})
        console.log(error);
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
       
        if (name.length < 5) {
            setError({  name: "Name can't 5 character less." })
            return
        }
        
        if (!photo){
            setError({ photo:'Provide photo-url'})
            return
        }
        if (!email){
            setError({ email:'Provide Email Address'})
            return
        }
        if(!passwordRegex.test(password)){
            setError({password: "Password must meet one Uppercase, lowercase letter and at least 6 chanacters long."})
           return
        }
        
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
              
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Successfully register account.")
                        navigate(location?.state ? `/${location.state.id}` : '/')
                    })
                    .catch((err) => {
                        setError({...error, profile: err.message})
                     })
            })
            .catch((err) => {
              
   
                setError({...error, user:"Eamil already in use"})
            })
    }
    const handleGoogleAuth = () =>{
        googleAuth()
        .then(res =>{ setUser(res.user)
       console.log(res.user)
       navigate('/')}
      )
        .catch (err => setError({user: "Invalid credentials"}))
      }

    return (
        <div
            className="my-16 flex items-center justify-center"

        >
            <div className="w-full max-w-lg bg-white/80 shadow-xl border border-gray-400 rounded-lg py-5 px-12">
                <h2 className="text-2xl font-bold text-center text-primary mb-4">
                    Register to Your Account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit} >
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                        {
                            error && error?.name && <div>
                                <p className='text-red-500'>{error.name}</p>
                            </div>
                        }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Photo-URL</span>
                        </label>
                        <input name="photo"
                            type="text"
                            placeholder="Enter your Photo-URL e.g. https://example.com/david.jpg"
                            className="input input-bordered w-full"
                        />
                        {
                            error && error?.photo && <div>
                                <p className='text-red-500'>{error.photo}</p>
                            </div>
                        }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input name="email"
                            type="email"
                            placeholder="Enter your email" autoComplete='off'
                            className="input input-bordered w-full"
                        />
                         {
                            error && error?.email && <div>
                                <p className='text-red-500'>{error.email}</p>
                            </div>
                        }
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input name="password"
                            type="password" autoComplete='off'
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                         {
                            error && error?.password && <div>
                                <p className='text-red-500'>{error.password}</p>
                            </div>
                        }
                    </div>

                    {
                            error && error?.profile && <div>
                                <p className='text-red-500'>{error.profile}</p>
                            </div>

                        }
                         {
                            error && error?.user && <div>
                                <p className='text-red-500'>{error.user}</p>
                            </div>
                        }
                
                    <button
                        type="submit"
                        className="btn btn-primary text-xl font-bold w-full mt-2 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 hover:bg-purple-600 "
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-bold">
                        Login
                    </Link>
                </p>
                <div className="divider lg:divider-horizontal font-semibold">Or continue with</div>
                <div>
                    <button onClick={handleGoogleAuth} className='flex items-center btn btn-primary text-xl font-bold w-full mt-2 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 hover:bg-purple-600'> <FcGoogle /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;