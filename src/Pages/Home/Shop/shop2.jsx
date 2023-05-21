import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop2 = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    // Fetch toys for the active category
    fetch(`http://localhost:5000/toysByCategory?category=${categories[activeCategory]}`)
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
      {loading && (
        <div className="flex justify-center">
          <progress className="progress w-full container"></progress>
        </div>
      )}
      <div className=" ">
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
                    <Tab key={item.name}>{item.name}</Tab>
                  ))}
                </TabList>
                {toys.map((item) => (
                  <TabPanel key={item.name}>
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
