import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';

const AllToys = () => {
const [toys, setToys] = useState([])
const [loading , setLoading] = useState(true)
     useEffect(()=>{
        setLoading(true)
        fetch(`http://localhost:5000/allToys`)
        .then(res=>res.json())
        .then(data=>setToys(data))
        setLoading(false)
    },[])
    console.log(toys)



    return (
        <div className="overflow-x-auto w-full bg-purple-400">
            {
            loading && <div className=""><progress className="progress w-full"></progress></div>

        }
            <table className="table table-zebra w-full ">
                {/* head */}
                <thead >
                    <tr className=''>
                        
                        <th>Toy</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>

                
                {
                    toys.map(toy=><TableRow key={toy._id} toy={toy}></TableRow>)
                }
               
                

            </table>
        </div>
    );
};

export default AllToys;