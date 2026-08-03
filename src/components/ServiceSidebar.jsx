import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function ServiceSidebar({ title, items, hubPath, hubLabel }) {
  const location = useLocation();

  return (
    <aside className="service-sidebar">
      <NavLink to={hubPath} className="service-sidebar-head">
        {hubLabel || title} <i className="fas fa-arrow-right"></i>
      </NavLink>
      <nav className="service-sidebar-list">
        {items.map(item => {
          const itemPath = item.path || `/${item.key}`;
          const isActive = location.pathname === itemPath;

          return (
            <NavLink
              key={item.key || itemPath}
              to={itemPath}
              className={`service-sidebar-item ${isActive ? 'active' : ''}`}
            >
              <div className="ssi-icon">
                <i className={`fas ${item.icon || 'fa-arrow-right'}`}></i>
              </div>
              <div className="ssi-text">
                <strong>{item.title}</strong>
                {item.sub && <span>{item.sub}</span>}
              </div>
              <i className="fas fa-chevron-right ssi-arrow"></i>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
