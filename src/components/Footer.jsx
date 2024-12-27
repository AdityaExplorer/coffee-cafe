import React from "react";
import "./Footer.css";
import { FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
        <marquee className='inside-footer' behavior="scroll" direction="left">
          <p className="inside-footer">
              From Bean to Cup: Your Coffee Journey Starts Here...<FaCoffee />
          </p>
        </marquee>
    </div>
  );
}
