import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './auth.css';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('triyaanUsers')) || {};

    if (isLogin) {
      if (!users[email]) {
        alert('Email not registered. Please sign up first.');
        return;
      }

      if (users[email] !== password) {
        alert('Incorrect password.');
        return;
      }

      alert(`Welcome back, ${email}`);
      localStorage.setItem('triyaanLoggedInUser', email);
      navigate('/');
    } else {
      if (users[email]) {
        alert('Email already registered. Please login.');
        return;
      }

      users[email] = password;
      localStorage.setItem('triyaanUsers', JSON.stringify(users));
      alert(`Signed up successfully with ${email}`);
      navigate('/login'); // ✅ Redirect to login after signup
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login to TRIYAAN' : 'Create a TRIYAAN Account'}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={isLogin ? 'Enter Password' : 'Create Password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <Link to={isLogin ? '/signup' : '/login'}>
              {isLogin ? 'Sign up' : 'Login'}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
