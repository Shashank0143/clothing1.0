import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import Banner from "./Banner/Banner"
// import FeaturedSlider from "./FeatureSlider";
import CategorySection from "./CategorySection/CategorySection";
import "slick-carousel/slick/slick.css"; // Slick slider styles
import "slick-carousel/slick/slick-theme.css";
// import Shopcategory from "./Shopcategory/Shopcategory"
function Home() {
  // we provided all parameter for react-alert at index.js
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <>
          <MataData 
            title="Shop Designer & Trending Suits online | P&H BY PRIYANSHU" 
            description="Suggested Description	P&H by Priyanshu would be your one stop store to buy professional, Designer & trending suits online, for men's & women's both. Visit the site & get new offers."
            link="https://phbypriyanshu.com/"
            />
            <div className="Home_Page">
              <div className="headerblank"></div>
              <div className="heroSlider_Home">
                <HeroSlider />
              </div>
              <CategorySection/>
              <div className="feature" style={{ marginTop: "2.7rem" }}>
                {/* <h2
                  style={{
                    textAlign: "center",
                    fontFamily: `"Archivo", sans-serif`,
                    fontWeight: "800",
                  }}
                > */}
                  {/* <Shopcategory/> */}
                  {/* Featured Products
                </h2> */}
                {/* {products &&
                  <FeaturedSlider products={products} />} */}
              </div>
              <h1 className="trending_heading cormorant-garamond-regular">Shop Our Customize suits designs in your size</h1>
              <div className="trending-products">
              {products &&
                  products
                  .slice()
                  .sort(
                    (a, b) => 
                      new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0,4)
                    .map((product) => (
                    <ProductCard key={product._id} product={product}/>
                  ))}
              </div>
              
            </div>
            <Banner/>
          </>
        </>
      )}
    </>
  );
}

export default Home;
