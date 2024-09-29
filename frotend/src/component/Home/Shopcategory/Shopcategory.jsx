import React from 'react'
import image2 from '../../../Image/HomeImage/2.jpg'
import './Shopcategory.css'
// import { FaArrowRightLong } from "react-icons/fa6";

const Shopcategory = () => {
  return (
    <div>
      <div className='box'>
        <h1>Shop by Category</h1>
      </div>

      <div className='container'>
        <div className='left-div'>
            <img src={image2} alt="image1" />
            <div className='content'>
                <h3 className='heading'>TAILORED SUITS</h3>
                <button className='button-12'>Go to Collection</button>
            </div>
        </div>

        <div className='right-div'>
        <div className='content'>
                <h3 className='heading'>MEN'S  T-SHIRTS</h3>
                <button className='button-12' style={{width:"25%"}}>Go to Collection</button>
            </div> 
        </div>
      </div>

      <div className='container'>
        <div className='banner-div'>
            <div className='content'>
                <h3 className='heading'>Customise your choice at your Door step</h3>
                <button className='button-12' style={{width:"35%"}}>Go to Collection</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shopcategory
