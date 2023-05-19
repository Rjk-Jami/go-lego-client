import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
  
    const URL = `http://localhost:5000/allToys?email=${user.email}`
    useEffect(()=>{
        fetch(URL,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
           
        })
    },[URL])
    console.log((toys))
    return (
        <div>
            <h2>MyToys</h2>
        </div>
    );
};

export default MyToys;