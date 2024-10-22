import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
        <div className="container-footer">

        <form>
          <h5>Share Your Feedback With Us</h5>
          <p>It will help us to provide pure service to our customer's</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Enter your message" fdprocessedid="ogc74ef"/>
            <button className='btn' type="button" fdprocessedid="6f6c5">Send</button>
          </div>
        </form>
        </div>
      </div>
  )
}
