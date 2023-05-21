import React, { useEffect, useState } from 'react';
import ReviewToys from './ReviewToys';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    setLoading(true)
            fetch(`http://localhost:5000/review`)
            .then(res=>res.json())
            .then(data=>setToys(data))
    setLoading(false)
    },[])
    console.log(toys)
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
    
    return (
        <>
        {loading && (
        <div  className="flex justify-center"><progress className="progress w-full container"></progress>
        </div>
      )
      }
        
      
        <div  data-aos="side-up " className='my-6 container mx-auto' >
            <h2 className='text-4xl text-center font-semibold my-3'>NEW LEGO SET REVIEWS</h2>
            <div className="md:flex  gap-3">
                {
                    toys.map(toy=><ReviewToys key={toy._id} toy={toy} ></ReviewToys>)
                }

            </div>            
        </div>
        </>
    );
};

export default Review;