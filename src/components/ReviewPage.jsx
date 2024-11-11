import './ReviewPage.css';


const ReviewPage=()=>{
    return (
        <>
        <div className="container my-5">
           <div className="inside-data">
                <h1 className="leads">Share Your Review</h1>
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
        </div>
        

        </>
    )
}
export default ReviewPage;