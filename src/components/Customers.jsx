import './Customers.css';

const Customers = ({ dataCustomers }) => {
    return (
        <>
      <div className="customer">
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
      </div>
      </>
    );
  };
  
  
  export default Customers;
  