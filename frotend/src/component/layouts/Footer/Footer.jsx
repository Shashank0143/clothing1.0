import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GooglePlay from "../../../Image/Footer/google-play-black.svg";
// import AppStore from "../../../Image/Footer/app-store-black.svg";
import "./Footer.css";
const footMenu = [
  {
    id: 1,
    title: "GET IN TOUCH",
    menu: [
      {
        id: 1,
        link: "Email: ",
        path: "/",
      },
      {
        id: 2,
        link: "What's App : +91 85278 93507",
        path: "/",
      },

      {
        id: 3,
        link: "(Mon-Sat: Timing 10am - 7pm)",
        path: "/",
      },
      {
        id: 4,
        link: "CONTACT US",
        path: "/contact",
      },
      {
        id: 5,
        link: "RETURN/EXCHANGE REQUEST",
        path: "/policy/Terms",
      },
    ],
  },
  {
    id: 2,
    title: "POLICY",
    menu: [
      {
        id: 1,
        link: "RETURN POLICY",
        path: "/policy/return",
      },
      {
        id: 2,
        link: "SHIPPING POLICY",
        path: "/policy/shipping",
      },
      {
        id: 3,
        link: "SITEMAP",
        path: "/policy/Terms",
      },
      {
        id: 4,
        link: "PRIVACY POLICY",
        path: "/policy/privacy",
      },
      {
        id: 5,
        link: "TERMS & CONDITIONS",
        path: "/terms/conditions",
      },
    ],
  },
  {
    id: 3,
    title: "COMPANY",
    menu: [
      {
        id: 1,
        link: "ABOUT US",
        path: "/about_us",
      },
      {
        id: 2,
        link: "CONTACT US",
        path: "/contact",
      },
      {
        id: 3,
        link: "SERVICE CENTERS",
        path: "/",
      },
      {
        id: 4,
        link: "CAREERS",
        path: "/",
      },
    ],
  },
];

const footSocial = [
  {
    id: 1,
    icon: <FacebookIcon className="facebook_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 2,
    icon: <TwitterIcon className="twitter_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 3,
    icon: <InstagramIcon className="insta_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 4,
    icon: <LinkedInIcon className="likedin_icon" fontSize="large" />,
    path: "/",
  },
];



const Footer = () => {
  // const [subValue, setSubValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubValue("");
  //   alert("Thankyou, you are subscribed to receive our daily newsletter");
  // };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const currYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Desktop Footer Column Layout */}
          <div className="wrapper_footer">
            {footMenu.map((item, index) => (
              <div className="footer_column" key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                  {item.menu.map((menuItem) => (
                    <li key={menuItem.id}>
                      <Link className="footer_column" to={menuItem.path}>{menuItem.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer_column">
              <h4>Follow Us</h4>
              <div className="foot_social">
                {footSocial.map((item) => (
                  <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Dropdown Layout */}
          <div className="dropdown_footer_menu">
            {footMenu.map((item, index) => (
              <div key={item.id}>
                <div className="dropdown_button" onClick={() => toggleDropdown(index)}>
                  <h4>{item.title}</h4>
                  {activeDropdown === index ? (
                    <ExpandLessIcon size={20} sx={{color:"white"}} />
                  ) : (
                    <ExpandMoreIcon size={20} sx={{color:"white"}} />
                  )}
                </div>
                <div className={`dropdown_content ${activeDropdown === index ? "show" : ""}`}>
                  <ul>
                    {item.menu.map((menuItem) => (
                      <li key={menuItem.id}>
                        <Link style={{color:"white",fontWeight: 100, fontSize: "smaller"}}  to={menuItem.path}>{menuItem.link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div>
              <div className="dropdown_button" onClick={() => toggleDropdown(footMenu.length)}>
                <h4>FOLLOW US</h4>
                {activeDropdown === footMenu.length ? (
                  <ExpandLessIcon size={20} sx={{color:"white"}} />
                ) : (
                  <ExpandMoreIcon size={20} sx={{color:"white"}} />
                )}
              </div>
              <div className={`dropdown_content ${activeDropdown === footMenu.length ? "show" : ""}`}>
                <div className="foot_social">
                  {footSocial.map((item) => (
                    <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="separatorFooter"></div>

          <div className="sub_footer_root">
            <div className="container_Footer">
              <div className="sub_footer_wrapper">
                <div className="foot_copyright" style={{ color: "white", fontSize:".5rem"}}>
                  <p>
                    &copy; Copyright {currYear} | P&HBYPRIYANSHU PVT Ltd, All Rights Reserved.
                    <span>
                      <a href="https://www.linkedin.com/in/shashank-meena-8aa55623a" style={{ color: "white", fontSize:"smaller"}}> | Developed by Shashank</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
