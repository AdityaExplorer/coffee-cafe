import './Customers.css';
import {motion} from "framer-motion";
const Customers = ({ dataCustomers }) => {
    return (
        <>
      <motion.div 
      initial={{opacity:1,x:200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      className="customer">
        <h1>Our Customers</h1>
        {dataCustomers.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img src={item.images} alt="Customer" className="card-img-top" />
  
            <div className="card-body">
              <p className="card-text">{item.text}</p>
              <img src={item.rating} alt="Rating" className="rating-img" style={{width:"10vh"}}/>
            </div>
          </div>
        ))}
      </motion.div>
      </>
    );
  };
  
  
  export default Customers;
  