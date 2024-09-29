import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "80%",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      // // height: "50vh",
      // marginTop : "5rem",
    },
  },

  slideImage: {
    width: "100%",
    height: "auto",
  },
}));

const slides = [
  {
    image: require("../../Image/Banner/Desktop/1.jpeg"),
  },
  {
    image: require("../../Image/Banner/Desktop/2.jpeg"),
  },
  {
    image: require("../../Image/Banner/Desktop/3.jpeg"),
  },
  {
    image: require("../../Image/Banner/Desktop/4.jpeg"),
  },
];

export default function HeroSlider() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Carousel
        autoPlay={true}
        indicators={false}
        animation="slide"
        interval={5000}
        timeout={500}
        cycleNavigation={true}
        fullHeightHover={false}
        className={classes.slide}
        index={activeStep}
        onChangeIndex={setActiveStep}
      >
        {slides.map((slide, index) => (
          <div key={index} className={classes.slide}>
            <img
              src={slide.image}
              alt="slider"
              className={classes.slideImage}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
