import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);


    const { user, SignOutUser, loginWithGoogle, CreateUser, login } = useContext(AuthContext)

    //for redirect pages 
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log(location)




    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, { replace: true })

            })
            .catch(err => console.log(err))


    };
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, { replace: true })

            })
            .catch(err => console.log(err))

    }



    return (
        <div>
            <div className="md:w-1/2 mx-auto">


                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    placeholder="enter your email"

                                    id="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <span>{errors.email.message}</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered"
                                    placeholder="Enter your password"
                                    id="password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must have at least 6 characters',
                                        },
                                    })}
                                />

                                <div className="flex justify-between items-center">
                                <label htmlFor="showPassword" className="ml-2">
                                    Show Password
                                    <input
                                        type="checkbox"
                                        id="showPassword"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                        className="ml-1"
                                    />
                                </label>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn  bg-purple-400"
                                >
                                    Login
                                </button>

                            </div>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center mb-5">
                        <button onClick={handleGoogleLogin} className="btn  btn-outline   hover:bg-purple-400 mx-auto w-1/2"><FaGoogle /><span className='ms-2 lowercase'>Continue with Google</span></button>
                        <p className='my-2'>Don't have an account? <Link to="/register" className='text-primary font-semibold'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;