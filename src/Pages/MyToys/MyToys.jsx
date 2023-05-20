import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2'
import useLegoTitle from '../../hooks/useLegoTitle';


const MyToys = () => {
  useLegoTitle('My Toys')

    const {user,loading, setLoading } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    const URL = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(()=>{
        setLoading(true)
        fetch(URL,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
           
        })
        setLoading(false)
    },[URL])
    
    const handleDeleteMyToy = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/allToys/${id}`,{
                method: "DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const remainingToys = toys.filter(toy=> toy._id !== id)
                    setToys(remainingToys);
                }
              })

                
            }
          }) 
    }

    console.log((toys))
    return (
        <div className='container mx-auto text-center'>
            <h2 className=' text-lg font-semibold badge badge-lg badge-accent '>added Toys:({toys.length})</h2>
            <table className="table w-full container mx-auto">
            <thead>

            </thead>

            {
                toys.map(toy=><MyToy key={toy._id} toy={toy} handleDelete={handleDeleteMyToy}></MyToy>)

}   

        </table>

        
        </div>
    );
};

export default MyToys;