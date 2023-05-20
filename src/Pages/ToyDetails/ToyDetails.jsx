import { handler } from 'daisyui';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    const navigate = useNavigate();

    const {_id,sellerName,rating,price,name,message,imgLink,email,category ,availableQuantity,applyDate} =toy

    console.log(toy)
    const handlePreviousPage = () =>{
        navigate(-1)
    }
    return (
        <div className="hero min-h-screen p-6 m-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={imgLink} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="py-6">{message}</p>
            <div className=" flex gap-6 my-2">
                <p className='space-x-3'><span>Price:</span><span>{price}</span></p>
                <p className='space-x-3'><span>Available Quantity:</span><span>{availableQuantity}</span></p>
                <p className='space-x-3'><span>Rating: </span>{rating}<span></span></p> 
            </div>
            <div className=" flex gap-6 my-2">
                <p>Seller Name: <span className='ms-2'>{sellerName}</span></p>
                <p>Seller email: <span className='ms-2'>{email}</span></p>
            </div>
            <button onClick={handlePreviousPage} className="btn btn-primary">Go back</button>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;