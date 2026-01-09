import axios from '../api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/employees');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        <div className="input-group">
          <input
            type="email"
            required
            placeholder=" "
            onChange={e => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            placeholder=" "
            onChange={e => setPassword(e.target.value)}
          />
          <label>Password</label>

          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
