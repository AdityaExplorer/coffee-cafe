import React from "react";
import "./ProductList.css";
import { FaCartPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useCart } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { add_to_cart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    add_to_cart(product);
    navigate('/cart');
  };
  return (
    <div className="product-products">
      <h1 style={{ textAlign: "center", letterSpacing: "5px" }}>Products</h1>
      <div className="row">
        {productData.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card text-center mb-3" style={{ width: "20rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p className="price">${product.price}</p>
                <button
                  className="cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

const productData = [
  {
    id: "1",
    image:
      "https://cdn.shopaccino.com/refresh/products/mocha-286010_m.jpg?v=426",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "2",
    image:
      "https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "3",
    image:
      "https://www.mynestle.in/media/catalog/product/n/e/nescafe-intenso_pdp.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2FwXDGwkpFtjerzrMVlAAzGZortKNrdyrQ&s",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO41cjpbAHB2vvfFen90okA8RP3XQZslSk8w&s",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "6",
    image:
      "https://www.joannecollinsphotography.co.uk/wp-content/uploads/2022/02/12-31338-post/Commercial-product-photographer-sittingbourne-kent-coffee-photograohy_01-1024x1024.jpg",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "7",
    image:
      "https://www.mcaffeine.com/cdn/shop/files/Card-1_option1_1.jpg?v=1713269480",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "8",
    image:
      "https://www.nestleprofessional.us/sites/default/files/styles/np_product_teaser_2x/public/esiv3v3tq1xwf235zr28.jpg?itok=NBDWgf_B",
    title: "Special title treatment",
    price: "400",
  },
  {
    id: "9",
    image:
      "https://www.designerpeople.com/wp-content/uploads/2022/01/brown-skin-coffee-packaging.jpg",
    title: "Special title treatment",
    price: "400",
  },
];
