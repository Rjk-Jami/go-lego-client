import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyCountdownComponent from './Countdown';
import Marquee from "react-fast-marquee";

const Offer = () => {
    const [toy, setToy] = useState({})
    useEffect(() => {

        fetch(`https://go-lego-server.vercel.app/offer`)
            .then(res => res.json())
            .then(data => setToy(data))

    }, [])

    //rect coundown
    const { _id, sellerName, rating, price, name, message, imgLink, email, category, availableQuantity, applyDate } = toy

    return (
        <div data-aos="fade-in" className=' container mx-auto my-5'>
            <div className="hero min-h-max" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-black bg-opacity-50 my-4"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" grid grid-cols-3 items-center gap-3">
                        <img className='' src={imgLink} alt="" />
                        <div className=""><h1 className="mb-5 text-4xl font-bold text-white animate-left-to-right mt-5">
                            {name}

                        </h1>
                            <Marquee className='text-white'>Offer Offer Offer Offer Offer Offer Offer Offer Offer Offer Offer Offer</Marquee>
                        </div>
                        <p className="mb-5"><MyCountdownComponent ></MyCountdownComponent> </p>
                        <p className='text-white font-bold text-xl space-x-3'> Price : <span className='text-c relative'>{price}<span className='absolute text-error  left-5 text-4xl font-bolder animate-ping'> X</span></span ><span className='text-success text-3xl font-bold animate-pulse'>{price - 2000}</span> </p>
                        <Link to={`/allToys`}>
                            <button className="btn btn-secondary btn-wide rounded-3xl  mb-5">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;