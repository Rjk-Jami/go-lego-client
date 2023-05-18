import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const onSubmit = data => {
        console.log(data)
        // fetch(``, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify()
        // })
        //     .then(res => { })
        //     .then(data => {
        //         reset()

        //     })


    };



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
                                    type="password"
                                    className="input input-bordered"
                                    placeholder="enter your password"
                                    id="password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must have at least 6 characters',
                                        },
                                    })}
                                />
                                {errors.password && <span>{errors.password.message}</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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
                        <button className="btn  btn-outline   hover:bg-purple-400 mx-auto w-1/2"><FaGoogle /><span className='ms-2 lowercase'>Continue with Google</span></button>
                        <p className='my-2'>Don't have an account? <Link to="/register" className='text-primary font-semibold'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;