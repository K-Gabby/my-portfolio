import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import footer_logo from "../../assets/assets/footer_logo.png";
import user_icon from "../../assets/assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "48d6ce2c-7eb4-45d9-a0cf-bd68f8db0401",
        email: email,
        subject: "New Newsletter Subscription",
      });

      if (response.data.success) {
        setMessage("Subscription successful! 🎉");
        setEmail(""); // Clear input after success
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from Lagos, Nigeria, specializing in
            building modern and user-friendly web applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
          {message && <p className="subscribe-message">{message}</p>}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Kehinde Olaniyi. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me{" "}
            </AnchorLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
