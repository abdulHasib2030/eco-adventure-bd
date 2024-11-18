import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div
            className="my-20 flex items-center justify-center"

        >
            <div className="w-full max-w-lg bg-white/80 shadow-xl rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center text-primary mb-4">
                    Register to Your Account
                </h2>
                <form className="space-y-4" >
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
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
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
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
                    {/* {
                error && <div>
                    <p className="text-red-500">{error.login}</p>
                </div>
            } */}
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
            </div>
        </div>
    );
};

export default Register;