import './Equipments.css';
import { FaCartPlus } from "react-icons/fa";
import { useCart } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";

const Equipments = () => {

  const { add_to_cart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (equipData) => {
    add_to_cart(equipData);
    navigate('/cart');
  };
  return (
    
    <>
 <motion.section 
 initial={{opacity:0,x:-200}}
 transition={{duration:1}}
 whileInView={{opacity:1,x:0}}
 viewport={{once:true}}
 className="intro-section">
      <div className="intro-content">
        <h2>Welcome to the World of Premium Coffee Equipment</h2>
        <p>
          At Brewing Gadgets, we believe that brewing the perfect cup of coffee requires the right tools. 
          From coffee makers to espresso machines, we have everything you need to create barista-quality coffee at home.
        </p>
      </div>
    </motion.section>



    
    <motion.div 
    initial={{opacity:0,x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className="equip-products">
      <div className="equip-content">
{          equipData.map((brew, index) => (
            <div key={index} className="product-card">
              <img src={brew.image} alt={brew.title} />
              <h2 className="product_title">{brew.title}</h2>
              <h2 className="product_Price">₹{brew.price}</h2>
              <button className="cart-btn flex justify-center items-center ml-7 ">
              <FaCartPlus onClick={()=>handleAddToCart(brew)} className='text-white text-xl'/>
              </button>
            </div>
          ))
        }
      </div>
    </motion.div>
    </>
);
};



const equipData = [
  {
    id: "1",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0007_Esspresso-Machines.png?v=1712822691",
    title: "Coffe Maker",
    price: "123",
  },
  {
    id: "2",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0009_Brew-1.png?v=1712822692",
    title: "Brew",
    price: "2736",
  },
  {
    id: "3",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0008_Grinder.png?v=1712817268",
    title: "Grinder",
    price: "3343",
  },
  {
    id: "4",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0000_Able-Brewing-Insulated-Heat-Lid-for-Chemex.png?v=1712817268",
    title: "Spare Parts",
    price: "8374",
  },
  {
    id: "5",
    image:
      "//brewinggadgets.in/cdn/shop/files/kettle01_9107f30c-b4dd-4435-a86c-491398dc21d6.png?v=1717051774",
    title: "Kettles",
    price: "8374",
  },
  {
    id: "6",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0006_Tools.png?v=1712817268",
    title: "Brista Tool",
    price: "",
  },
  {
    id: "7",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0003_Server.png?v=1712817268",
    title: "Server",
    price: "o938",
  },
  {
    id: "8",
    image: "//brewinggadgets.in/cdn/shop/files/Bowls.png?v=1712817264",
    title: "Roasting",
    price: "293",
  },
  {
    id: "9",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0005_Scale.png?v=1712817262",
    title: "Scale",
    price: "7565",
  },
  {
    id: "10",
    image:
      '//brewinggadgets.in/cdn/shop/files/Water-filter.png?v=1712817267" class="shop_cat_img" alt="water Filtration',
    title: "Water-filter",
    price: "949",
  },
  {
    id: "11",
    image:
      "//brewinggadgets.in/cdn/shop/files/Category_0010_Cleaning-1.png?v=1712817268",
    title: "shop_cat_img Cleaning",
    price: "0494",
  },
];
export default Equipments;