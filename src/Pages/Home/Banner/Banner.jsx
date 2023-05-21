import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
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

    <div data-aos="fade-in" className=' container mx-auto my-5'>
      <div className="hero min-h-max" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
        <div className="hero-overlay bg-black bg-opacity-40 my-4"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white animate-left-to-right mt-5">
              Immerse Yourself in the World of Go LEGO
            </h1>
            <p className="mb-5"></p>
            <Link to={`/allToys`}>
              <button className="btn btn-primary rounded-3xl animate-bounce mb-5">
                Start Building Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;