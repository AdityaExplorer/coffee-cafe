import './ReviewPage.css';
import {motion} from "framer-motion"

const ReviewPage=()=>{
    return (
        <>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}} className="container my-5">
           <div className="inside-data">
                <h2 className="leads text-4xl">Share Your Review</h2>
            </div> 
            <div className="form-date">
            <div className="form-inside">
                <input type="text" placeholder='User Name' />
                <textarea name="review" id="review" required placeholder='description'></textarea>
                <input type="text" placeholder='tags'/>
                <div className="btnn">
                <button type='Submit'>Submit</button>
                <button type='See Review'>See Review</button>
                </div>
            </div>
        </div>
        </motion.div>
        

        </>
    )
}
export default ReviewPage;