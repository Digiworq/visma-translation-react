import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import Logo from '../../components/Logo';
import SEO from '../../components/SEO';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotAnswer, setForgotAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  const { loginAdmin, isAdmin, adminCreds, resetAdminPasswordWithSecret } = useData();
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
      setError(`Invalid credentials. Username or password incorrect.`);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (newPassword.length < 4) {
      setForgotError('New password must be at least 4 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setForgotError('Passwords do not match.');
      return;
    }

    const result = resetAdminPasswordWithSecret(forgotAnswer, newPassword);
    if (result.success) {
      setForgotSuccess('Password reset successfully! Logging you in...');
      setTimeout(() => {
        loginAdmin(adminCreds.username, newPassword);
        navigate('/admin');
      }, 1500);
    } else {
      setForgotError(result.message || 'Incorrect Security Answer or Master Key!');
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label><i className="fas fa-lock"></i> Password</label>
              <button 
                type="button" 
                onClick={() => { setForgotError(''); setForgotSuccess(''); setShowForgotModal(true); }}
                style={{ background: 'none', border: 'none', color: '#e8651a', fontSize: '12px', cursor: 'pointer', fontWeight: 600 }}
              >
                <i className="fas fa-key"></i> Forgot Password?
              </button>
            </div>
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

          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{
                background: 'none',
                border: '1px solid #e8651a',
                color: '#e8651a',
                borderRadius: '6px',
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <i className="fas fa-home"></i> Back to Home
            </button>
          </div>

          <div className="admin-hint">
            <span>Current Username: <code>{adminCreds.username}</code></span>
          </div>
        </form>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {showForgotModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '480px' }}>
            <div className="admin-modal-head flex-between">
              <h3><i className="fas fa-unlock-alt"></i> Reset Admin Password</h3>
              <button onClick={() => setShowForgotModal(false)} className="btn-close-modal">&times;</button>
            </div>

            <form onSubmit={handleResetPassword} className="admin-modal-form">
              {forgotError && (
                <div className="admin-error-alert" style={{ marginBottom: '16px' }}>
                  <i className="fas fa-exclamation-circle"></i> {forgotError}
                </div>
              )}
              {forgotSuccess && (
                <div style={{ background: '#27ae60', color: '#fff', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px', fontWeight: 600 }}>
                  <i className="fas fa-check-circle"></i> {forgotSuccess}
                </div>
              )}

              <div className="admin-fg">
                <label>Security Question</label>
                <div style={{ background: '#282b32', color: '#fff', padding: '12px', borderRadius: '8px', fontSize: '13.5px', marginBottom: '8px', borderLeft: '3px solid #e8651a' }}>
                  {adminCreds.securityQuestion || 'What is your company brand name?'}
                </div>
              </div>

              <div className="admin-fg">
                <label>Security Answer (or Master Key: <code>admin@reset</code>)</label>
                <input 
                  type="text" 
                  placeholder="Enter your security answer" 
                  value={forgotAnswer} 
                  onChange={e => setForgotAnswer(e.target.value)} 
                  required 
                />
              </div>

              <div className="admin-fg">
                <label>Set New Password</label>
                <input 
                  type="password" 
                  placeholder="Enter new password" 
                  value={newPassword} 
                  onChange={e => setNewPassword(e.target.value)} 
                  required 
                />
              </div>

              <div className="admin-fg">
                <label>Confirm New Password</label>
                <input 
                  type="password" 
                  placeholder="Re-enter new password" 
                  value={confirmPassword} 
                  onChange={e => setConfirmPassword(e.target.value)} 
                  required 
                />
              </div>

              <div className="admin-modal-actions">
                <button type="button" onClick={() => setShowForgotModal(false)} className="btn-admin-cancel">Cancel</button>
                <button type="submit" className="btn-admin-submit"><i className="fas fa-save"></i> Reset &amp; Log In</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
