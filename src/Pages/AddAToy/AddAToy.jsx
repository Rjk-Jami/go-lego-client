import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Select from "react-select/creatable";
import useLegoTitle from '../../hooks/useLegoTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddAToy = () => {
    useLegoTitle('Add a Toy')

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const onSubmit = (data) => {
        data.category = selectedOption.value
        data.email = user?.email
        data.sellerName = user?.displayName

        console.log("jami", data);
        fetch(`http://localhost:5000/addAToy`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => { })
            .then(data => {
                reset()
            })

    };
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out',
        });
      }, []);
    
      useEffect(() => {
        AOS.refresh();
      });

    const options = [
        { value: "starWars", label: "starWars" },
        { value: "architecture", label: "architecture" },
        { value: "cars", label: "cars" },
        { value: "machine", label: "machine" },
    ];

    const rating = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
    ];

    return (
        <div data-aos="zoom-in" className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Toy Name
                        </label>
                        <input
                            placeholder='Toy name'
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-500">Toy name is required</p>}
                    </div>
                    <div className="">
                        <label htmlFor="imgLink" className="block text-sm font-medium text-gray-700">
                            Image Link
                        </label>
                        <input
                            placeholder='Toy Photo'
                            type="text"
                            id="imgLink"
                            {...register('imgLink', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.imgLink && <p className="text-red-500">Image link is required</p>}

                    </div>
                    <div className="">
                        <label htmlFor="imgLink" className="block text-sm font-medium text-gray-700">
                            Toy category
                        </label>
                        <Select
                            className="w-75"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                    <div className="flex">
                        <div className=" flex flex-col ">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
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
                        <label htmlFor="applyDate" className="block text-sm font-medium text-gray-700">
                            Added Date
                        </label>
                        <input
                            type="date"
                            id="applyDate"
                            {...register('applyDate', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.applyDate && <p className="text-red-500">Added date is required</p>}
                    </div>

                    <div className="">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <div className="mt-1">
                            {rating.map((rating) => (
                                <label key={rating.value} className="inline-flex items-center gap-1 mx-1">
                                    <input
                                        type="radio"
                                        id={rating.value}
                                        value={rating.value}
                                        {...register('rating', { required: true })}
                                        className="form-radio h-4 w-4 text-blue-500"
                                    />
                                    <span className="ml-2">{rating.label}</span>
                                </label>
                            ))}
                            {errors.rating && <p className="text-red-500">Rating is required</p>}
                        </div>
                    </div>
                </div>
                <div className="">
                    <label htmlFor="applyDate" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="message"
                        {...register('message', { required: true })}
                        className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        rows={4}
                        placeholder="Enter your message..."
                    />
                    {errors.message && <p className="text-red-500">Description is required</p>}
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn  bg-purple-400 btn-wide "
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;