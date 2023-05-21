import React from 'react';
import { Link } from 'react-router-dom';

const ReviewToys = ({ toy }) => {
    const { _id, sellerName, rating, price, name, message, imgLink, email, category, availableQuantity, applyDate } = toy

    return (
        <div className="card w-96 glass">
            <figure><img src={imgLink} alt="car!" /></figure>
            <div className="card-body">
                <div className="">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p> 
                <p>Arrived Date : {applyDate}</p>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/allToys/${_id}`}><button className="btn btn-primary">Details!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewToys;