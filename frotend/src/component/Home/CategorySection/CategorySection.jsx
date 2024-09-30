import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CategorySection.css";
import image1 from "../../../Image/products/Kurtas/1.jpg"
import image2 from "../../../Image/products/women-suits/9.jpg"
import image3 from "../../../Image/products/blazers/1.jpg"
import image4 from "../../../Image/products/t-shirts/28.jpg"
import image5 from "../../../Image/products/designer-choice/30.jpg"
import image6 from "../../../Image/products/jodhpuri-suits/1.jpg"
import image7 from "../../../Image/products/kurta-set/1.jpg"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const categories = [
  { name: "men-suits", image: image1 },
  { name: "women-suits", image: image2 },
  { name: "blazers", image: image3 },
  { name: "t-shirts", image: image4 },
  { name: "designer-choice", image: image5 },
  { name: "jodhpuri-suits", image: image6 },
  { name: "kurta-set", image: image7 },
];

function CategorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 5 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 5 ? 0 : prevIndex + 1
    );
  };

  const handleCategoryClick = (category) => {
    history.push(`/category/${category}`);
  };

  return (
    <div className="category-section">
      <h2 className="cormorant-garamond-medium">SHOP BY CATEGORY</h2>
      <div className="slider-container">
        <button className="prev-button" onClick={handlePrev}>
        &larr;
        </button>
        <div className="slider">
          {categories.slice(currentIndex, currentIndex + 4).map((category, index) => (
            <div
              key={index}
              className="slider-item"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNext}>
        &rarr;
        </button>
      </div>
    </div>
  );
}

export default CategorySection;
