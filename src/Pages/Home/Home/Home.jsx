import React from 'react';
import useLegoTitle from '../../../hooks/useLegoTitle';
import Banner from '../Banner/Banner';
import Shop2 from '../Shop/shop2';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';

const Home = () => {
  useLegoTitle('Home')

    return (
        <div>
          <Banner></Banner>
          <div className="">
          <Shop2></Shop2>
          </div>
          <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;