import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useLegoTitle from '../../hooks/useLegoTitle';

const UpdateToys = () => {
    useLegoTitle('Update Toy')

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const toy = useLoaderData()
    const navigate = useNavigate();


    const { _id, price, name, message, imgLink,  availableQuantity} = toy

    console.log(toy)

    const onSubmit = (data) => {

        data.price = parseInt(data.price);

        console.log("jami", data);
        fetch(`https://go-lego-server.vercel.app/updateToys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => { })
            .then(data => {
                navigate(-1);
            })

    };



    return (
        <div className='bg-fuchsia-100 p-6 w-1/2 mx-auto my-10'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" space-y-3 ">
                    <div className="grid grid-cols-2 gap-3 ">
                        <div className=" flex flex-col ">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
                            defaultValue={price}
                                placeholder='Toy Price'
                                type="text"
                                id="price"
                                {...register('price', { required: true })}
                                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.price && <p className="text-red-500">Price is required</p>}
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="availableQuantity" className="block text-sm font-medium text-gray-700">
                                Available Quantity
                            </label>
                            <input
                            defaultValue={availableQuantity}
                            
                                placeholder='Available Quantity'
                                type="text"
                                id="availableQuantity"
                                {...register('availableQuantity', { required: true })}
                                className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.availableQuantity && <p className="text-red-500">Available quantity is required</p>}
                        </div>
                    </div>
                     <div className="">
                        <label htmlFor="imgLink" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                        defaultValue={name}
                            placeholder='Name'
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.imgLink && <p className="text-red-500">name is required</p>}

                    </div>
                    <div className="">
                        <label htmlFor="applyDate" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                        defaultValue={message}
                            id="message"
                            {...register('message', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                            placeholder="Enter your message..."
                        />
                        {errors.message && <p className="text-red-500">Description is required</p>}
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button
                        type="submit"
                        className="btn  btn-success btn-wide "
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default UpdateToys;