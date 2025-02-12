import React from "react";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useCart } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";

const Products = () => {
  const { add_to_cart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    add_to_cart(product);
    navigate('/cart');
  };
  return (
    <motion.div 
    initial={{opacity:0,x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="product-products">
      <h2 style={{ textAlign: "center", letterSpacing: "5px" }} className="text-5xl mb-4">Products</h2>
      <div className="row">
        {productData.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card text-center mb-3 flex justify-center items-center" style={{ width: "20rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.Intro}
                </p>
                <p className="price">₹{product.price}</p>
                <button
                  className="cart-btn flex justify-center items-center ml-[40px] "
                  onClick={() => handleAddToCart(product)}
                >
                  <FaCartPlus className="text-xl"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;

const productData = [
  {
    id: "1",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bfd109105571241.5f7c4471d9924.jpg",
    title: "Coffee Premix",
    Intro: "Creamy Instant Delight",
    price: "460",
  },
  {
    id: "2",
    image:
      "https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549",
    title: "Whiff Roater Coffee",
    Intro: "Code Black Bold Blend",
    price: "760",
  },
  {
    id: "3",
    image:
      "https://www.mynestle.in/media/catalog/product/n/e/nescafe-intenso_pdp.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600",
    title: "Coffee Beans",
    Intro: "Code Black Bold Blend",
    price: "420",
  },
  {
    id: "4",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2FwXDGwkpFtjerzrMVlAAzGZortKNrdyrQ&s",
    title: "Pure Coffee",
    Intro: "Purely Crafted Perfection",
    price: "500",
  },
  {
    id: "5",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO41cjpbAHB2vvfFen90okA8RP3XQZslSk8w&s",
    title: "Illy: Pure Coffee Art",
    Intro: "Timeless Italian Excellence",
    price: "800",
  },
  {
    id: "6",
    image:"https://www.joannecollinsphotography.co.uk/wp-content/uploads/2022/02/12-31338-post/Commercial-product-photographer-sittingbourne-kent-coffee-photograohy_01-1024x1024.jpg",
    title: "Freshely Roasted",
    Intro: "Bold, Aromatic Flavor",
    price: "948",
  },
  {
    id: "7",
    image:"https://www.jiomart.com/images/product/original/rvjvjhx38d/continental-coffee-xtra-coffee-powder-200gm-pouch-strongest-instant-coffee-product-images-orvjvjhx38d-p596836136-0-202301091050.png?im=Resize=(420,420)",
    title: "Continetal Xtra Coffee",
    Intro: "Rich, Robust Flavor",
    price: "750",
  },
  {
    id: "8",
    image:
      "https://www.nestleprofessional.us/sites/default/files/styles/np_product_teaser_2x/public/esiv3v3tq1xwf235zr28.jpg?itok=NBDWgf_B",
    title: "Nescafe Clasico",
    Intro: "Nescafe Clásico Perfection",
    price: "600",
  },
  {
    id: "9",
    image:
      "https://www.thirdwavecoffeeroasters.com/cdn/shop/products/SOUTH-INDIAN-FILTER-COFFEE-BLEND-PDP-03012023-04_1200x1200.jpg?v=1674131145",
    title: "Third Wave Coffee",
    Intro: "Flavors in Every Sip",
    price: "300",
  },
];
