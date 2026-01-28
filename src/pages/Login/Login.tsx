import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { userLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");

    localStorage.setItem("userEmail", email);
    userLogin();

    navigate("/dashboard");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span>
            <img src="/svgs/logo.svg" alt="Lendsqr Logo" />
          </span>
          <span className={styles.logoText}>lendsqr</span>
        </div>

        <div className={styles.illustrationContainer}>
          <img
            src="/images/pablo-sign-in.png"
            alt="Lendsqr illustration"
            className={styles.illustrationImage}
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.formContainer}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>Welcome</h1>
            <p className={styles.subtitle}>Enter details to login.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>

            <button type="submit" className={styles.submitButton}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
