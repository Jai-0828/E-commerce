import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg0.gif";
import products, { categories } from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard";
import "./Home.css";

function Home() {
  const trending = products.slice(0, 4);

  return (
    <div className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={bg} alt="Featured collection" className="hero-background" />

        <div className="hero-content container">
          <span className="hero-tag">✨ NEW COLLECTION 2026</span>

          <h1>
            Discover Your
            <span> Perfect Style</span>
          </h1>

          <p>
            Explore premium products, fresh trends and exclusive deals
            curated specially for you.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="primary-btn">
              Shop Now <span>→</span>
            </Link>
            <Link to="/shop" className="secondary-btn">
              Explore Collection
            </Link>
          </div>

          <div className="hero-stats">
            <div><strong>10K+</strong><span>Products</span></div>
            <div><strong>50K+</strong><span>Happy Customers</span></div>
            <div><strong>4.8★</strong><span>Customer Rating</span></div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section container">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>
          <Link to="/shop" className="view-all">View All →</Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/shop/${category.title}`}
              className="category-card"
              key={category.title}
            >
              <div className="category-icon">{category.icon}</div>
              <div>
                <h3>{category.title}</h3>
                <p>Explore the collection</p>
              </div>
              <span className="category-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TRENDING PRODUCTS ================= */}
      <section className="products-section container">
        <div className="section-heading">
          <div>
            <span>TRENDING NOW</span>
            <h2>Popular Products</h2>
          </div>
          <Link to="/shop" className="view-all">View All →</Link>
        </div>

        <div className="product-grid">
          {trending.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      {/* ================= PROMO ================= */}
      <section className="promo-section container">
        <div className="promo-content">
          <span>LIMITED TIME OFFER</span>
          <h2>Upgrade Your<br />Everyday Life.</h2>
          <p>Get up to <strong>50% OFF</strong> on selected products.</p>
          <Link to="/shop" className="primary-btn">Shop Deals <span>→</span></Link>
        </div>

        <div className="promo-shape">
          <span>50%</span>
          <small>OFF</small>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section container">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <div><h3>Free Delivery</h3><p>On orders above ₹999</p></div>
        </div>
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <div><h3>Secure Payment</h3><p>100% secure checkout</p></div>
        </div>
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <div><h3>Easy Returns</h3><p>7-day easy return policy</p></div>
        </div>
        <div className="feature">
          <div className="feature-icon">💬</div>
          <div><h3>24/7 Support</h3><p>We're here to help</p></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
