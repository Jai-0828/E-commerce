import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useToast } from "../../context/ToastContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container not-found-inline">
        <h2>Product not found</h2>
        <Link to="/shop" className="primary-btn">Back to Shop</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    showToast(`Added ${quantity} × "${product.title}" to cart`);
  };

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-details container">
      <div className="details-grid">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1>{product.title}</h1>

          <div className="details-rating">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
            <span>{product.rating} rating · {product.stock} in stock</span>
          </div>

          <div className="details-price">
            <strong>{formatCurrency(product.price)}</strong>
            {product.oldPrice > product.price && (
              <del>{formatCurrency(product.oldPrice)}</del>
            )}
          </div>

          <p className="details-description">{product.description}</p>

          <div className="details-actions">
            <div className="quantity-stepper">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="primary-btn" onClick={handleAddToCart}>
              Add to Cart <span>+</span>
            </button>

            <button
              className={`wishlist-btn ${wishlisted ? "active" : ""}`}
              onClick={() => {
                toggleWishlist(product);
                showToast(wishlisted ? "Removed from wishlist" : "Saved to wishlist");
              }}
            >
              {wishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <h2>You might also like</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
