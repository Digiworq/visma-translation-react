import React from 'react';
import SEO from '../components/SEO';

export default function TermsAndConditions() {
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
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(232,101,26,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(232,101,26,0.06)' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(232,101,26,0.15)', marginBottom: '20px' }}>
          <i className="fas fa-file-contract" style={{ fontSize: '28px', color: '#e8651a' }}></i>
        </div>
        <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: 800, margin: 0 }}>Terms and Conditions</h1>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '50px 20px 80px' }}>

        {/* Intro */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 36px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: '28px', borderLeft: '5px solid #e8651a' }}>
          <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.9', color: '#444' }}>
            Welcome to <strong>Visma Translation</strong>. By accessing our website or using our translation and related services, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.
          </p>
        </div>

        <Section icon="fas fa-concierge-bell" title="Our Services">
          <p>Visma Translation provides professional language-related services including Translation, Localization, Document Translation, Legal Translation, Medical Translation, Financial Translation, Technical Translation, Transcription, Subtitling, Voice-over Services, Content Writing, SEO Content Writing, Desktop Publishing, Social Media Content Services, and Apostille-related Services. The exact services available may vary depending on the project and agreement with the client.</p>
        </Section>

        <Section icon="fas fa-tags" title="Quotes and Pricing">
          <p>All quotations are based on the information and requirements provided by the client. The final price may vary if the scope of work changes, additional documents are submitted, the source material differs significantly from what was originally provided, or if additional formatting, editing, proofreading, certification, or urgent delivery is requested. A project will begin after the client accepts the quotation and fulfills any required payment or deposit conditions.</p>
        </Section>

        <Section icon="fas fa-user-tie" title="Client Responsibilities">
          <p>The client is responsible for providing accurate and complete source materials, clear project instructions, required reference materials, correct contact and billing information, and any necessary permissions or rights to use submitted materials. The client must ensure that submitted content does not unlawfully infringe the rights of any third party.</p>
        </Section>

        <Section icon="fas fa-spell-check" title="Translation Accuracy">
          <p>Visma Translation will make reasonable efforts to provide accurate and professional translations. However, translation is a linguistic service, and differences in terminology, cultural interpretation, industry standards, or client preferences may occur. For specialized projects, clients should provide glossaries, terminology guides, or style guides where applicable.</p>
        </Section>

        <Section icon="fas fa-truck" title="Delivery Times">
          <p>Estimated delivery times will be communicated based on the scope and complexity of the project. Delivery times may be affected by changes to project requirements, delays in receiving necessary information, client feedback or approval cycles, technical issues, force majeure events, or other unforeseen circumstances beyond our reasonable control.</p>
        </Section>

        <Section icon="fas fa-user-secret" title="Confidentiality">
          <p>Visma Translation respects the confidentiality of all client information and documents. We will take reasonable measures to protect confidential materials and may use confidentiality agreements or NDAs when requested or required. Clients should inform us in advance if a project has specific confidentiality, security, or data-handling requirements.</p>
        </Section>

        <Section icon="fas fa-credit-card" title="Payments">
          <p>Clients agree to pay all applicable fees according to the quotation or payment terms agreed upon for the project. Unless otherwise agreed, additional work outside the original scope may incur additional charges.</p>
        </Section>

        <Section icon="fas fa-undo-alt" title="Cancellation and Refunds">
          <p>Cancellation and refund eligibility may depend on the stage of the project and the amount of work already completed. Once work has started, fees may be non-refundable to the extent that services have already been performed or costs have been incurred. Any refund will be considered based on the specific circumstances of the project and the agreed quotation.</p>
        </Section>

        <Section icon="fas fa-edit" title="Revisions and Corrections">
          <p>If a translation contains an error attributable to Visma Translation, the client should notify us within a reasonable period after delivery. Where appropriate, we may review and correct genuine translation errors without additional charges. Changes resulting from revised source material, new instructions, or client preference may be treated as additional work.</p>
        </Section>

        <Section icon="fas fa-copyright" title="Intellectual Property">
          <p>Unless otherwise agreed in writing, the client retains ownership of original materials they provide. Upon full payment, the client will receive the agreed final deliverables for the intended use specified in the project agreement. Visma Translation retains ownership of its pre-existing tools, processes, templates, methodologies, and proprietary materials.</p>
        </Section>

        <Section icon="fas fa-ban" title="Prohibited Use">
          <p>Clients must not use our services for unlawful purposes or submit materials that violate applicable laws or third-party rights. We reserve the right to refuse or discontinue a project where we reasonably believe the requested work may involve unlawful activity.</p>
        </Section>

        <Section icon="fas fa-globe" title="Website Content">
          <p>The content on this website is provided for general informational purposes. While we aim to keep information accurate and current, we do not guarantee that all website content is complete, accurate, or free from errors.</p>
        </Section>

        <Section icon="fas fa-link" title="Third-Party Links">
          <p>Our website may contain links to third-party websites for convenience. Visma Translation does not necessarily endorse or control the content, availability, or practices of those websites.</p>
        </Section>

        <Section icon="fas fa-exclamation-triangle" title="Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, Visma Translation will not be liable for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our website or services. Any liability relating to a specific project may be limited to the amount paid by the client for the affected service.</p>
        </Section>

        <Section icon="fas fa-cloud-rain" title="Force Majeure">
          <p>Visma Translation will not be responsible for delays or failure to perform caused by circumstances beyond our reasonable control, including natural disasters, war, government actions, telecommunications failures, cyber incidents, labor disputes, or other unforeseen events.</p>
        </Section>

        <Section icon="fas fa-balance-scale" title="Governing Law">
          <p>These Terms and Conditions shall be governed by the applicable laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in Bengaluru, Karnataka, India, unless otherwise required by applicable law.</p>
        </Section>

        <Section icon="fas fa-sync-alt" title="Changes to These Terms">
          <p>We may update these Terms and Conditions from time to time. Updated terms will be published on this page. Continued use of our services after any changes constitutes acceptance of the updated terms.</p>
        </Section>

        <ContactCard />
      </div>
    </main>
  );
}

function Section({ icon, title, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '32px 36px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <i className={icon} style={{ fontSize: '17px', color: '#e8651a' }}></i>
        </div>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#1a1d24' }}>{title}</h2>
      </div>
      <div style={{ fontSize: '14.5px', lineHeight: '1.9', color: '#555' }}>{children}</div>
    </div>
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
