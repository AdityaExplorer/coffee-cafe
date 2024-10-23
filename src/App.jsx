import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar";
import Customers from "./components/Customers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Products from "./components/Products";
import {Outlet, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation(); // Get the current route

  // Check if the current route is `/products`
  const isHomePage = location.pathname === '/';
  // const isProductsPage = location.pathname === '/products';
  // const isEquipmentPage=location.pathname ==='./equipments';

  return (
    <>
      <div>
        <Navbar ></Navbar>
        <Outlet></Outlet>
     
      {isHomePage && (
        <>
          <Hero /> {/* Only visible on Home page */}
          <Customers dataCustomers={dataCustomers} /> {/* Only visible on Home page */}
        </>
      )}
      
     
      
        <Footer />
      </div>
    </>
  );
};


const dataCustomers = [
  {
    id: "1",
    images: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg", 
    text: "Tailored Just for You** – Many enjoy our custom coffee blends, perfectly suited to their taste.",
    rating: "https://www.shutterstock.com/image-vector/four-golden-stars-rating-icon-260nw-1355624099.jpg", 
  },
  {
    id: "2",
    images: "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1728950400&semt=ais_hybrid",
    text: "Great Coffee, Happy Customers** – Customers rave about our premium coffee and top-notch equipment!",
    rating: "https://www.shutterstock.com/image-vector/four-golden-stars-rating-icon-260nw-1355624099.jpg", 
  },
  {
    id: "3",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQuGJQqaBA6D6tFXLS0rJeQ6t8bOZ7c7Jrw&s", 
    text: "Trusted by All** – Our customers keep coming back for quality products and exceptional service.",
    rating: "https://www.shutterstock.com/image-vector/four-golden-stars-rating-icon-260nw-1355624099.jpg", 
  },
];
export default App;