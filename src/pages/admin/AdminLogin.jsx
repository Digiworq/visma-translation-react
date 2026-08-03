import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import Logo from '../../components/Logo';
import SEO from '../../components/SEO';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin, isAdmin } = useData();
  const navigate = useNavigate();

  if (isAdmin) {
    navigate('/admin');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(username, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid username or password. Default is admin / admin123');
    }
  };

  return (
    <main className="admin-login-page">
      <SEO title="Admin Login - Visma Translation CMS" description="Administrator portal login for Visma Translation Content Management System." />
      <div className="admin-login-box">
        <div className="admin-logo-header">
          <Logo light={true} />
          <h2>Admin Portal Access</h2>
          <p>Log in to manage services, hero content, navigation, and leads.</p>
        </div>

        {error && (
          <div className="admin-error-alert">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-fg">
            <label><i className="fas fa-user"></i> Username</label>
            <input 
              type="text" 
              placeholder="Enter admin username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div className="admin-fg">
            <label><i className="fas fa-lock"></i> Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="admin-btn-primary">
            <i className="fas fa-sign-in-alt"></i> Log In to Dashboard
          </button>

          <div className="admin-hint">
            <span><strong>Default Credentials:</strong> username: <code>admin</code> | password: <code>admin123</code></span>
          </div>
        </form>
      </div>
    </main>
  );
}
