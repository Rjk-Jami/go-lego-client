import React, { useEffect, useState } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://api.example.com/photos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {photos.map((photo) => (
        <div key={photo.id} className="border rounded-lg overflow-hidden">
          <img src={photo.url} alt={photo.title} className="w-full h-auto" />
          <p className="text-lg font-semibold px-4 py-2">{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
