import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./Wishlist.css";

function Wishlist() {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="container wishlist-empty">
        <h2>Your wishlist is empty</h2>
        <p>Tap the heart on any product to save it here for later.</p>
        <Link to="/shop" className="primary-btn">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="wishlist container">
      <h1>Your Wishlist</h1>
      <div className="product-grid">
        {wishlistItems.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
