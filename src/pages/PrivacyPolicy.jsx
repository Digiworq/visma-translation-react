import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <main style={{ background: '#f9f9f9', minHeight: '100vh', paddingBottom: '60px' }}>
      <SEO title="Privacy Policy - Visma Translation" description="Privacy Policy for Visma Translation services." />

      {/* Hero */}
      <div style={{ background: '#1a1d24', padding: '60px 20px 50px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '36px', fontWeight: 800, marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>Last Updated: August 3, 2026</p>
      </div>

      <div style={{ maxWidth: '860px', margin: '50px auto', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '48px 52px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', lineHeight: '1.85', color: '#333', fontSize: '15px' }}>

          <p>At Visma Translation, we respect your privacy and are committed to protecting the personal information you provide when using our website and services. This Privacy Policy explains how we collect, use, store, and protect your information.</p>

          <Section title="1. Information We Collect">
            <p>We may collect the following information when you contact us or use our services:</p>
            <ul>
              <li>Name</li>
              <li>Company or organization name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Documents and files submitted for translation, localization, transcription, or related services</li>
              <li>Project requirements and communications</li>
              <li>Information provided through contact forms, quote requests, or email</li>
              <li>Technical information such as IP address, browser type, device information, and website usage data</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We may use your information to:</p>
            <ul>
              <li>Provide translation, localization, transcription, voice-over, subtitling, and other requested services</li>
              <li>Respond to inquiries and provide quotations</li>
              <li>Communicate with you about projects and services</li>
              <li>Process payments and manage billing</li>
              <li>Improve our services and website</li>
              <li>Maintain business and customer records</li>
              <li>Prevent fraud, misuse, or security threats</li>
              <li>Comply with applicable legal and regulatory requirements</li>
            </ul>
          </Section>

          <Section title="3. Confidentiality of Documents">
            <p>We understand that documents submitted to us may contain confidential or sensitive information.</p>
            <p>Visma Translation will take reasonable measures to protect client documents and information from unauthorized access, disclosure, alteration, or misuse. Access to client materials may be limited to employees, translators, contractors, or service providers who require access to perform the requested services.</p>
            <p>Where appropriate, we may enter into confidentiality agreements or Non-Disclosure Agreements (NDAs) with clients.</p>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We do not sell or rent your personal information to third parties.</p>
            <p>We may share information with trusted service providers, translators, contractors, payment processors, hosting providers, or technology providers when necessary to provide our services.</p>
            <p>We may also disclose information when required by applicable law, legal proceedings, court orders, or government authorities.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We use reasonable administrative, technical, and organizational measures to protect personal information and confidential documents.</p>
            <p>However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted through the internet.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain personal information and project-related materials only for as long as reasonably necessary to provide our services, maintain business records, resolve disputes, comply with legal obligations, or enforce our agreements.</p>
            <p>The retention period may vary depending on the nature of the information and the services provided.</p>
          </Section>

          <Section title="7. Cookies">
            <p>Our website may use cookies and similar technologies to improve website functionality, analyze website traffic, and enhance user experience.</p>
            <p>You may adjust your browser settings to refuse or delete cookies. However, some website features may not function properly if cookies are disabled.</p>
          </Section>

          <Section title="8. Third-Party Websites">
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices, security, or content of third-party websites.</p>
            <p>We encourage users to review the privacy policies of those websites before providing personal information.</p>
          </Section>

          <Section title="9. Your Rights">
            <p>Depending on applicable law, you may have the right to:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of personal information where legally permitted</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request information about how your personal data is processed</li>
            </ul>
            <p>To make a privacy-related request, please contact us using the details below.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>Our website and services are not specifically directed toward children. We do not knowingly collect personal information from children without appropriate consent where required by law.</p>
          </Section>

          <Section title="11. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>Visma Translation</p>
            <p>
              No. 12, 10th Main, Shivanagar, Rajajinagar,<br />
              West of Chord Road, Near Chord Manor Apartment,<br />
              Bangalore – 560010, India
            </p>
            <p>Email: <a href="mailto:info@vismatranslation.com" style={{ color: '#e8651a' }}>info@vismatranslation.com</a></p>
            <p>Phone: <a href="tel:+919945342726" style={{ color: '#e8651a' }}>+91 9945342726</a></p>
          </Section>

        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginTop: '36px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1d24', marginBottom: '12px', borderLeft: '4px solid #e8651a', paddingLeft: '12px' }}>
        {title}
      </h2>
      <div style={{ paddingLeft: '4px' }}>{children}</div>
    </div>
  );
}
