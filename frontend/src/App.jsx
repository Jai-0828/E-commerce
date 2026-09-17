
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
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
      <Suspense fallback={<div className="page-loader">Loading…</div>}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Shop */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />

          {/* Product */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Wishlist */}
          <Route path="/wishlist" element={<Wishlist />} />

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

