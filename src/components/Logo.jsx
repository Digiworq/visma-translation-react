import React from 'react';
import headerLogo from '../../image (32).png';
import footerLogo from '../../footer_logo.png';

export default function Logo({ light = false }) {
  const logoSrc = light ? footerLogo : headerLogo;

  return (
    <div className={`visma-brand-logo ${light ? 'light-mode' : ''}`}>
      <img
        src={logoSrc}
        alt="VISMA Translation"
        style={{
          height: light ? '64px' : '52px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
