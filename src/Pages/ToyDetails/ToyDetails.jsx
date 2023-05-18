import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;