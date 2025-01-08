import React from "react";

const Footer = () => (
  <footer>
    <div className="subscribe">
      <h2>Be the First to Know</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
    <div className="footer-links">
      <p>Quick Links</p>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
