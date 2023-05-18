import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Select from "react-select/creatable";

const AddAToy = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const onSubmit = (data) => {
        
        data.email = user?.email
        data.sellerName = user?.displayName
        console.log("jami", data);
        // ...
    };

    const options = [
        { value: "city", label: "city" },
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 items-center">
                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Toy Name
                        </label>
                        <input
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
                    <div className="">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            {...register('price', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.price && <p className="text-red-500">Price is required</p>}
                    </div>
                    <div className="">
                        <label htmlFor="availableQuantity" className="block text-sm font-medium text-gray-700">
                            Available Quantity
                        </label>
                        <input
                            type="text"
                            id="availableQuantity"
                            {...register('availableQuantity', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.availableQuantity && <p className="text-red-500">Available quantity is required</p>}
                    </div>
                    <div className="">
                        <label htmlFor="applyDate" className="block text-sm font-medium text-gray-700">
                            Added Date
                        </label>
                        <input
                            type="date"
                            // defaultValue={new Date().toISOString().substr(0, 10)}
                            id="applyDate"
                            {...register('applyDate', { required: true })}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.applyDate && <p className="text-red-500">Added date is required</p>}
                    </div>
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
                <div className="">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;