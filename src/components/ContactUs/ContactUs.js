import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container mt-3">
      <h1>Contact Us</h1>
      <p>Are You Ready To Chat With Aliens?</p>
      <div className="under-line"></div>
      <form action="index.html" className="main-form">
        <input
          type="text"
          className="contact-us"
          placeholder="Your Full Name"
        />
        <input
          type="email"
          className="contact-us"
          placeholder="Your valid Email Address"
        />
        <input type="text" className="contact-us" placeholder="Your Phone No" />
        <input type="text" className="contact-us" placeholder="Subject" />
        <textarea className="contact-us" placeholder="Your Message"></textarea>
        <input
          type="submit"
          id="send-btn"
          className="contact-us"
          value="send"
          disabled="disabled"
        />
      </form>
    </div>
  );
};

export default ContactUs;
