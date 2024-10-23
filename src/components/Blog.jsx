import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import './Blog.css';


const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <h1>Simple Guide to Buying Best Coffee Beans</h1>
        <div className="blog-content">
          <img
            src="https://img.freepik.com/free-photo/coffee-beans-levitate-white-background_485709-33.jpg"
            alt="Simple Guide to Buying Best Coffee Beans"
            class="article__image"
            loading="lazy"
          />
          {/* <div className="blog-description">
            <div className="blog-sub-title">
              <div className="blog-date">
                <SlCalender />
                <span>2024-10-19</span>
              </div>
              <p className="author">
                <IoPersonOutline />
                <span>Levista India</span>
              </p>
            </div>
          </div> */}
        </div>
        <div className="blog_section_details">
          <h2>30-Second Snapshot</h2>
          <ul>
            <li className="1">
              Choosing the right beans is essential to a great coffee
              experience, with India's coffee regions like Chikmagalur and Coorg
              offering some of the best options.
            </li>
            <li className="2">
              There are four main types of coffee beans: Arabica, Robusta,
              Liberica, and Excelsa, with Arabica and Robusta being the most
              common in India.
            </li>
            <li className="3">
              Arabica provides a mild, smooth flavour, while Robusta delivers a
              bolder, stronger taste.
            </li>
            <li className="4">
              Consider factors like bean freshness, roast date, and the brewing
              method for the best flavour.
            </li>
            <li className="5">
              Avoid common mistakes like improper storage or using poor water
              quality.
            </li>
            <li className="6">
              Levista Coffee offers high-quality beans at competitive prices,
              ensuring a fresh and flavourful cup.
            </li>
            <ul>
              Ultimately, the best coffee is about personal preference and
              finding the right match for your taste and brewing method.
            </ul>
          </ul>
        </div>
        <div
          class="text me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          
        >
          <div class="my-3 py-3">
            <h2 class="display-5">
              Your Perfect Coffee Starts with the Right Beans
            </h2>
            <p class="lead" style={{marginLeft:"16%"}}>
              The journey to a great cup of coffee starts long before you take
              that first sip. It begins with choosing the right coffee beans.
              India's rich coffee-growing regions like Chikmagalur and Coorg are
              home to some of the best beans.
            </p>
          </div>
          <div
            class="bg-body-tertiary shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "500px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0551/0981/2291/files/right-coffee-beans_94b933fc-6933-45fa-a768-4147bcdc8d5d_1024x1024.jpg?v=1729319193"
              alt="right-coffee-beans"
              
            />
          </div>
        </div>
        <div className="FAQ_section">
          <h2 style={{textAlign:"center"}}>FAQs</h2>
          <div className="faq_accordian">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is the difference between Arabica and Robusta beans?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Arabica beans are known for their mild, smooth flavour, while Robusta beans have a stronger, bolder taste with higher caffeine content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How should I store my coffee beans?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Store your beans in an airtight container in a cool, dark place away from moisture and sunlight. Avoid storing them in the freezer or refrigerator.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Which brewing method works best with which beans?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Lighter roasts are ideal for pour-over methods, medium roasts suit drip methods, and darker roasts are perfect for espresso or pressure brewing.
                  </div>
                </div>
              </div>
              <ul>
              <div class="alert alert-warning" role="alert">
                At BREWLINE, we offer premium-quality coffee beans sourced directly from the lush plantations of Coorg, one of India’s most renowned coffee-growing regions. Our beans are carefully selected and processed to preserve the rich, bold flavours that South Indian coffee is known for.
                </div>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Blog;

