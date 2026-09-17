import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/register", {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });

      console.log("Signup response:", response.data);

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Account created successfully:", user);

      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);

      const message =
        error.response?.data?.message ||
        "Unable to create account. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <div className="signup-left">
          <div className="signup-brand">
            <h1>
              SHOP<span>ORA</span>
            </h1>

            <p>Your style. Your choice. Your store.</p>
          </div>

          <div className="signup-card">
            <div className="signup-icon">🛍️</div>

            <h2>Join SHOPORA</h2>

            <p>
              Create your account and discover amazing
              products, exclusive deals and more.
            </p>
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-box">

            <h2>Create Account</h2>

            <p className="signup-subtitle">
              Sign up to start shopping
            </p>

            {error && (
              <div className="signup-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

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

              <div className="input-group">
                <label htmlFor="password">
                  Password
                </label>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

              <div className="input-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="signup-button"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <p className="login-text">
              Already have an account?

              <button
                type="button"
                onClick={() => navigate("/login")}
                disabled={loading}
              >
                Login
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;
