import React, { useState } from "react";
import "./ZoomImage.css"; // Extract the styles into a CSS file

const ZoomImage = ({image}) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const zoom = (e) => {
    const zoomer = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX || e.touches[0].pageX;
    const offsetY = e.nativeEvent.offsetY || e.touches[0].pageY;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      className="zoom"
      onMouseMove={zoom}
      style={{
        backgroundImage: {image},
        backgroundPosition: backgroundPosition,
      }}
    >
      <img
        src={image}
        alt="Zoomable"
      />
    </figure>
  );
};

export default ZoomImage;
