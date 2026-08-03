import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import Logo from '../../components/Logo';
import SEO from '../../components/SEO';

export default function AdminDashboard() {
  const {
    services,
    translationServices,
    menuLinks,
    heroContent,
    topbarContent,
    leads,
    isAdmin,
    adminCreds,
    updateAdminCreds,
    logoutAdmin,
    addService,
    updateService,
    deleteService,
    addMenuLink,
    updateMenuLink,
    deleteMenuLink,
    updateHero,
    updateTopbar,
    deleteLead,
    resetToDefaults
  } = useData();

  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Security Form state
  const [secForm, setSecForm] = useState({
    username: adminCreds.username,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    securityQuestion: adminCreds.securityQuestion || 'What is your company brand name?',
    securityAnswer: adminCreds.securityAnswer || 'visma'
  });

  // Password visibility toggles for security tab
  const [showCredPass, setShowCredPass] = useState(false);
  const [showCurrPass, setShowCurrPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  // Keep secForm username/question/answer in sync if adminCreds changes externally
  useEffect(() => {
    setSecForm(prev => ({
      ...prev,
      username: adminCreds.username,
      securityQuestion: adminCreds.securityQuestion || prev.securityQuestion,
      securityAnswer: adminCreds.securityAnswer || prev.securityAnswer,
    }));
  }, [adminCreds.username, adminCreds.securityQuestion, adminCreds.securityAnswer]);

  const handleSaveSecurity = (e) => {
    e.preventDefault();
    if (secForm.currentPassword !== adminCreds.password) {
      showToast('⚠️ Incorrect current password!');
      return;
    }
    if (secForm.newPassword && secForm.newPassword !== secForm.confirmPassword) {
      showToast('⚠️ New password and confirmation do not match!');
      return;
    }
    const finalPassword = secForm.newPassword ? secForm.newPassword : adminCreds.password;
    updateAdminCreds(secForm.username, finalPassword, secForm.securityQuestion, secForm.securityAnswer);
    showToast('✅ Admin credentials & security settings updated successfully!');
    setSecForm(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
  };

  // Service Edit / Add Modal state
  const [showSvcModal, setShowSvcModal] = useState(false);
  const [svcModalType, setSvcModalType] = useState('services'); // 'services' or 'translation'
  const [editSvcKey, setEditSvcKey] = useState(null);
  const [svcForm, setSvcForm] = useState({
    title: '', sub: '', key: '', path: '', icon: 'fa-cog', image: '', desc: ''
  });

  // Handle incoming direct edit request from website dropdown
  useEffect(() => {
    if (location.state?.editKey) {
      const { editKey, editType } = location.state;
      const targetList = editType === 'services' ? services : translationServices;
      const targetSvc = targetList.find(s => s.key === editKey);
      if (targetSvc) {
        setSvcModalType(editType);
        setEditSvcKey(editKey);
        setSvcForm({ ...targetSvc });
        setShowSvcModal(true);
        setActiveTab(editType);
      }
    }
  }, [location.state, services, translationServices]);

  // Menu Link Edit / Add state
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [editMenuId, setEditMenuId] = useState(null);
  const [menuForm, setMenuForm] = useState({
    label: '', path: '', isMega: false, megaType: 'services', visible: true
  });

  // Hero form state
  const [heroForm, setHeroForm] = useState({ ...heroContent });

  // Topbar form state
  const [topbarForm, setTopbarForm] = useState({ ...topbarContent });

  const [notification, setNotification] = useState('');

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3500);
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  // --- SERVICE MODAL HANDLERS ---
  const openAddSvcModal = (type) => {
    setSvcModalType(type);
    setEditSvcKey(null);
    setSvcForm({ title: '', sub: '', key: '', path: '', icon: 'fa-cog', image: '', desc: '' });
    setShowSvcModal(true);
  };

  const openEditSvcModal = (svc, type) => {
    setSvcModalType(type);
    setEditSvcKey(svc.key);
    setSvcForm({ ...svc });
    setShowSvcModal(true);
  };

  const handleSaveService = (e) => {
    e.preventDefault();
    const finalKey = svcForm.key || svcForm.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const finalPath = svcForm.path || `/${finalKey}`;
    const payload = { ...svcForm, key: finalKey, path: finalPath };

    if (editSvcKey) {
      updateService(editSvcKey, payload, svcModalType);
      showToast(`Service "${payload.title}" updated successfully!`);
    } else {
      addService(payload, svcModalType);
      showToast(`New Service "${payload.title}" created successfully!`);
    }
    setShowSvcModal(false);
  };

  const handleDeleteService = (key, title, type) => {
    if (window.confirm(`Are you sure you want to delete service "${title}"?`)) {
      deleteService(key, type);
      showToast(`Service "${title}" deleted.`);
    }
  };

  // --- MENU LINK HANDLERS ---
  const openAddMenuModal = () => {
    setEditMenuId(null);
    setMenuForm({ label: '', path: '', isMega: false, megaType: 'services', visible: true });
    setShowMenuModal(true);
  };

  const openEditMenuModal = (link) => {
    setEditMenuId(link.id);
    setMenuForm({ ...link });
    setShowMenuModal(true);
  };

  const handleSaveMenu = (e) => {
    e.preventDefault();
    if (editMenuId) {
      updateMenuLink(editMenuId, menuForm);
      showToast(`Navigation Link "${menuForm.label}" updated!`);
    } else {
      addMenuLink(menuForm);
      showToast(`New Navigation Link "${menuForm.label}" added!`);
    }
    setShowMenuModal(false);
  };

  const handleDeleteMenu = (id, label) => {
    if (window.confirm(`Delete navigation link "${label}"?`)) {
      deleteMenuLink(id);
      showToast(`Navigation Link "${label}" deleted.`);
    }
  };

  // --- HERO & TOPBAR SAVES ---
  const handleSaveHero = (e) => {
    e.preventDefault();
    updateHero(heroForm);
    showToast('Home Hero Banner content saved!');
  };

  const handleSaveTopbar = (e) => {
    e.preventDefault();
    updateTopbar(topbarForm);
    showToast('Top Bar details saved!');
  };

  return (
    <div className="admin-dashboard-container">
      <SEO title="Admin Control Dashboard - Visma Translation" description="Manage services, navigation links, hero content, and inquiries." />

      {notification && (
        <div className="admin-toast-notification">
          <i className="fas fa-check-circle"></i> {notification}
        </div>
      )}

      {/* DASHBOARD HEADER */}
      <header className="admin-dash-header">
        <div className="admin-dash-header-inner">
          <div className="admin-dash-brand">
            <button
              className="admin-hamburger"
              onClick={() => setSidebarOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              <span></span><span></span><span></span>
            </button>
            <Logo light={true} />
            <span className="admin-badge"><i className="fas fa-user-shield"></i> Admin Panel</span>
          </div>
          <div className="admin-dash-actions">
            <Link to="/" target="_blank" className="btn-dash-view">
              <i className="fas fa-external-link-alt"></i> <span className="btn-dash-label">View Live Website</span>
            </Link>
            <button onClick={() => { if (window.confirm('Reset all content to factory defaults?')) { resetToDefaults(); showToast('Reset to default content.'); } }} className="btn-dash-reset" title="Reset to Defaults">
              <i className="fas fa-undo"></i> <span className="btn-dash-label">Reset Data</span>
            </button>
            <button onClick={handleLogout} className="btn-dash-logout">
              <i className="fas fa-sign-out-alt"></i> <span className="btn-dash-label">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* DASHBOARD BODY */}
      <div className="admin-dash-body">
        {/* SIDEBAR OVERLAY for mobile */}
        {sidebarOpen && (
          <div className="admin-sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}
        {/* SIDEBAR TABS */}
        <aside className={`admin-sidebar${sidebarOpen ? ' sidebar-open' : ''}`}>
          <div className="admin-nav-title">CMS NAVIGATION</div>
          <button className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}>
            <i className="fas fa-chart-line"></i> Dashboard Overview
          </button>
          <button className={`admin-tab-btn ${activeTab === 'services' ? 'active' : ''}`} onClick={() => { setActiveTab('services'); setSidebarOpen(false); }}>
            <i className="fas fa-th-large"></i> Digital Services ({services.length})
          </button>
          <button className={`admin-tab-btn ${activeTab === 'translation' ? 'active' : ''}`} onClick={() => { setActiveTab('translation'); setSidebarOpen(false); }}>
            <i className="fas fa-language"></i> Translation Services ({translationServices.length})
          </button>
          <button className={`admin-tab-btn ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => { setActiveTab('menu'); setSidebarOpen(false); }}>
            <i className="fas fa-bars"></i> Navbar Menu Links ({menuLinks.length})
          </button>
          <button className={`admin-tab-btn ${activeTab === 'hero' ? 'active' : ''}`} onClick={() => { setActiveTab('hero'); setSidebarOpen(false); }}>
            <i className="fas fa-image"></i> Hero Banner &amp; Header
          </button>
          <button className={`admin-tab-btn ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => { setActiveTab('leads'); setSidebarOpen(false); }}>
            <i className="fas fa-envelope-open-text"></i> Customer Inquiries ({leads.length})
          </button>
          <button className={`admin-tab-btn ${activeTab === 'security' ? 'active' : ''}`} onClick={() => { setActiveTab('security'); setSidebarOpen(false); }}>
            <i className="fas fa-user-lock"></i> Account &amp; Security
          </button>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="admin-main-content">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head">
                <h2>System Overview</h2>
                <p>Welcome, Administrator. Here is a live summary of your website content and services.</p>
              </div>

              <div className="admin-stats-grid">
                <div className="admin-stat-card">
                  <div className="asc-icon orange"><i className="fas fa-concierge-bell"></i></div>
                  <div className="asc-data">
                    <h3>{services.length}</h3>
                    <span>Digital &amp; Media Services</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="asc-icon green"><i className="fas fa-language"></i></div>
                  <div className="asc-data">
                    <h3>{translationServices.length}</h3>
                    <span>Translation Domains</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="asc-icon blue"><i className="fas fa-bars"></i></div>
                  <div className="asc-data">
                    <h3>{menuLinks.filter(m => m.visible).length}</h3>
                    <span>Active Header Links</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="asc-icon purple"><i className="fas fa-user-clock"></i></div>
                  <div className="asc-data">
                    <h3>{leads.length}</h3>
                    <span>Received Inquiries</span>
                  </div>
                </div>
              </div>

              <div className="admin-quick-section">
                <h3>Quick Management Shortcuts</h3>
                <div className="admin-shortcuts-grid">
                  <button onClick={() => openAddSvcModal('services')} className="asc-shortcut-btn">
                    <i className="fas fa-plus-circle"></i> Add New Digital Service
                  </button>
                  <button onClick={() => openAddSvcModal('translation')} className="asc-shortcut-btn">
                    <i className="fas fa-plus-square"></i> Add New Translation Service
                  </button>
                  <button onClick={() => setActiveTab('hero')} className="asc-shortcut-btn">
                    <i className="fas fa-edit"></i> Edit Home Hero Text
                  </button>
                  <button onClick={() => setActiveTab('menu')} className="asc-shortcut-btn">
                    <i className="fas fa-link"></i> Add Navigation Menu Link
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIGITAL SERVICES MANAGER */}
          {activeTab === 'services' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head flex-between">
                <div>
                  <h2>Digital &amp; Media Services ({services.length})</h2>
                  <p>Add, edit, or remove the 10 digital services offered on the website and in mega dropdowns.</p>
                </div>
                <button onClick={() => openAddSvcModal('services')} className="btn-admin-add">
                  <i className="fas fa-plus"></i> Add New Service
                </button>
              </div>

              {/* Desktop table */}
              <div className="admin-table-responsive admin-desktop-only">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Image / Icon</th>
                      <th>Service Title</th>
                      <th>Sub Title</th>
                      <th>URL Path</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map(s => (
                      <tr key={s.key}>
                        <td data-label="Image / Icon">
                          <div className="admin-td-thumb">
                            {s.image ? <img src={s.image} alt={s.title} /> : <div className="admin-icon-box"><i className={`fas ${s.icon}`}></i></div>}
                          </div>
                        </td>
                        <td data-label="Service Title"><strong>{s.title}</strong></td>
                        <td data-label="Sub Title">{s.sub}</td>
                        <td data-label="URL Path"><code>{s.path}</code></td>
                        <td data-label="Description" className="td-desc">{s.desc}</td>
                        <td data-label="Actions">
                          <div className="td-actions">
                            <button onClick={() => openEditSvcModal(s, 'services')} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                            <button onClick={() => handleDeleteService(s.key, s.title, 'services')} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="admin-mobile-only admin-card-list">
                {services.map(s => (
                  <div className="admin-row-card" key={s.key}>
                    <div className="arc-header">
                      <div className="admin-td-thumb">
                        {s.image ? <img src={s.image} alt={s.title} /> : <div className="admin-icon-box"><i className={`fas ${s.icon}`}></i></div>}
                      </div>
                      <div className="arc-title">
                        <strong>{s.title}</strong>
                        <span>{s.sub}</span>
                      </div>
                    </div>
                    <div className="arc-meta">
                      <span className="arc-label">URL Path</span>
                      <code>{s.path}</code>
                    </div>
                    <div className="arc-meta">
                      <span className="arc-label">Description</span>
                      <p>{s.desc}</p>
                    </div>
                    <div className="arc-actions">
                      <button onClick={() => openEditSvcModal(s, 'services')} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                      <button onClick={() => handleDeleteService(s.key, s.title, 'services')} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TRANSLATION SERVICES MANAGER */}
          {activeTab === 'translation' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head flex-between">
                <div>
                  <h2>Translation Services ({translationServices.length})</h2>
                  <p>Manage the 8 specialized document translation domains.</p>
                </div>
                <button onClick={() => openAddSvcModal('translation')} className="btn-admin-add">
                  <i className="fas fa-plus"></i> Add Translation Service
                </button>
              </div>

              {/* Desktop table */}
              <div className="admin-table-responsive admin-desktop-only">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Image / Icon</th><th>Service Title</th><th>Sub Title</th><th>URL Path</th><th>Description</th><th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {translationServices.map(s => (
                      <tr key={s.key}>
                        <td><div className="admin-td-thumb">{s.image ? <img src={s.image} alt={s.title} /> : <div className="admin-icon-box"><i className={`fas ${s.icon}`}></i></div>}</div></td>
                        <td><strong>{s.title}</strong></td>
                        <td>{s.sub}</td>
                        <td><code>{s.path}</code></td>
                        <td className="td-desc">{s.desc}</td>
                        <td><div className="td-actions">
                          <button onClick={() => openEditSvcModal(s, 'translation')} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                          <button onClick={() => handleDeleteService(s.key, s.title, 'translation')} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                        </div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="admin-mobile-only admin-card-list">
                {translationServices.map(s => (
                  <div className="admin-row-card" key={s.key}>
                    <div className="arc-header">
                      <div className="admin-td-thumb">{s.image ? <img src={s.image} alt={s.title} /> : <div className="admin-icon-box"><i className={`fas ${s.icon}`}></i></div>}</div>
                      <div className="arc-title"><strong>{s.title}</strong><span>{s.sub}</span></div>
                    </div>
                    <div className="arc-meta"><span className="arc-label">URL Path</span><code>{s.path}</code></div>
                    <div className="arc-meta"><span className="arc-label">Description</span><p>{s.desc}</p></div>
                    <div className="arc-actions">
                      <button onClick={() => openEditSvcModal(s, 'translation')} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                      <button onClick={() => handleDeleteService(s.key, s.title, 'translation')} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: NAVBAR MENU LINKS MANAGER (REFERENCE PHOTO 2) */}
          {activeTab === 'menu' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head flex-between">
                <div>
                  <h2>Header Navigation Links (Photo 2)</h2>
                  <p>Add, edit, reorder, or remove main navbar links in the top menu.</p>
                </div>
                <button onClick={openAddMenuModal} className="btn-admin-add">
                  <i className="fas fa-plus"></i> Add Menu Link
                </button>
              </div>

              {/* Desktop table */}
              <div className="admin-table-responsive admin-desktop-only">
                <table className="admin-table">
                  <thead>
                    <tr><th>Link Label</th><th>Path URL</th><th>Dropdown Type</th><th>Status</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {menuLinks.map(m => (
                      <tr key={m.id}>
                        <td><strong>{m.label}</strong></td>
                        <td><code>{m.path}</code></td>
                        <td>{m.isMega ? <span className="badge-mega"><i className="fas fa-layer-group"></i> Mega ({m.megaType})</span> : <span className="badge-simple">Standard</span>}</td>
                        <td><button onClick={() => updateMenuLink(m.id, { visible: !m.visible })} className={`status-toggle ${m.visible ? 'active' : 'hidden'}`}>{m.visible ? 'Visible' : 'Hidden'}</button></td>
                        <td><div className="td-actions">
                          <button onClick={() => openEditMenuModal(m)} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                          <button onClick={() => handleDeleteMenu(m.id, m.label)} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                        </div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="admin-mobile-only admin-card-list">
                {menuLinks.map(m => (
                  <div className="admin-row-card" key={m.id}>
                    <div className="arc-header">
                      <div className="arc-icon-circle"><i className="fas fa-link"></i></div>
                      <div className="arc-title">
                        <strong>{m.label}</strong>
                        <code style={{ fontSize: '11px' }}>{m.path}</code>
                      </div>
                    </div>
                    <div className="arc-meta arc-row">
                      <div>
                        <span className="arc-label">Type</span>
                        {m.isMega ? <span className="badge-mega"><i className="fas fa-layer-group"></i> Mega ({m.megaType})</span> : <span className="badge-simple">Standard</span>}
                      </div>
                      <div>
                        <span className="arc-label">Status</span>
                        <button onClick={() => updateMenuLink(m.id, { visible: !m.visible })} className={`status-toggle ${m.visible ? 'active' : 'hidden'}`}>{m.visible ? 'Visible' : 'Hidden'}</button>
                      </div>
                    </div>
                    <div className="arc-actions">
                      <button onClick={() => openEditMenuModal(m)} className="btn-act-edit"><i className="fas fa-pen"></i> Edit</button>
                      <button onClick={() => handleDeleteMenu(m.id, m.label)} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: HERO BANNER & PAGE CONTENT MANAGER (REFERENCE PHOTO 1) */}
          {activeTab === 'hero' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head">
                <h2>Homepage Content &amp; Hero Banner Manager</h2>
                <p>Modify the text, announcements, section headers, badges, and image shown on the main homepage.</p>
              </div>

              <form onSubmit={handleSaveHero} className="admin-card-form">
                <h3 className="form-section-title"><i className="fas fa-star"></i> Home Hero Banner Controls</h3>
                
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Hero Tagline / Small Tag</label>
                    <input type="text" value={heroForm.tag || ''} onChange={e => setHeroForm({ ...heroForm, tag: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Main Title (White)</label>
                    <input type="text" value={heroForm.mainTitle || ''} onChange={e => setHeroForm({ ...heroForm, mainTitle: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Sub Title (Orange Accent)</label>
                    <input type="text" value={heroForm.subTitle || ''} onChange={e => setHeroForm({ ...heroForm, subTitle: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Hero Image URL</label>
                    <input type="text" value={heroForm.heroImage || ''} onChange={e => setHeroForm({ ...heroForm, heroImage: e.target.value })} required />
                  </div>
                </div>

                <div className="admin-fg">
                  <label>Hero Paragraph Description</label>
                  <textarea rows="3" value={heroForm.desc || ''} onChange={e => setHeroForm({ ...heroForm, desc: e.target.value })} required />
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}><i className="fas fa-bullhorn"></i> Special Homepage Announcement / Notice Banner</h3>
                <div className="admin-fg-check" style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}>
                    <input 
                      type="checkbox" 
                      checked={heroForm.showAnnouncement !== false} 
                      onChange={e => setHeroForm({ ...heroForm, showAnnouncement: e.target.checked })} 
                    />
                    Display Announcement Banner on Homepage
                  </label>
                </div>
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Announcement Tag / Badge Title</label>
                    <input type="text" value={heroForm.announcementTitle || ''} onChange={e => setHeroForm({ ...heroForm, announcementTitle: e.target.value })} placeholder="e.g. Special Offer / Notice" />
                  </div>
                  <div className="admin-fg">
                    <label>Announcement Text / Description</label>
                    <input type="text" value={heroForm.announcementText || ''} onChange={e => setHeroForm({ ...heroForm, announcementText: e.target.value })} placeholder="e.g. Express 2-Hour Document Translation available across India!" />
                  </div>
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}><i className="fas fa-info-circle"></i> "Why Choose Visma" Section &amp; Extra Info</h3>
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Section Title</label>
                    <input type="text" value={heroForm.aboutTitle || ''} onChange={e => setHeroForm({ ...heroForm, aboutTitle: e.target.value })} placeholder="e.g. Why Choose Visma Translation?" />
                  </div>
                  <div className="admin-fg">
                    <label>Section Subtitle / Brief Description</label>
                    <input type="text" value={heroForm.aboutDesc || ''} onChange={e => setHeroForm({ ...heroForm, aboutDesc: e.target.value })} placeholder="e.g. ISO 9001:2015 Certified translation agency..." />
                  </div>
                </div>
                <div className="admin-fg">
                  <label>Extra Information / Highlight Box Content</label>
                  <textarea rows="3" value={heroForm.extraInfoBox || ''} onChange={e => setHeroForm({ ...heroForm, extraInfoBox: e.target.value })} placeholder="Additional text or details to feature on the homepage..." />
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}><i className="fas fa-chart-line"></i> Homepage Counter Statistics</h3>
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Stat 1 (Value &amp; Label)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" style={{ width: '90px' }} value={heroForm.stat1Num || '500+'} onChange={e => setHeroForm({ ...heroForm, stat1Num: e.target.value })} />
                      <input type="text" value={heroForm.stat1Label || 'Happy Global Clients'} onChange={e => setHeroForm({ ...heroForm, stat1Label: e.target.value })} />
                    </div>
                  </div>
                  <div className="admin-fg">
                    <label>Stat 2 (Value &amp; Label)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" style={{ width: '90px' }} value={heroForm.stat2Num || '1,200+'} onChange={e => setHeroForm({ ...heroForm, stat2Num: e.target.value })} />
                      <input type="text" value={heroForm.stat2Label || 'Completed Projects'} onChange={e => setHeroForm({ ...heroForm, stat2Label: e.target.value })} />
                    </div>
                  </div>
                  <div className="admin-fg">
                    <label>Stat 3 (Value &amp; Label)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" style={{ width: '90px' }} value={heroForm.stat3Num || '50M+'} onChange={e => setHeroForm({ ...heroForm, stat3Num: e.target.value })} />
                      <input type="text" value={heroForm.stat3Label || 'Words Translated'} onChange={e => setHeroForm({ ...heroForm, stat3Label: e.target.value })} />
                    </div>
                  </div>
                  <div className="admin-fg">
                    <label>Stat 4 (Value &amp; Label)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="text" style={{ width: '90px' }} value={heroForm.stat4Num || '100+'} onChange={e => setHeroForm({ ...heroForm, stat4Num: e.target.value })} />
                      <input type="text" value={heroForm.stat4Label || 'Native Translators'} onChange={e => setHeroForm({ ...heroForm, stat4Label: e.target.value })} />
                    </div>
                  </div>
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}><i className="fas fa-tags"></i> Floating Feature Badges</h3>
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Badge 1 (e.g. 99.9% Accuracy)</label>
                    <input type="text" value={heroForm.badge1 || ''} onChange={e => setHeroForm({ ...heroForm, badge1: e.target.value })} />
                  </div>
                  <div className="admin-fg">
                    <label>Badge 2 (e.g. 100+ Languages)</label>
                    <input type="text" value={heroForm.badge2 || ''} onChange={e => setHeroForm({ ...heroForm, badge2: e.target.value })} />
                  </div>
                  <div className="admin-fg">
                    <label>Badge 3 (e.g. 24/7 Support)</label>
                    <input type="text" value={heroForm.badge3 || ''} onChange={e => setHeroForm({ ...heroForm, badge3: e.target.value })} />
                  </div>
                  <div className="admin-fg">
                    <label>Badge 4 (e.g. ISO 9001:2015 Certified)</label>
                    <input type="text" value={heroForm.badge4 || ''} onChange={e => setHeroForm({ ...heroForm, badge4: e.target.value })} />
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <button type="submit" className="btn-admin-save">
                    <i className="fas fa-save"></i> Save All Homepage Content Changes
                  </button>
                </div>
              </form>

              <form onSubmit={handleSaveTopbar} className="admin-card-form" style={{ marginTop: '32px' }}>
                <h3 className="form-section-title"><i className="fas fa-phone-alt"></i> Top Bar Contact Details</h3>
                
                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Phone Number</label>
                    <input type="text" value={topbarForm.phone} onChange={e => setTopbarForm({ ...topbarForm, phone: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Email Address</label>
                    <input type="email" value={topbarForm.email} onChange={e => setTopbarForm({ ...topbarForm, email: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Working Hours</label>
                    <input type="text" value={topbarForm.hours} onChange={e => setTopbarForm({ ...topbarForm, hours: e.target.value })} required />
                  </div>

                  <div className="admin-fg">
                    <label>Location / City</label>
                    <input type="text" value={topbarForm.location} onChange={e => setTopbarForm({ ...topbarForm, location: e.target.value })} required />
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn-admin-save">
                    <i className="fas fa-save"></i> Save Top Bar Details
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 6: CUSTOMER LEADS & INQUIRIES */}
          {/* TAB 6: CUSTOMER LEADS & INQUIRIES */}
          {activeTab === 'leads' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head">
                <h2>Customer Inquiries &amp; Quote Requests ({leads.length})</h2>
                <p>View quote submissions sent through the contact form.</p>
              </div>

              {/* Desktop table */}
              <div className="admin-table-responsive admin-desktop-only">
                <table className="admin-table">
                  <thead>
                    <tr><th>Date</th><th>Customer Name</th><th>Email &amp; Phone</th><th>Service</th><th>Message</th><th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {leads.map(l => (
                      <tr key={l.id}>
                        <td><span className="badge-date">{l.date}</span></td>
                        <td><strong>{l.name}</strong></td>
                        <td><div>{l.email}</div><small style={{ color: '#e8651a' }}>{l.phone}</small></td>
                        <td><span className="badge-svc">{l.service || 'General Quote'}</span></td>
                        <td className="td-desc">{l.message}</td>
                        <td><button onClick={() => deleteLead(l.id)} className="btn-act-delete"><i className="fas fa-trash-alt"></i> Delete</button></td>
                      </tr>
                    ))}
                    {leads.length === 0 && (
                      <tr><td colSpan="6" style={{ textAlign: 'center', padding: '30px' }}>No inquiries received yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="admin-mobile-only admin-card-list">
                {leads.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '30px', color: '#999' }}>No inquiries received yet.</div>
                )}
                {leads.map(l => (
                  <div className="admin-row-card" key={l.id}>
                    <div className="arc-header">
                      <div className="arc-icon-circle" style={{ background: 'rgba(41,128,185,0.12)', color: '#2980b9' }}><i className="fas fa-user"></i></div>
                      <div className="arc-title">
                        <strong>{l.name}</strong>
                        <span className="badge-date">{l.date}</span>
                      </div>
                    </div>
                    <div className="arc-meta"><span className="arc-label">Email</span><span>{l.email}</span></div>
                    <div className="arc-meta"><span className="arc-label">Phone</span><span style={{ color: '#e8651a' }}>{l.phone}</span></div>
                    <div className="arc-meta"><span className="arc-label">Service</span><span className="badge-svc">{l.service || 'General Quote'}</span></div>
                    <div className="arc-meta"><span className="arc-label">Message</span><p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{l.message}</p></div>
                    <div className="arc-actions">
                      <button onClick={() => deleteLead(l.id)} className="btn-act-delete" style={{ flex: 1, justifyContent: 'center' }}><i className="fas fa-trash-alt"></i> Delete Inquiry</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* TAB 7: ACCOUNT & SECURITY */}
          {activeTab === 'security' && (
            <div className="admin-tab-pane">
              <div className="admin-pane-head">
                <h2>Account &amp; Security Settings</h2>
                <p>Update your admin username, password, and security recovery question.</p>
              </div>

              <form onSubmit={handleSaveSecurity} className="admin-card-form">
                {/* CURRENT CREDENTIALS DISPLAY */}
                <div className="admin-cred-info">
                  <div className="admin-cred-row">
                    <i className="fas fa-user-circle"></i>
                    <div>
                      <span className="cred-label">Current Username</span>
                      <strong className="cred-value">{adminCreds.username}</strong>
                    </div>
                  </div>
                  <div className="admin-cred-row">
                    <i className="fas fa-key"></i>
                    <div style={{ flex: 1 }}>
                      <span className="cred-label">Current Password</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong className="cred-value" style={{ letterSpacing: showCredPass ? '1px' : '3px' }}>
                          {showCredPass ? adminCreds.password : '•'.repeat(adminCreds.password?.length || 6)}
                        </strong>
                        <button
                          type="button"
                          onClick={() => setShowCredPass(v => !v)}
                          className="pass-eye-btn"
                          title={showCredPass ? 'Hide password' : 'Show password'}
                        >
                          <i className={`fas ${showCredPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}>
                  <i className="fas fa-id-badge"></i> Change Login Credentials
                </h3>

                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label><i className="fas fa-user"></i> New Username</label>
                    <input
                      type="text"
                      placeholder="Enter new username"
                      value={secForm.username}
                      onChange={e => setSecForm({ ...secForm, username: e.target.value })}
                      required
                    />
                  </div>
                  <div className="admin-fg">
                    <label><i className="fas fa-lock"></i> Current Password <span style={{ color: '#e8651a' }}>*</span></label>
                    <div className="pass-input-wrap">
                      <input
                        type={showCurrPass ? 'text' : 'password'}
                        placeholder="Required to save any changes"
                        value={secForm.currentPassword}
                        onChange={e => setSecForm({ ...secForm, currentPassword: e.target.value })}
                        required
                      />
                      <button type="button" className="pass-eye-btn" onClick={() => setShowCurrPass(v => !v)} title={showCurrPass ? 'Hide' : 'Show'}>
                        <i className={`fas ${showCurrPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>
                  <div className="admin-fg">
                    <label><i className="fas fa-lock-open"></i> New Password <span style={{ color: '#888', fontSize: '11px' }}>(leave blank to keep current)</span></label>
                    <div className="pass-input-wrap">
                      <input
                        type={showNewPass ? 'text' : 'password'}
                        placeholder="Enter new password"
                        value={secForm.newPassword}
                        onChange={e => setSecForm({ ...secForm, newPassword: e.target.value })}
                      />
                      <button type="button" className="pass-eye-btn" onClick={() => setShowNewPass(v => !v)} title={showNewPass ? 'Hide' : 'Show'}>
                        <i className={`fas ${showNewPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>
                  <div className="admin-fg">
                    <label><i className="fas fa-check-double"></i> Confirm New Password</label>
                    <div className="pass-input-wrap">
                      <input
                        type={showConfPass ? 'text' : 'password'}
                        placeholder="Re-enter new password"
                        value={secForm.confirmPassword}
                        onChange={e => setSecForm({ ...secForm, confirmPassword: e.target.value })}
                        disabled={!secForm.newPassword}
                      />
                      <button type="button" className="pass-eye-btn" onClick={() => setShowConfPass(v => !v)} disabled={!secForm.newPassword} title={showConfPass ? 'Hide' : 'Show'}>
                        <i className={`fas ${showConfPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="form-section-title" style={{ marginTop: '28px' }}>
                  <i className="fas fa-shield-alt"></i> Security Recovery Question
                </h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '18px' }}>
                  This question is used on the login page if you forget your password.
                </p>

                <div className="form-grid-2">
                  <div className="admin-fg">
                    <label>Security Question</label>
                    <input
                      type="text"
                      placeholder="e.g. What is your company brand name?"
                      value={secForm.securityQuestion}
                      onChange={e => setSecForm({ ...secForm, securityQuestion: e.target.value })}
                      required
                    />
                  </div>
                  <div className="admin-fg">
                    <label>Security Answer</label>
                    <input
                      type="text"
                      placeholder="Your answer (case-insensitive)"
                      value={secForm.securityAnswer}
                      onChange={e => setSecForm({ ...secForm, securityAnswer: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginTop: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <button type="submit" className="btn-admin-save">
                    <i className="fas fa-save"></i> Save Security Settings
                  </button>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    <i className="fas fa-info-circle"></i> Current password is always required to confirm changes.
                  </span>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* SERVICE ADD/EDIT MODAL */}
      {showSvcModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-head">
              <h3>{editSvcKey ? 'Edit Service' : 'Add New Service'} ({svcModalType === 'services' ? 'Digital Service' : 'Translation Service'})</h3>
              <button onClick={() => setShowSvcModal(false)} className="modal-close-btn">&times;</button>
            </div>
            <form onSubmit={handleSaveService} className="admin-modal-form">
              <div className="form-grid-2">
                <div className="admin-fg">
                  <label>Service Title</label>
                  <input type="text" placeholder="e.g. AI Translation" value={svcForm.title} onChange={e => setSvcForm({ ...svcForm, title: e.target.value })} required />
                </div>
                <div className="admin-fg">
                  <label>Subtitle / Tagline</label>
                  <input type="text" placeholder="e.g. Next-gen MTPE" value={svcForm.sub} onChange={e => setSvcForm({ ...svcForm, sub: e.target.value })} required />
                </div>
                <div className="admin-fg">
                  <label>Key Identifier (Unique)</label>
                  <input type="text" placeholder="e.g. ai-translation" value={svcForm.key} onChange={e => setSvcForm({ ...svcForm, key: e.target.value })} required />
                </div>
                <div className="admin-fg">
                  <label>FontAwesome Icon Class</label>
                  <input type="text" placeholder="fa-brain" value={svcForm.icon} onChange={e => setSvcForm({ ...svcForm, icon: e.target.value })} required />
                </div>
              </div>

              <div className="admin-fg">
                <label>Image URL (Optional)</label>
                <input type="text" placeholder="https://images.unsplash.com/..." value={svcForm.image} onChange={e => setSvcForm({ ...svcForm, image: e.target.value })} />
              </div>

              <div className="admin-fg">
                <label>Service Description</label>
                <textarea rows="3" placeholder="Brief summary of service..." value={svcForm.desc} onChange={e => setSvcForm({ ...svcForm, desc: e.target.value })} required />
              </div>

              <div className="admin-modal-actions">
                <button type="button" onClick={() => setShowSvcModal(false)} className="btn-admin-cancel">Cancel</button>
                <button type="submit" className="btn-admin-save">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MENU ITEM ADD/EDIT MODAL */}
      {showMenuModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-head">
              <h3>{editMenuId ? 'Edit Menu Link' : 'Add New Menu Link'}</h3>
              <button onClick={() => setShowMenuModal(false)} className="modal-close-btn">&times;</button>
            </div>
            <form onSubmit={handleSaveMenu} className="admin-modal-form">
              <div className="form-grid-2">
                <div className="admin-fg">
                  <label>Link Label Text</label>
                  <input type="text" placeholder="e.g. Careers" value={menuForm.label} onChange={e => setMenuForm({ ...menuForm, label: e.target.value })} required />
                </div>
                <div className="admin-fg">
                  <label>URL Path</label>
                  <input type="text" placeholder="e.g. /careers" value={menuForm.path} onChange={e => setMenuForm({ ...menuForm, path: e.target.value })} required />
                </div>
              </div>

              <div className="admin-fg-checkbox">
                <label>
                  <input type="checkbox" checked={menuForm.isMega} onChange={e => setMenuForm({ ...menuForm, isMega: e.target.checked })} />
                  Enable Mega Dropdown Menu
                </label>
              </div>

              {menuForm.isMega && (
                <div className="admin-fg">
                  <label>Dropdown Content Source</label>
                  <select value={menuForm.megaType} onChange={e => setMenuForm({ ...menuForm, megaType: e.target.value })}>
                    <option value="services">Digital Services (10 Services)</option>
                    <option value="translation">Translation Services (8 Services)</option>
                  </select>
                </div>
              )}

              <div className="admin-modal-actions">
                <button type="button" onClick={() => setShowMenuModal(false)} className="btn-admin-cancel">Cancel</button>
                <button type="submit" className="btn-admin-save">Save Menu Link</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
