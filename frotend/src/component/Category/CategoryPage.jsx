import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import Loader from "../layouts/loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import "./CategoryPage.css";
import MataData from "../layouts/MataData/MataData";

function CategoryPage() {
  const dispatch = useDispatch();
  const { category } = useParams(); // Get the category from the URL

  // Manage pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  // Fetch products whenever category or page changes
  useEffect(() => {
    if (category) {
      dispatch(getProduct("", currentPage, [0, 100000], category, 0));
    }
  }, [dispatch, category, currentPage]);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [category]);

  // Handle page change
  const setCurrentPageNoHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCategoryTitle = (category) => {
    const titles = {
      "men-suits": "Best place to buy men's suits online | 2 piece suit | P&H by Priyanshu",
      "women-suits": "Buy Affordable 2 Piece Suit for women online  | P&H by Priyanshu",
    };
    // Fallback title if category is not found
    return titles[category] || "Shop Designer & Trending Suits | P&H BY PRIYANSHU";
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      "men-suits": "Explore our exclusive collection of men's suits, designed to impress and tailored for style.",
      "women-suits": "Discover elegant and professional women's suits that blend fashion with comfort.",
    };
    // Fallback description if category is not found
    return descriptions[category] || "Shop the best trending suits and accessories for men and women.";
  };

  if (error) {
    return <div className="error">Error fetching products: {error}</div>;
  }

  return (
    <>
      <div className="categoryPage">
        {loading ? (
          <Loader />
        ) : (
          <>
            <MataData
              title={getCategoryTitle(category)}  // Dynamically setting title
              description={getCategoryDescription(category)}  // Dynamically setting description
              link={`https://phbypriyanshu.com/category/${category}`}
            />
            <div className="productGrid">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="noProducts">No products found for {category}</div>
              )}
            </div>
          </>
        )}

        {/* Show pagination only if there are products */}
        {productsCount > resultPerPage && (
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNoHandler}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="First"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
  