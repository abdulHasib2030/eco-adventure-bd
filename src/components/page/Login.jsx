import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const Login = () => {
    const {userLogin, setUser, user, googleAuth, setLoading} = useContext(AuthContext)
    const [error, setError] = useState({})
    const [email, setEmail] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value
      const password = form.password.value
      userLogin(email, password)
      .then(res => {
        const user = res.user;
        setUser(user)
        
       toast.success("successfully login")

        navigate(location?.state ? `/${location.state.id}` : '/')
      })
      .catch((err) =>{
        toast.error("Invalid login information")

        setError({...error , login: "Invalid login information"})
      })
  
    }

    const handleGoogleAuth = () =>{
      googleAuth()
      .then(res =>{ setUser(res.user)
     navigate(location?.state ? `/${location.state.id}` : '/')}
    )
      .catch (err =>{ 
        toast.error("Invalid login information")
        setError({user: "Invalid credentials"})
    })
    }
      return (
        <div
        className="my-32 flex items-center justify-center"
       
      >
        <div className="w-full max-w-lg bg-white/80 shadow-xl rounded-lg p-6 border border-gray-400">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">
            Login to Your Adventure
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full" onChange={(e)=> setEmail({...email, email:e.target.value})}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>
            <p className="text-end text-primary mt-2 font-semibold">
            <Link to={'/forgot-password'} state={email?.email ? {em:email}: {em:''}} >Forgot Password ?</Link>
            </p>
            {/* {
                error && <div>
                    <p className="text-red-500">{toast.error(error.login)}</p>
                </div>
            } */}
            
            <button
              type="submit"
              className="btn btn-primary text-xl font-bold w-full mt-2 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 hover:bg-purple-600 "
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" state={location?.state && {id: location.state.id}}  className="text-primary font-bold">
              Register
            </Link>
          </p>
          <div className="divider  font-semibold">Or continue with</div>
                <div>
                    <button onClick={handleGoogleAuth} className='flex items-center btn btn-primary text-xl font-bold w-full mt-2 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 hover:bg-purple-600'> <FcGoogle /> Google</button>
                </div>
        </div>
      </div>
      );
  };
  
  export default Login;