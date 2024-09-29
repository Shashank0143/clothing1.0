import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchBar from "./Searchbar";
import "./Header.css";

import CartIcon from "./CartIcon";
// import FlagSelect from "../../Home/Flag";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

import ProfileModal from "./ProfileModel";

function Header() {
  const history = useHistory();
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  const [searchBarActive, setSearchBarActive] = useState(false);

  // const [country, setCountry] = useState("in"); // this is for flag
  const [sideMenu, setSideMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // this is for handle sideBar
  const handleSideBarMenu = () => {
    setSideMenu(!sideMenu);
  };

  // this is for country selection
  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  // };

  // this is for Search Button toggle
  const handleSearchButtonClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  // this is for input value of Search bar.
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // this is for handle searching ...
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      history.push(`/products/${searchValue}`);
    } else {
      history.push("/products");
    }
  };

  // this is for sideBar Toggle Button
  const handleCrossButtonClick = () => {
    setSearchValue("");
    setSearchBarActive(!searchBarActive);
  };

  const handleCategoriesClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        {/* <div className="headerTop">
          <div className="headerTopLeft">
            <p>We Offer's Free Shipping </p>
          </div>
          <div className="headerTopRight">
            <div className="headerRetailer">
              <span>
                <LocationOnIcon className="headerRetailer_Svg" />
              </span>
              <span>FIND LOCATION</span>
            </div>

            <div className="headerFlag">
              <span>
                <FlagSelect value={country} onChange={handleCountryChange} />
              </span>
            </div>

            <div className="headerLogin">
              {isAuthenticated ? (
                <Link
                  to="/account"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button>My Account</button>
                </Link>
              ) : (
                <Link
                  to="/signup"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button>Sign Up</button>
                </Link>
              )}
            </div>
          </div>
        </div> */}

        {/* nav */}
        <div className="headerBottom">
          <div className="headerBottom__logo">
            <div className="header_mobile_menu">
              <span>
                <ReorderIcon
                  onClick={() => setSideMenu(!sideMenu)}
                  sx={{
                    fontSize: 29,
                    color: "white",
                    "&:hover": {
                      color: "#e7070f",
                      cursor: "pointer",
                    },
                  }}
                />
                {sideMenu && (
                  <Sidebar
                    handleSideBarMenu={handleSideBarMenu}
                    isAuthenticated={isAuthenticated}
                    user={user}
                  />
                )}
              </span>
              <span>
                <SearchBar
                  searchBarActive={searchBarActive}
                  searchValue={searchValue}
                  handleCrossButtonClick={handleCrossButtonClick}
                  handleSearchButtonClick={handleSearchButtonClick}
                  handleSearchInputChange={handleSearchInputChange}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                />
              </span>
            </div>
          </div>
          {!searchBarActive && (
            <Link to="/">
              {/* <img
                src={require("../../../Image/logo.png")}
                alt="logo"
                className="headerBottom__logo_main"
              /> */}
              <div className="logo_section">
                <div className="logo arima-madurai">P & H</div>
                <div className="by_priyanshu arima-madurai">BY PRIYANSHU</div>
              </div>

            </Link>
          )}

          {/* navmenu */}

          {!searchBarActive && (
            <div className="headerBottom_navMenu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/products">Product</Link>
                </li>
                <li className="dropdown">
                  <Link to="#" onClick={handleCategoriesClick}>Categories</Link>
                  {isDropdownOpen && (
                    <ul className="dropdown-content">
                      <li><Link to={`/category/men-suits`}>Men Suits</Link></li>
                      <li><Link to={`/category/women-suits`}>Women Suits</Link></li>
                      <li><Link to={`/category/blazers`}>Blazers</Link></li>
                      <li><Link to={`/category/t-shirts`}>T-Shirts</Link></li>
                      <li><Link to={`/category/designer-choice`}>Designer's Choice</Link></li>
                      <li><Link to={`/category/jodhpuri-suits`}>Jodhpuri Suits</Link></li>
                      <li><Link to={`/category/kurta-set`}>Kurta Set</Link></li>
                      {/* <li><Link to={`/category/shirts-trousers`}>Shirts & Trousers</Link></li> */}
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about_us">About</Link>
                </li>
              </ul>
            </div>
          )}

          {/* icons */}

          <div className="headerBotttom_icons">
            <div className="search_Bar">
              <SearchBar

                searchBarActive={searchBarActive}
                searchValue={searchValue}
                handleCrossButtonClick={handleCrossButtonClick}
                handleSearchButtonClick={handleSearchButtonClick}
                handleSearchInputChange={handleSearchInputChange}
                handleSearchFormSubmit={handleSearchFormSubmit}
              />
            </div>
            <span>
              <Link
                to="/cart"
                style={{ color: "white", textDecoration: "none" }}
              >
                <CartIcon />
              </Link>
            </span>
            <span>
              <ProfileModal user={user} isAuthenticated={isAuthenticated} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
