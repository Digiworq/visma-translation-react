import React, { useState } from 'react';
import SEO from '../components/SEO';

const sections = [
  {
    icon: 'fas fa-database',
    title: 'Information We Collect',
    content: (
      <>
        <p>When you contact us or use our services, we may collect:</p>
        <TagList items={[
          'Name', 'Company or organization name', 'Email address', 'Phone number',
          'Billing and payment information',
          'Documents and files submitted for translation, localization, or transcription',
          'Project requirements and communications',
          'Information from contact forms or quote requests',
          'Technical data: IP address, browser type, device information',
        ]} />
      </>
    ),
  },
  {
    icon: 'fas fa-cogs',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>Your information helps us:</p>
        <TagList items={[
          'Deliver translation, localization, transcription, voice-over, and subtitling services',
          'Respond to inquiries and provide quotations',
          'Communicate about projects and services',
          'Process payments and manage billing',
          'Improve our services and website',
          'Maintain business and customer records',
          'Prevent fraud, misuse, or security threats',
          'Comply with legal and regulatory requirements',
        ]} />
      </>
    ),
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Confidentiality of Documents',
    content: (
      <p>We understand that documents submitted to us may contain sensitive information. Visma Translation takes reasonable measures to protect client materials from unauthorized access or disclosure. Access is limited to employees, translators, or contractors who need it to perform the service. Where required, we may enter into Non-Disclosure Agreements (NDAs) with clients.</p>
    ),
  },
  {
    icon: 'fas fa-share-alt',
    title: 'Sharing of Information',
    content: (
      <>
        <p>We do not sell or rent your personal information to third parties. We may share data with trusted service providers — such as payment processors or hosting providers — only when necessary to deliver our services. We may also disclose information when legally required by court order or government authority.</p>
      </>
    ),
  },
  {
    icon: 'fas fa-lock',
    title: 'Data Security',
    content: (
      <p>We use reasonable administrative, technical, and organizational measures to protect personal information. However, no method of electronic storage or internet transmission is completely secure, and we cannot guarantee absolute security.</p>
    ),
  },
  {
    icon: 'fas fa-clock',
    title: 'Data Retention',
    content: (
      <p>We retain your information only as long as reasonably necessary to deliver services, maintain records, resolve disputes, and comply with legal obligations. Retention periods vary depending on the nature of the data and services provided.</p>
    ),
  },
  {
    icon: 'fas fa-cookie-bite',
    title: 'Cookies',
    content: (
      <p>Our website may use cookies and similar technologies to improve functionality, analyze traffic, and enhance user experience. You can adjust your browser to refuse or delete cookies, though some features may not work correctly without them.</p>
    ),
  },
  {
    icon: 'fas fa-external-link-alt',
    title: 'Third-Party Websites',
    content: (
      <p>Our website may link to third-party sites. We are not responsible for their privacy practices, security, or content. We encourage you to review the privacy policies of those websites before sharing any personal information.</p>
    ),
  },
  {
    icon: 'fas fa-user-check',
    title: 'Your Rights',
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <TagList items={[
          'Request access to your personal information',
          'Request correction of inaccurate information',
          'Request deletion of personal information where legally permitted',
          'Withdraw consent where processing is based on consent',
          'Request information about how your personal data is processed',
        ]} />
        <p style={{ marginTop: '12px' }}>To make a privacy-related request, please contact us using the details below.</p>
      </>
    ),
  },
  {
    icon: 'fas fa-child',
    title: "Children's Privacy",
    content: (
      <p>Our website and services are not directed toward children. We do not knowingly collect personal information from children without appropriate consent where required by law.</p>
    ),
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Changes to This Policy',
    content: (
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically.</p>
    ),
  },
];

export default function PrivacyPolicy() {
  const [open, setOpen] = useState(null);

  return (
    <main style={{ background: '#f4f6fb', minHeight: '100vh' }}>
      <SEO title="Privacy Policy - Visma Translation" description="Privacy Policy for Visma Translation services." />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1d24 0%, #2c3040 100%)',
        padding: '80px 20px 70px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(232,101,26,0.08)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '-40px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'rgba(232,101,26,0.06)',
        }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '70px', height: '70px', borderRadius: '50%',
          background: 'rgba(232,101,26,0.15)', marginBottom: '20px',
        }}>
          <i className="fas fa-user-shield" style={{ fontSize: '28px', color: '#e8651a' }}></i>
        </div>
        <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '50px 20px 80px' }}>

        {/* Intro card */}
        <div style={{
          background: '#fff', borderRadius: '16px', padding: '32px 36px',
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '32px',
          borderLeft: '5px solid #e8651a',
        }}>
          <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.85', color: '#444' }}>
            At <strong>Visma Translation</strong>, we respect your privacy and are committed to protecting the personal information you provide when using our website and services. This Privacy Policy explains how we collect, use, store, and protect your information.
          </p>
        </div>

        {/* Accordion sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {sections.map((sec, i) => (
            <AccordionCard
              key={i}
              icon={sec.icon}
              title={sec.title}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            >
              {sec.content}
            </AccordionCard>
          ))}
        </div>

        {/* Contact card */}
        <ContactCard />
      </div>
    </main>
  );
}

function AccordionCard({ icon, title, isOpen, onToggle, children }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '14px',
      boxShadow: isOpen ? '0 6px 28px rgba(232,101,26,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
      border: isOpen ? '1.5px solid rgba(232,101,26,0.3)' : '1.5px solid transparent',
      transition: 'all 0.25s ease', overflow: 'hidden',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '22px 28px', display: 'flex', alignItems: 'center', gap: '16px',
          textAlign: 'left',
        }}
      >
        <div style={{
          width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
          background: isOpen ? '#e8651a' : '#fff4ee',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.25s',
        }}>
          <i className={icon} style={{ fontSize: '17px', color: isOpen ? '#fff' : '#e8651a' }}></i>
        </div>
        <span style={{
          flex: 1, fontSize: '16px', fontWeight: 700,
          color: isOpen ? '#e8651a' : '#1a1d24',
          transition: 'color 0.25s',
        }}>{title}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}
          style={{ color: isOpen ? '#e8651a' : '#aaa', fontSize: '13px', transition: 'all 0.25s' }}></i>
      </button>

      {isOpen && (
        <div style={{
          padding: '0 28px 24px 88px',
          fontSize: '14.5px', lineHeight: '1.85', color: '#555',
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function TagList({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
      {items.map((item, i) => (
        <span key={i} style={{
          background: '#fff4ee', color: '#c45610', border: '1px solid rgba(232,101,26,0.2)',
          borderRadius: '20px', padding: '5px 14px', fontSize: '13px', fontWeight: 500,
        }}>
          <i className="fas fa-check" style={{ marginRight: '6px', fontSize: '11px' }}></i>{item}
        </span>
      ))}
    </div>
  );
}

function ContactCard() {
  return (
    <div style={{
      marginTop: '40px', background: 'linear-gradient(135deg, #1a1d24, #2c3040)',
      borderRadius: '16px', padding: '40px', color: '#fff',
      display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center',
    }}>
      <div style={{ flex: '1 1 260px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '10px',
            background: 'rgba(232,101,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className="fas fa-headset" style={{ color: '#e8651a', fontSize: '18px' }}></i>
          </div>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>Contact Us</h3>
        </div>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.7' }}>
          No. 12, 10th Main, Shivanagar, Rajajinagar,<br />
          West of Chord Road, Near Chord Manor Apartment,<br />
          Bangalore – 560010, India
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <a href="mailto:info@vismatranslation.com" style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'rgba(255,255,255,0.07)', borderRadius: '10px',
          padding: '12px 20px', textDecoration: 'none', color: '#fff',
        }}>
          <i className="fas fa-envelope" style={{ color: '#e8651a' }}></i>
          info@vismatranslation.com
        </a>
        <a href="tel:+919945342726" style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'rgba(255,255,255,0.07)', borderRadius: '10px',
          padding: '12px 20px', textDecoration: 'none', color: '#fff',
        }}>
          <i className="fas fa-phone-alt" style={{ color: '#e8651a' }}></i>
          +91 9945342726
        </a>
      </div>
    </div>
  );
}
