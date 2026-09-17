
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const { showToast } = useToast();

  const shipping = cartTotal > 999 || cartTotal === 0 ? 0 : 79;
  const grandTotal = cartTotal + shipping;

  const handleCheckout = () => {
    showToast(
      "This is a demo — checkout isn't wired to a payment provider."
    );
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container cart-empty">
        <h2>Your cart is empty</h2>

        <p>
          Browse trending picks and add your first item — free delivery on
          orders over ₹999.
        </p>

        <Link to="/shop" className="primary-btn">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart container">
      <h1>Your Cart</h1>

      <div className="cart-layout">

        {/* CART ITEMS */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-item-info">
                <h3>{item.title}</h3>

                <p>
                  {formatCurrency(item.price)} each
                </p>
              </div>

              {/* QUANTITY */}
              <div className="quantity-stepper">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* ITEM TOTAL */}
              <div className="cart-item-total">
                {formatCurrency(
                  item.price * item.quantity
                )}
              </div>

              {/* REMOVE */}
              <button
                type="button"
                className="remove-btn"
                onClick={() => {
                  removeFromCart(item.id);
                  showToast(`Removed "${item.title}"`);
                }}
                aria-label={`Remove ${item.title}`}
              >
                ✕
              </button>
            </div>
          ))}

          {/* CLEAR CART */}
          <button
            type="button"
            className="clear-btn"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>

        {/* ORDER SUMMARY */}
        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              {formatCurrency(cartTotal)}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <span>
              {shipping === 0
                ? "Free"
                : formatCurrency(shipping)}
            </span>
          </div>

          <div className="summary-row total">
            <span>Total</span>

            <span>
              {formatCurrency(grandTotal)}
            </span>
          </div>

          <button
            type="button"
            className="primary-btn checkout-btn"
            onClick={handleCheckout}
          >
            Checkout <span>→</span>
          </button>
        </aside>

      </div>
    </div>
  );
}

export default Cart;
