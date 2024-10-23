import "./Navbar.css";
import logo_img from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Navbar = () => {
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
            {/* <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"/></svg> */}
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
                <div className="logo">
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
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" >
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
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24">
                      {/* <use xlinkHref="#cart" /> */}
                      <FaShoppingCart></FaShoppingCart>
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
