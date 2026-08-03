import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useData } from '../context/DataContext';

export default function Navbar() {
  const { services, translationServices, menuLinks, topbarContent, isAdmin } = useData();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const megaTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const [svcPreview, setSvcPreview] = useState(services[0] || {});
  const [transPreview, setTransPreview] = useState(translationServices[0] || {});

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMega(null);
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
  };

  const handleMouseEnterMega = (megaKey) => {
    if (window.innerWidth > 768) {
      if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
      setActiveMega(megaKey);
    }
  };

  const handleMouseLeaveMega = () => {
    if (window.innerWidth > 768) {
      if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
      megaTimeoutRef.current = setTimeout(() => {
        setActiveMega(null);
      }, 250);
    }
  };

  const handleMegaClick = (e, megaName, path) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveMega(activeMega === megaName ? null : megaName);
    } else {
      setActiveMega(null);
      closeMobile();
      if (path) {
        navigate(path);
      }
    }
  };

  // Helper to split dynamic array into 3 columns
  const getCols = (arr) => {
    const colSize = Math.ceil(arr.length / 3);
    return [
      arr.slice(0, colSize),
      arr.slice(colSize, colSize * 2),
      arr.slice(colSize * 2)
    ];
  };

  const svcCols = getCols(services);
  const transCols = getCols(translationServices);
  const visibleLinks = menuLinks.filter(m => m.visible !== false);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span><i className="fas fa-clock"></i> {topbarContent.hours}</span>
            <span><i className="fas fa-map-marker-alt"></i> {topbarContent.location}</span>
          </div>
          <div className="topbar-right">
            <a href={`mailto:${topbarContent.email}`} className="t-btn outline">
              <i className="fas fa-envelope"></i> {topbarContent.email}
            </a>
            <a href={`tel:${topbarContent.phone.replace(/[^0-9+]/g, '')}`} className="t-btn solid">
              <i className="fas fa-phone-alt"></i> {topbarContent.phone}
            </a>
            {isAdmin ? (
              <NavLink to="/admin" className="t-btn solid" style={{ background: '#e8651a', color: '#ffffff' }}>
                <i className="fas fa-user-shield"></i> Admin Dashboard
              </NavLink>
            ) : (
              <NavLink to="/admin/login" className="t-btn outline" style={{ opacity: 0.85 }} title="Admin Login">
                <i className="fas fa-lock"></i> Admin
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar" id="navbar">
        <div className="nav-inner">
          <NavLink to="/" style={{ textDecoration: 'none' }} onClick={closeMobile}>
            <Logo light={true} />
          </NavLink>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} id="navLinks">
            {visibleLinks.map(link => {
              if (link.isMega) {
                const isServicesMega = link.megaType === 'services';
                const cols = isServicesMega ? svcCols : transCols;
                const preview = isServicesMega ? (svcPreview.title ? svcPreview : services[0]) : (transPreview.title ? transPreview : translationServices[0]);
                const setPreview = isServicesMega ? setSvcPreview : setTransPreview;
                const megaKey = isServicesMega ? 'services' : 'translation';

                return (
                  <div 
                    key={link.id}
                    className={`nav-item has-mega ${activeMega === megaKey ? 'mega-open' : ''}`}
                    onMouseEnter={() => handleMouseEnterMega(megaKey)}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <NavLink 
                      to={link.path} 
                      className="nav-link" 
                      onClick={(e) => handleMegaClick(e, megaKey, link.path)}
                    >
                      {link.label} <i className={`fas fa-chevron-down ${activeMega === megaKey ? 'fa-rotate-180' : ''}`}></i>
                    </NavLink>

                    <div 
                      className="mega-panel"
                      onMouseEnter={() => handleMouseEnterMega(megaKey)}
                      onMouseLeave={handleMouseLeaveMega}
                    >
                      <div className="mega-left">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                          <NavLink to={link.path} className="mega-head" onClick={closeMobile} style={{ marginBottom: 0 }}>
                            {link.label} <i className="fas fa-arrow-right"></i>
                          </NavLink>
                          {isAdmin && (
                            <NavLink to="/admin" className="badge-admin-edit-link" onClick={closeMobile}>
                              <i className="fas fa-pen-square"></i> Manage {link.label} (Admin)
                            </NavLink>
                          )}
                        </div>

                        <div className="mega-cols">
                          {cols.map((colItems, colIdx) => (
                            <div className="mega-col" key={colIdx}>
                              {colItems.map(item => (
                                <div
                                  key={item.key || item.path}
                                  className={`mega-item ${preview?.key === item.key ? 'mgi-active' : ''}`}
                                  onMouseEnter={() => setPreview(item)}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    closeMobile();
                                    if (isAdmin) {
                                      navigate('/admin', { state: { editKey: item.key, editType: isServicesMega ? 'services' : 'translation' } });
                                    } else {
                                      navigate(item.path);
                                    }
                                  }}
                                >
                                  <div className="mi-icon"><i className={`fas ${item.icon || 'fa-arrow-right'}`}></i></div>
                                  <div style={{ flex: 1 }}>
                                    <strong>{item.title}</strong>
                                    <span>{item.sub}</span>
                                  </div>
                                  {isAdmin && (
                                    <span className="mi-admin-edit-badge" title="Click to Edit in Admin">
                                      <i className="fas fa-pen"></i> Edit
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mega-right">
                        <div className="mega-preview-title">{preview?.title || 'Service Overview'}</div>
                        <div className="mega-illus">
                          {preview?.image ? (
                            <img 
                              src={preview.image} 
                              alt={preview.title} 
                              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                            />
                          ) : (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                              <i className={`fas ${preview?.icon || 'fa-concierge-bell'}`} style={{ fontSize: '48px', color: '#e8651a', marginBottom: '10px' }}></i>
                              <p style={{ fontSize: '13px' }}>{preview?.sub}</p>
                            </div>
                          )}
                        </div>
                        {isAdmin && (
                          <button 
                            onClick={() => { closeMobile(); navigate('/admin'); }}
                            style={{
                              marginTop: '10px',
                              background: '#e8651a',
                              color: '#fff',
                              border: 'none',
                              padding: '8px 16px',
                              borderRadius: '50px',
                              fontSize: '12px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <i className="fas fa-edit"></i> Edit Services in Admin
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink key={link.id} to={link.path} className="nav-link" onClick={closeMobile}>
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
