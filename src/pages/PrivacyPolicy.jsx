import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
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
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(232,101,26,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(232,101,26,0.06)' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(232,101,26,0.15)', marginBottom: '20px' }}>
          <i className="fas fa-user-shield" style={{ fontSize: '28px', color: '#e8651a' }}></i>
        </div>
        <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '50px 20px 80px' }}>

        {/* Intro */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 36px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '28px', borderLeft: '5px solid #e8651a' }}>
          <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.9', color: '#444' }}>
            At <strong>Visma Translation</strong>, we respect your privacy and are committed to protecting the personal information you provide when using our website and services. This Privacy Policy explains how we collect, use, store, and protect your information.
          </p>
        </div>

        <Section icon="fas fa-database" title="Information We Collect">
          <p>When you contact us or use our services, we may collect the following:</p>
          <BulletList items={[
            'Name', 'Company or organization name', 'Email address', 'Phone number',
            'Billing and payment information',
            'Documents and files submitted for translation, localization, or transcription',
            'Project requirements and communications',
            'Information from contact forms, quote requests, or email',
            'Technical data such as IP address, browser type, and device information',
          ]} />
        </Section>

        <Section icon="fas fa-cogs" title="How We Use Your Information">
          <p>We may use your information to:</p>
          <BulletList items={[
            'Provide translation, localization, transcription, voice-over, subtitling, and other requested services',
            'Respond to inquiries and provide quotations',
            'Communicate with you about projects and services',
            'Process payments and manage billing',
            'Improve our services and website',
            'Maintain business and customer records',
            'Prevent fraud, misuse, or security threats',
            'Comply with applicable legal and regulatory requirements',
          ]} />
        </Section>

        <Section icon="fas fa-shield-alt" title="Confidentiality of Documents">
          <p>We understand that documents submitted to us may contain confidential or sensitive information. Visma Translation takes reasonable measures to protect client materials from unauthorized access, disclosure, alteration, or misuse. Access to client materials is limited to employees, translators, contractors, or service providers who need it to perform the requested services.</p>
          <p>Where appropriate, we may enter into confidentiality agreements or Non-Disclosure Agreements (NDAs) with clients.</p>
        </Section>

        <Section icon="fas fa-share-alt" title="Sharing of Information">
          <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers — such as translators, payment processors, or hosting providers — only when necessary to deliver our services.</p>
          <p>We may also disclose information when required by applicable law, legal proceedings, court orders, or government authorities.</p>
        </Section>

        <Section icon="fas fa-lock" title="Data Security">
          <p>We use reasonable administrative, technical, and organizational measures to protect personal information and confidential documents. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted through the internet.</p>
        </Section>

        <Section icon="fas fa-clock" title="Data Retention">
          <p>We retain personal information and project-related materials only for as long as reasonably necessary to provide our services, maintain business records, resolve disputes, comply with legal obligations, or enforce our agreements. Retention periods may vary depending on the nature of the information and the services provided.</p>
        </Section>

        <Section icon="fas fa-cookie-bite" title="Cookies">
          <p>Our website may use cookies and similar technologies to improve functionality, analyze website traffic, and enhance user experience. You may adjust your browser settings to refuse or delete cookies, though some features may not work correctly without them.</p>
        </Section>

        <Section icon="fas fa-external-link-alt" title="Third-Party Websites">
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices, security, or content. We encourage you to review the privacy policies of those websites before sharing personal information.</p>
        </Section>

        <Section icon="fas fa-user-check" title="Your Rights">
          <p>Depending on applicable law, you may have the right to:</p>
          <BulletList items={[
            'Request access to your personal information',
            'Request correction of inaccurate information',
            'Request deletion of personal information where legally permitted',
            'Withdraw consent where processing is based on consent',
            'Request information about how your personal data is processed',
          ]} />
          <p style={{ marginTop: '14px' }}>To make a privacy-related request, please contact us using the details below.</p>
        </Section>

        <Section icon="fas fa-child" title="Children's Privacy">
          <p>Our website and services are not specifically directed toward children. We do not knowingly collect personal information from children without appropriate consent where required by law.</p>
        </Section>

        <Section icon="fas fa-sync-alt" title="Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this page periodically to stay informed.</p>
        </Section>

        {/* Contact Card */}
        <ContactCard />
      </div>
    </main>
  );
}

function Section({ icon, title, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 36px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <i className={icon} style={{ fontSize: '17px', color: '#e8651a' }}></i>
        </div>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#1a1d24' }}>{title}</h2>
      </div>
      <div style={{ fontSize: '14.5px', lineHeight: '1.85', color: '#555' }}>{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: '10px 0 0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#555' }}>
          <i className="fas fa-check-circle" style={{ color: '#e8651a', marginTop: '3px', flexShrink: 0, fontSize: '13px' }}></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactCard() {
  return (
    <div style={{ marginTop: '32px', background: 'linear-gradient(135deg, #1a1d24, #2c3040)', borderRadius: '16px', padding: '40px', color: '#fff', display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
      <div style={{ flex: '1 1 260px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(232,101,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-headset" style={{ color: '#e8651a', fontSize: '18px' }}></i>
          </div>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>Contact Us</h3>
        </div>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.75' }}>
          No. 12, 10th Main, Shivanagar, Rajajinagar,<br />
          West of Chord Road, Near Chord Manor Apartment,<br />
          Bangalore – 560010, India
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <a href="mailto:info@vismatranslation.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '12px 20px', textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <i className="fas fa-envelope" style={{ color: '#e8651a' }}></i> info@vismatranslation.com
        </a>
        <a href="tel:+919945342726" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '12px 20px', textDecoration: 'none', color: '#fff', fontSize: '14px' }}>
          <i className="fas fa-phone-alt" style={{ color: '#e8651a' }}></i> +91 9945342726
        </a>
      </div>
    </div>
  );
}
