import React from "react";
import "./Loader.css";

// count = how many skeleton product cards to render while data "loads"
function Loader({ count = 8 }) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-image shimmer" />
          <div className="skeleton-line shimmer" style={{ width: "70%" }} />
          <div className="skeleton-line shimmer" style={{ width: "40%" }} />
        </div>
      ))}
    </div>
  );
}

export default Loader;

