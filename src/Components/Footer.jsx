import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="ch1">
          ABOUT US
          <br />
          <p>
            {" "}
            RubixeTM is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Rubixe mission to
            enable businesses to leverage the full potential of disruptive
            technologies to stay competitive in the market.
          </p>
        </div>
        <div className="ch2">
          <ul type="none">
            <li>MENUS</li>
            <br />
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="ch3">
          <ul type="none">
            <li>LEARN MORE</li>
            <br />
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="ch4">
          <ul type="none">
            <li>ADDRESS</li>
            <br />
            <li>Novel Tech Park, 1st Floor, Hosur Rd,</li>
            <li>Kudlu gate, Bengaluru, Karnataka</li>
            <li>560068</li>
            <li>Phone: 0804-717-8999</li>
            <li>Email: hi@rubixe.com</li>
            <br />

            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
