import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Start loading
    setLoading(true);

    try {
      // Send login request to backend
      const response = await api.post("/auth/login", {
        email: email.trim().toLowerCase(),
        password: password,
      });

      console.log("Login response:", response.data);

      // Get token and user from backend response
      const { token, user } = response.data;

      // Save authentication data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", user);

      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      // Get error message from backend
      const message =
        error.response?.data?.message ||
        "Unable to login. Please check your email and password.";

      setError(message);
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* =========================
            LEFT SECTION
        ========================== */}
        <div className="login-left">
          <div className="login-brand">
            <h1>
              SHOP<span>ORA</span>
            </h1>

            <p>Your style. Your choice. Your store.</p>
          </div>

          <div className="login-card">
            <div className="login-icon">🛍️</div>

            <h2>Welcome Back!</h2>

            <p>
              Discover the latest products, exclusive
              deals and everything you love.
            </p>
          </div>
        </div>

        {/* =========================
            RIGHT SECTION
        ========================== */}
        <div className="login-right">
          <div className="login-box">

            <h2>Welcome Back 👋</h2>

            <p className="login-subtitle">
              Login to continue shopping
            </p>

            {/* =========================
                ERROR MESSAGE
            ========================== */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* =========================
                LOGIN FORM
            ========================== */}
            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="input-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              {/* PASSWORD */}
              <div className="input-group">
                <label htmlFor="password">
                  Password
                </label>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    disabled={loading}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* =========================
                  LOGIN OPTIONS
              ========================== */}
              <div className="login-options">

                <label>
                  <input
                    type="checkbox"
                    disabled={loading}
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  disabled={loading}
                >
                  Forgot Password?
                </button>

              </div>

              {/* =========================
                  LOGIN BUTTON
              ========================== */}
              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            {/* =========================
                DIVIDER
            ========================== */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* =========================
                GOOGLE LOGIN
            ========================== */}
            <button
              type="button"
              className="google-button"
              disabled={loading}
            >
              <span>G</span>
              Continue with Google
            </button>

            {/* =========================
                SIGNUP
            ========================== */}
            <p className="signup-text">
              Don't have an account?

              <button
                type="button"
                onClick={() => navigate("/signup")}
                disabled={loading}
              >
                Create Account
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;