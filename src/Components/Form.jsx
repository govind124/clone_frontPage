import React from "react";
import './Form.css'
const Form = () => {
  function submitform() {
    let num = document.getElementById("number").value;
    if (num) {
      if (num.length !== 10) alert("please input Number in 10 Digits");
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="info-container">
          <h1>GET IN TOUCH</h1>
          <p>Please complete the form and we will get back to you</p>
        </div>
        <div className="input-container">
          <form>
            <label htmlFor="name">Name*</label>
            <br />
            <input className="input"
              type="text"
              placeholder="Enter Your Name"
              id="name"
              required
            />
            <br />
            <br />
            <label htmlFor="email">Email*</label>
            <br />
            <input 
            className="input"
              type="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />
            <br />
            <br />
            <label htmlFor="number">Mobile No*</label>
            <br />
            <input
            className="input"
              type="text"
              placeholder="Enter Your Number"
              id="number"
              required
            />
            <br />
            <br />

            <button onClick={submitform} className='input-button'>Register Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
