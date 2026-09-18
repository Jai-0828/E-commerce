
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

// Pages
const Home = lazy(() => import("./pages/home/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const ProductDetails = lazy(() =>
  import("./pages/productDetails/ProductDetails")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const Login = lazy(() => import("./pages/login/Login"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

// Check whether user is logged in
function isAuthenticated() {
  return Boolean(localStorage.getItem("token"));
}

// Protect pages that require login
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function Layout() {
  const location = useLocation();

  // Hide Navbar and Footer on Login and Signup pages
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {/* Navbar */}
      {!isAuthPage && <Nav />}

      {/* Pages */}
      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Shop */}
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />

          <Route
            path="/shop/:category"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />

          {/* Product */}
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Wishlist */}
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>

      {/* Footer */}
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;

