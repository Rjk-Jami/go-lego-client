import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetchPhotos();
    AOS.init({ duration: 1000 });
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://go-lego-server.vercel.app/photos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='flex justify-center items-center flex-col'>
    <h2 className='text-xl font-bold  badge badge-lg  badge-accent'>Experience the timeless joy of LEGO</h2>
 
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-8">
      {photos.map((photo, index) => (
        <div
          key={photo._id}
          className="relative"
          data-aos="fade-up"
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <img src={photo.imgLink} alt={photo._id} className="w-full h-auto object-cover gallery-photo" />
          {hoveredIndex === index && (
            <Link to={`/allToys/${photo._id}`}><button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 btn-xs  btn-info px-4 py-2 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100 ">
            <FaEye></FaEye>
        </button></Link>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
