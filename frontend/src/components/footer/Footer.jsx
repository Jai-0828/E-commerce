import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Marketplace</div>
          <p>Your one-stop shop for fashion, electronics, beauty and home essentials.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop/Fashion">Fashion</Link></li>
            <li><Link to="/shop/Electronics">Electronics</Link></li>
            <li><Link to="/shop/Beauty">Beauty</Link></li>
            <li><Link to="/shop/Home">Home</Link></li>
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <li><Link to="/cart">Your cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><a href="#top">Shipping info</a></li>
            <li><a href="#top">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#top">About</a></li>
            <li><a href="#top">Careers</a></li>
            <li><a href="#top">Terms</a></li>
            <li><a href="#top">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Marketplace. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
