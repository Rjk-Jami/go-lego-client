import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => {
        console.log(import.meta.env.JAMI)
        console.log(data);
    };
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    return (
        <div className="md:w-1/2 mx-auto">


            <div className="card  w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className=" grid grid-cols-1 gap-2 ">
                            <div className="form-control">
                                <label className="label" htmlFor="name"><span className="label-text">Name</span></label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    id="name"
                                    {...register('name', {
                                        required: 'Name is required',
                                    })}
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label" htmlFor="email"><span className="label-text">Email</span></label>
                                <input
                                    type="email"
                                    className="input input-bordered"
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
                            <div className="from-control">
                                <label className="label"  htmlFor="imageLink"><span className="label-text">Image Link</span></label>
                                <input
                                    type="text"
                                    id="imageLink"
                                    className="input input-bordered w-full"
                                    {...register('imageLink', { required: 'Image link is required' })}
                                />
                                {errors.imageLink && <p>{errors.imageLink.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="password"><span className="label-text">Password</span></label>
                                <input
                                    type="password"
                                    className="input input-bordered"
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
                            </div>
                           

                            <div className="form-control">
                                <label className="label" htmlFor="confirmPassword"><span className="label-text">Confirm Password</span> </label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    id="confirmPassword"
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: (value) =>
                                            value === password || 'The passwords do not match',
                                    })}
                                />
                                {errors.confirmPassword && <span className='text-error'>{errors.confirmPassword.message}</span>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-purple-400" type="submit">Register</button>
                        </div>
                    </div>
                </form>
                <div className="text-center mb-5">
                    <p className='my-2'>Already have an account? <Link to="/login" className='text-primary font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;