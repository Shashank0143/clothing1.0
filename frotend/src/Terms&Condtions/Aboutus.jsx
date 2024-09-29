import React from "react";
import { Typography, Container, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import AboutImage1 from "../Image/about/about-Img_1.jpg";
import AboutImage2 from "../Image/about/about-Img_2.jpg";
// import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "century-gothic",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
        <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={AboutImage1}
                alt="Fashion Clothing"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className={classes.introText_about}>
                P&H by Priyanshu, a prominent high fashion brand established in 2019 following Mr. Priyanshu Pandey's recognition as the winner of the DLF Emporio Fashion Designer of the Year award, has quickly become synonymous with bespoke elegance and versatility. The brand's journey began with a prestigious opportunity to showcase its collection at DLF Emporio, setting the stage for its ascent in the fashion industry.

                Specializing in customization, P&H by Priyanshu caters to a wide spectrum of fashion needs, ranging from men's and women's wear to party attire, formal wear, themed outfits, bridal ensembles, and casual clothing. Each garment reflects a meticulous attention to detail and a deep understanding of contemporary fashion trends, ensuring that every piece embodies sophistication and exclusivity.

                Driven by a passion for innovation and quality craftsmanship, P&H by Priyanshu continues to redefine high fashion by seamlessly blending traditional techniques with modern aesthetics. Their commitment to creating unique and personalized clothing experiences has garnered a loyal clientele seeking distinctiveness and refinement in their wardrobes.

                As a brand that prides itself on creativity and customer satisfaction, P&H by Priyanshu remains dedicated to setting new standards of excellence in the world of couture, offering unparalleled customization and timeless elegance for every occasion.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="body1" className={classes.introText_about}>
                Mr. Priyanshu Pandey, recognized at the 2019 DLF Emporio Designer Awards, is celebrated for his creativity and innovation in fashion. A graduate of NIFT and Amity University, he established his brand P&H by Priyanshu with a strong foundation in design, refined through collaborations with prestigious fashion houses like Marie Claire Paris, Manish Malhotra, and Nitin Bal Chauhan.

                Priyanshu Pandey's designs are renowned for their meticulous craftsmanship, intricate details, and a modern interpretation of global fashion trends. His distinctive style effortlessly blends traditional artistry with contemporary elegance, appealing to a discerning clientele.

                His achievements at the DLF Emporio Designer Awards highlight his significant contributions to the fashion industry, showcasing his commitment to pushing creative boundaries and setting new standards in haute couture.

                <h4>Mission Statement</h4>
                At P&H by Priyanshu, our mission is to redefine high fashion with bespoke garments that embody sophistication, elegance, and individuality, delivering exceptional, personalized fashion experiences that set new standards in couture excellence.
                <h4>Vision Statement</h4>
                Our vision at P&H by Priyanshu is to gain global recognition as a leader in creativity, innovation, and superior craftsmanship in the fashion industry. We aspire to innovate continually, blending traditional techniques with modern aesthetics to create timeless pieces that inspire confidence and celebrate personal style. Through our commitment to quality, exclusivity, and client satisfaction, we aim to build enduring relationships with our discerning clientele worldwide.

              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={AboutImage2}
                alt="Fashion Clothing"
                className={classes.image_about}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Fashion Clothing is dedicated to providing high-quality Fashion
            equipment and accessories to Fashion enthusiasts worldwide. Our
            mission is to empower Fashioners with the best tools to enhance
            their performance on the field. With a focus on innovation,
            craftsmanship, and customer satisfaction, we have become a trusted
            brand in the Fashion community.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Since our inception in 2019, we have built a strong customer base
            and expanded our product range to cater to the diverse needs of
            players at every level. We take pride in offering genuine Fashion
            products that are carefully curated and tested for quality and
            performance. Our team of experts works closely with manufacturers to
            ensure that our customers receive top-notch products.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At Fashion Clothing, we believe in fostering long-term relationships
            with our customers. We provide excellent customer service and strive
            to exceed expectations at every step. We are committed to delivering
            a seamless online shopping experience and ensuring customer
            satisfaction. Join us on this exciting journey as we continue to
            grow and expand our reach in the world of Fashion.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Fashion Clothing is driven by the mission to provide high-quality
            Fashion equipment and accessories at affordable prices. We aim to
            make Fashion accessible to players worldwide and support their
            passion for the sport. Our mission is to offer a wide range of
            Fashion equipment, including bats, balls, protective gear, and
            accessories, that meet the highest standards of quality and
            performance.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            We are committed to continuously innovating and improving our
            product range to meet the evolving needs of Fashioners. Our team of
            experts works closely with manufacturers and conducts rigorous
            quality testing to ensure that every product we offer delivers
            exceptional performance on the field. We believe that every player
            deserves the best tools to enhance their skills and achieve their
            Fashioning goals.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container> */}
      </div>
    </>
  );
};

export default About_UsPage;
