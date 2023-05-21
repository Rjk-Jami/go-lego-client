import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";


const Shop2 = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('https://go-lego-server-rjk-jami.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        AOS.init({ duration: 1000 });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    // Fetch toys for the active category
    fetch(`https://go-lego-server-rjk-jami.vercel.app/toysByCategory?category=${categories[activeCategory]}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [categories, activeCategory]);

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex);
  };

  return (
    <>
    <Marquee >
    Step into a world where imagination takes shape, as the vibrant colors and endless possibilities of LEGO come alive before your eyes.
   
</Marquee>
      {loading && (
        <div className="flex justify-center">
          <progress className="progress w-full "></progress>
        </div>
      )}
      <div data-aos="fade-up" className=" ">
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList>
            {categories.map((category, index) => (
              <Tab key={category} onClick={() => handleCategoryClick(index)}>
                {category}
              </Tab>
            ))}
          </TabList>
          {toys.map((toy) => (
            <TabPanel key={toy.name} hidden={toys.indexOf(toy) !== activeCategory}>
              <Tabs forceRenderTabPanel>
                <TabList>
                  {toys.map((item) => (
                    <Tab key={item._id}>{item.name}</Tab>
                  ))}
                </TabList>
                {toys.map((item) => (
                  <TabPanel key={item._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <figure>
                        <img src={item.imgLink} alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <div className="flex justify-between">
                          <p>Price: {item.price}</p>
                          <p className="text-right">Rating: {item.rating}</p>
                        </div>
                        <div className="card-actions justify-center">
                          <Link to={`/allToys/${item._id}`}>
                            <button className="btn btn-primary">View details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Shop2;
