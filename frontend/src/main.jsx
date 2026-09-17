import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastProvider } from "./context/ToastContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);