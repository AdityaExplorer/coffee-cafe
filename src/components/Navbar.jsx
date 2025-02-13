import "./Navbar.css";
import logo_img from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Popup from "./Popup.jsx";
import { CgDarkMode } from "react-icons/cg";
import {toast} from "react-toastify";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const[result,setResult] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending.....");
    const formData = new FormData(event.target);

    formData.append("access_key",
      "8cea2f7e-1865-4e6c-97e3-65b45d9f2cbe");

      const response = await fetch("https://api.web3forms.com/submit" , {
        method:"POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Message Sent Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
  }

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-md  sticky-top border-bottom navbar"
        data-bs-theme=""
      >
        <div className="logo">
          <img src={logo_img} alt="" />
        </div>
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">
            <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"/></svg>
            {/* <div className="logo">
              <img src={logo_img} alt="" />
            </div> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
            aria-label="Toggle navigation"
            onClick={()=>setMenu(true)}  
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                <div className="logo ">
                  <img src={logo_img} alt="" />
                </div>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body my-5 {theme}">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/products">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/equipments">
                    Equipments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <CgDarkMode   />
                  </a>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/review">
                    Review
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    <button onClick={openPopup} className="Contact_Us">
                      Contact Us
                    </button>
                    
                    {/* Contact Pop Starts Here */}
                    
                    <Popup isOpen={isPopupOpen} onClose={closePopup}>
                      <h2 className="text-4xl mb-1 font-medium">Contact Us</h2>
                      <p className="pop_content">BREWLINE</p>
                      <p className="pop_content">
                        Email:brewline0000@gmail.com
                      </p>
                      <p className="pop_content">Mobile:039309203</p>
                      <h4>Got a message for us? Send it here!</h4>

                      {/* -------from starts here --------- */}
                      <form onSubmit={onSubmit} className="flex flex-col">
                      <input
                        type="name"
                        placeholder="Enter your name"
                        className="in_text"
                      />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="in_text"
                      />
                      <textarea
                        name=""
                        id=""
                        placeholder="Enter your message"
                        spellCheck="True"
                        className="in_text"
                      ></textarea>
                      <div className="consent">
                        <label htmlFor="">
                          I agree the terms and pirvacy policy
                        </label>
                        <input type="checkbox" required />
                      </div>
                      <button className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-600">
                        {result ? result : "Send Message"}
                      </button>
                      </form>
                    </Popup>
                  </a>
                </li>
               
                {/* ------------Pop Up ends here------------ */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24">
                      <Link className="nav-link " to="/cart">
                        <FaShoppingCart></FaShoppingCart>
                      </Link>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
