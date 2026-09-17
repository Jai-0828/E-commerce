import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="container not-found">
      <span className="not-found-code">404</span>
      <h1>This page took a wrong turn</h1>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="primary-btn">Back to Home</Link>
    </div>
  );
}

export default NotFound;
