import React, { useState, useMemo, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import products, { categories } from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard";
import Loader from "../../components/loader/Loader";
import "./Shop.css";

const MAX_PRICE = Math.max(...products.map((p) => p.price));

function Shop() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(category || "All");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState(initialQuery);

  useEffect(() => {
    setActiveCategory(category || "All");
  }, [category]);

  // simulate a network fetch so the skeleton loader has a reason to exist
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory, maxPrice, sortBy, search]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    result = result.filter((p) => p.price <= maxPrice);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, maxPrice, sortBy, search]);

  return (
    <div className="shop container">
      <div className="shop-header">
        <h1>{activeCategory === "All" ? "All Products" : activeCategory}</h1>
        <p>{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
      </div>

      <div className="shop-layout">
        <aside className="shop-filters">
          <div className="filter-group">
            <h4>Search</h4>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            <ul className="filter-list">
              <li
                className={activeCategory === "All" ? "active" : ""}
                onClick={() => setActiveCategory("All")}
              >
                All
              </li>
              {categories.map((c) => (
                <li
                  key={c.title}
                  className={activeCategory === c.title ? "active" : ""}
                  onClick={() => setActiveCategory(c.title)}
                >
                  {c.icon} {c.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h4>Max Price: ₹{maxPrice.toLocaleString("en-IN")}</h4>
            <input
              type="range"
              min="0"
              max={MAX_PRICE}
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </aside>

        <div className="shop-results">
          <div className="sort-bar">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {isLoading ? (
            <Loader count={8} />
          ) : filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products match your filters</h3>
              <p>Try widening your price range or clearing the search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
