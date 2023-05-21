import React from 'react';
import useLegoTitle from '../../../hooks/useLegoTitle';
import Banner from '../Banner/Banner';
import Shop2 from '../Shop/shop2';

const Home = () => {
  useLegoTitle('Home')

    return (
        <div>
          <Banner></Banner>
          <Shop2></Shop2>
        </div>
    );
};

export default Home;