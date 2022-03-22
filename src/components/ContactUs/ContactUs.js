import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div class="contact-container mt-3">
      <h1>Contact Us</h1>
      <p>Are You Ready To Chat With Aliens?</p>
      <div class="under-line"></div>
      <form action="index.html" class="main-form">
        <input type="text" class="contact-us" placeholder="Your Full Name" />
        <input
          type="email"
          class="contact-us"
          placeholder="Your valid Email Address"
        />
        <input type="text" class="contact-us" placeholder="Your Phone No" />
        <input type="text" class="contact-us" placeholder="Subject" />
        <textarea class="contact-us" placeholder="Your Message"></textarea>
        <input
          type="submit"
          id="send-btn"
          class="contact-us"
          value="send"
          disabled="disabled"
        />
      </form>
    </div>
  );
};

export default ContactUs;
