import React, { useState } from 'react';
import SEO from '../components/SEO';

const sections = [
  {
    icon: 'fas fa-concierge-bell',
    title: 'Our Services',
    content: (
      <>
        <p>Visma Translation provides professional language-related services, which may include:</p>
        <TagList items={[
          'Translation', 'Localization', 'Document Translation', 'Legal Translation',
          'Medical Translation', 'Financial Translation', 'Technical Translation',
          'Transcription', 'Subtitling', 'Voice-over Services', 'Content Writing',
          'SEO Content Writing', 'Desktop Publishing', 'Social Media Content', 'Apostille Services',
        ]} />
        <p style={{ marginTop: '14px' }}>The exact services available may vary depending on the project and agreement with the client.</p>
      </>
    ),
  },
  {
    icon: 'fas fa-tags',
    title: 'Quotes and Pricing',
    content: (
      <>
        <p>All quotations are based on the requirements provided by the client. The final price may vary if:</p>
        <TagList items={[
          'The scope of work changes',
          'Additional documents are submitted',
          'Source material differs significantly from what was originally provided',
          'Additional formatting, editing, proofreading, certification, or urgent delivery is requested',
        ]} />
        <p style={{ marginTop: '12px' }}>A project begins after the client accepts the quotation and fulfills any required payment or deposit conditions.</p>
      </>
    ),
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Client Responsibilities',
    content: (
      <>
        <p>The client is responsible for providing:</p>
        <TagList items={[
          'Accurate and complete source materials',
          'Clear project instructions',
          'Required reference materials',
          'Correct contact and billing information',
          'Necessary permissions or rights to use submitted materials',
        ]} />
        <p style={{ marginTop: '12px' }}>Submitted content must not unlawfully infringe the rights of any third party.</p>
      </>
    ),
  },
  {
    icon: 'fas fa-spell-check',
    title: 'Translation Accuracy',
    content: (
      <p>Visma Translation will make reasonable efforts to provide accurate and professional translations. However, translation is a linguistic service, and differences in terminology, cultural interpretation, or client preferences may occur. For specialized projects, clients should provide glossaries, terminology guides, or style guides where applicable.</p>
    ),
  },
  {
    icon: 'fas fa-truck',
    title: 'Delivery Times',
    content: (
      <>
        <p>Estimated delivery times are communicated based on the scope and complexity of the project. Delivery may be affected by:</p>
        <TagList items={[
          'Changes to project requirements',
          'Delays in receiving necessary information',
          'Client feedback or approval cycles',
          'Technical issues',
          'Force majeure events',
          'Other unforeseen circumstances',
        ]} />
      </>
    ),
  },
  {
    icon: 'fas fa-user-secret',
    title: 'Confidentiality',
    content: (
      <p>Visma Translation respects the confidentiality of all client documents and information. We may use confidentiality agreements or NDAs when requested or required. Clients should inform us in advance if a project has specific confidentiality or data-handling requirements.</p>
    ),
  },
  {
    icon: 'fas fa-credit-card',
    title: 'Payments',
    content: (
      <p>Clients agree to pay all applicable fees according to the quotation or payment terms agreed upon. Additional work outside the original scope may incur additional charges unless otherwise agreed.</p>
    ),
  },
  {
    icon: 'fas fa-undo-alt',
    title: 'Cancellation and Refunds',
    content: (
      <p>Cancellation and refund eligibility depends on the project stage and work already completed. Once work has started, fees may be non-refundable to the extent that services have been performed or costs incurred. Refunds will be considered on a case-by-case basis.</p>
    ),
  },
  {
    icon: 'fas fa-edit',
    title: 'Revisions and Corrections',
    content: (
      <p>If a translation contains an error attributable to Visma Translation, please notify us within a reasonable period after delivery. We may review and correct genuine errors without additional charge. Changes due to revised source material, new instructions, or client preference may be treated as additional work.</p>
    ),
  },
  {
    icon: 'fas fa-copyright',
    title: 'Intellectual Property',
    content: (
      <p>Unless otherwise agreed in writing, the client retains ownership of original materials they provide. Upon full payment, the client receives the agreed deliverables for the intended use specified in the project agreement. Visma Translation retains ownership of its pre-existing tools, processes, templates, and proprietary materials.</p>
    ),
  },
  {
    icon: 'fas fa-ban',
    title: 'Prohibited Use',
    content: (
      <p>Clients must not use our services for unlawful purposes or submit materials that violate applicable laws or third-party rights. We reserve the right to refuse or discontinue a project where we believe the requested work may involve unlawful activity.</p>
    ),
  },
  {
    icon: 'fas fa-globe',
    title: 'Website Content',
    content: (
      <p>Content on this website is provided for general informational purposes. While we aim to keep information accurate and current, we do not guarantee that all content is complete, accurate, or error-free.</p>
    ),
  },
  {
    icon: 'fas fa-link',
    title: 'Third-Party Links',
    content: (
      <p>Our website may contain links to third-party websites for convenience. Visma Translation does not necessarily endorse or control the content, availability, or practices of those websites.</p>
    ),
  },
  {
    icon: 'fas fa-exclamation-triangle',
    title: 'Limitation of Liability',
    content: (
      <p>To the maximum extent permitted by applicable law, Visma Translation will not be liable for indirect, incidental, special, or consequential losses arising from the use of our website or services. Liability for a specific project may be limited to the amount paid by the client for that service.</p>
    ),
  },
  {
    icon: 'fas fa-cloud-rain',
    title: 'Force Majeure',
    content: (
      <p>Visma Translation will not be responsible for delays or failure to perform caused by circumstances beyond our reasonable control, including natural disasters, war, government actions, telecommunications failures, cyber incidents, or other unforeseen events.</p>
    ),
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Governing Law',
    content: (
      <p>These Terms and Conditions are governed by the applicable laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in Bengaluru, Karnataka, India, unless otherwise required by applicable law.</p>
    ),
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Changes to These Terms',
    content: (
      <p>We may update these Terms and Conditions from time to time. Updated terms will be published on this page with a revised "Last Updated" date. Continued use of our services after any changes constitutes acceptance of the updated terms.</p>
    ),
  },
];

export default function TermsAndConditions() {
  const [open, setOpen] = useState(null);

  return (
    <main style={{ background: '#f4f6fb', minHeight: '100vh' }}>
      <SEO title="Terms and Conditions - Visma Translation" description="Terms and Conditions for using Visma Translation services." />

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
          <i className="fas fa-file-contract" style={{ fontSize: '28px', color: '#e8651a' }}></i>
        </div>
        <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: 800, margin: '0 0 10px' }}>Terms and Conditions</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0 }}>
          <i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>Last Updated: August 3, 2026
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '50px 20px 80px' }}>

        {/* Intro card */}
        <div style={{
          background: '#fff', borderRadius: '16px', padding: '32px 36px',
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '32px',
          borderLeft: '5px solid #e8651a',
        }}>
          <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.85', color: '#444' }}>
            Welcome to <strong>Visma Translation</strong>. By accessing our website or using our translation and related services, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.
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
