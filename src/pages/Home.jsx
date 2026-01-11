import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <span className="shape shape-1"></span>
      <span className="shape shape-2"></span>
      <span className="shape shape-3"></span>

      <div className="home-card">
        <img
          src="/Images/react_img.png"
          alt="React Logo"
          className="home-logo"
        />

        <h1>Employee Management System</h1>
        <p className="home-subtitle">
          Modern frontend built with React & Vite to manage employees securely
          using JWT authentication and REST APIs.
        </p>

        <div className="home-badges">
          <span>React 19</span>
          <span>Vite</span>
          <span>Axios</span>
          <span>JWT Auth</span>
        </div>

        <button
          className="home-login-btn"
          onClick={() => navigate("/login")}
        >
          Login to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;
