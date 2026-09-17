import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useToast } from "../../context/ToastContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const wishlisted = isWishlisted(product.id);
  const discountPct = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    showToast(`Added "${product.title}" to cart`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    showToast(
      wishlisted ? `Removed from wishlist` : `Saved "${product.title}" to wishlist`
    );
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        {discountPct > 0 && <span className="sale-badge">{discountPct}% OFF</span>}
        <button
          className={`wishlist ${wishlisted ? "active" : ""}`}
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <div className="product-rating">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
          <span>{product.rating}</span>
        </div>

        <h3>{product.title}</h3>

        <div className="price">
          <strong>{formatCurrency(product.price)}</strong>
          {product.oldPrice > product.price && (
            <del>{formatCurrency(product.oldPrice)}</del>
          )}
        </div>

        <button className="add-cart" onClick={handleAddToCart}>
          Add to Cart <span>+</span>
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
