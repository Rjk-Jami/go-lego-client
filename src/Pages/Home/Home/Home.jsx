import React from 'react';
import useLegoTitle from '../../../hooks/useLegoTitle';
import Banner from '../Banner/Banner';
import Shop2 from '../Shop/shop2';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import Marquee from "react-fast-marquee";


const Home = () => {
  useLegoTitle('Home')

    return (
        <div>
          <Banner></Banner>
          <div className=" container ms-auto grid-cols-1 grid lg:grid-cols-3">
          <div className="col-span-2">
          <Shop2></Shop2>
          </div>
          <div className=" sm:">
          <PhotoGallery></PhotoGallery>
          </div>
          </div>
        
        </div>
    );
};

export default Home;