import axios from '../api'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});

  if (!validate()) return;

  try {
    const res = await axios.post('/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/employees');
  } catch (err) {
    if (!err.response) {
      setErrors({ form: 'Server is unreachable. Please try again later.' });
      return;
    }

    const { status, data } = err.response;

    if (status === 422) {
      const fieldErrors = {};
      Object.keys(data.errors).forEach(key => {
        fieldErrors[key] = data.errors[key][0];
      });
      setErrors(fieldErrors);
      return;
    }

 
    if (status === 401) {
      setErrors({ form: 'Invalid email or password' });
      return;
    }

    setErrors({ form: 'Something went wrong. Please try again.' });
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
            placeholder=" "
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Email</label>
          {errors.email && <span className="input-error">{errors.email}</span>}
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder=" "
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label>Password</label>
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
          {errors.password && <span className="input-error">{errors.password}</span>}
        </div>

        {errors.form && <p className="form-error">{errors.form}</p>}

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
