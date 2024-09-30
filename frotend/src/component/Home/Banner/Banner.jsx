import React from 'react';
import './Banner.css';
import image1 from "../../../Image/Banner/Offer/1.jpg"
// import image2 from "../../../Image/Banner/Offer/2.jpg"
// import image3 from "../../../Image/Banner/Offer/1.jpg"


const Banner = () => {
  return (
    <div className="banner">
      {/* <picture> */}
        {/* <source
          media="(min-width: 1200px)"
          srcSet={image3}
        />
        <source
          media="(min-width: 768px)"
          srcSet={image2}
        /> */}
        <img
          src={image1}
          alt="Responsive Banner"
          className="banner-image"
        />
      {/* </picture> */}
      <div className="banner-content">
        {/* <h1>Welcome to Our Store</h1>
        <p>Explore our collection of exclusive products.</p>
        <button className="shop-now-btn">Shop Now</button> */}
      </div>
    </div>
  );
};

export default Banner;
