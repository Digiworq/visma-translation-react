import React from 'react';
import SEO from '../components/SEO';

export default function TermsAndConditions() {
  return (
    <main style={{ background: '#f9f9f9', minHeight: '100vh', paddingBottom: '60px' }}>
      <SEO title="Terms and Conditions - Visma Translation" description="Terms and Conditions for using Visma Translation services." />

      {/* Hero */}
      <div style={{ background: '#1a1d24', padding: '60px 20px 50px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '36px', fontWeight: 800, marginBottom: '10px' }}>Terms and Conditions</h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>Last Updated: August 3, 2026</p>
      </div>

      <div style={{ maxWidth: '860px', margin: '50px auto', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '48px 52px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', lineHeight: '1.85', color: '#333', fontSize: '15px' }}>

          <p>Welcome to Visma Translation. By accessing our website or using our translation and related services, you agree to comply with these Terms and Conditions.</p>

          <Section title="1. Our Services">
            <p>Visma Translation provides professional language-related services, which may include:</p>
            <ul>
              <li>Translation</li>
              <li>Localization</li>
              <li>Document translation</li>
              <li>Legal translation</li>
              <li>Medical translation</li>
              <li>Financial translation</li>
              <li>Technical translation</li>
              <li>Transcription</li>
              <li>Subtitling</li>
              <li>Voice-over services</li>
              <li>Content writing</li>
              <li>SEO content writing</li>
              <li>Desktop publishing</li>
              <li>Social media content services</li>
              <li>Apostille-related services</li>
            </ul>
            <p>The exact services available may vary depending on the project and agreement with the client.</p>
          </Section>

          <Section title="2. Quotes and Pricing">
            <p>All quotations provided by Visma Translation are based on the information and requirements provided by the client.</p>
            <p>The final price may vary if:</p>
            <ul>
              <li>The scope of work changes</li>
              <li>Additional documents are submitted</li>
              <li>The source material differs significantly from the material originally provided</li>
              <li>Additional formatting, editing, proofreading, certification, or urgent delivery is requested</li>
            </ul>
            <p>A project will begin after the client accepts the quotation and fulfills any required payment or deposit conditions.</p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>The client is responsible for providing:</p>
            <ul>
              <li>Accurate and complete source materials</li>
              <li>Clear project instructions</li>
              <li>Required reference materials</li>
              <li>Correct contact and billing information</li>
              <li>Any necessary permissions or rights to use submitted materials</li>
            </ul>
            <p>The client must ensure that submitted content does not unlawfully infringe the rights of any third party.</p>
          </Section>

          <Section title="4. Translation Accuracy">
            <p>Visma Translation will make reasonable efforts to provide accurate and professional translations.</p>
            <p>However, translation is a linguistic service, and differences in terminology, cultural interpretation, industry standards, or client preferences may occur.</p>
            <p>For specialized projects, clients should provide glossaries, terminology guides, style guides, or other reference materials where applicable.</p>
          </Section>

          <Section title="5. Delivery Times">
            <p>Estimated delivery times will be communicated to the client based on the scope and complexity of the project.</p>
            <p>Delivery times may be affected by:</p>
            <ul>
              <li>Changes to project requirements</li>
              <li>Delays in receiving necessary information</li>
              <li>Client feedback or approval</li>
              <li>Technical issues</li>
              <li>Force majeure events</li>
              <li>Unforeseen circumstances beyond our reasonable control</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>Visma Translation respects the confidentiality of client information and documents.</p>
            <p>We will take reasonable measures to protect confidential materials and may use confidentiality agreements or NDAs when requested or required.</p>
            <p>Clients should inform us in advance if a project has specific confidentiality, security, or data-handling requirements.</p>
          </Section>

          <Section title="7. Payments">
            <p>Clients agree to pay all applicable fees according to the quotation or payment terms agreed upon for the project.</p>
            <p>Unless otherwise agreed, additional work outside the original scope may incur additional charges.</p>
          </Section>

          <Section title="8. Cancellation and Refunds">
            <p>Cancellation and refund eligibility may depend on the stage of the project and the amount of work already completed.</p>
            <p>Once work has started, fees may be non-refundable to the extent that services have already been performed or costs have been incurred.</p>
            <p>Any refund will be considered according to the specific circumstances of the project and the agreed quotation.</p>
          </Section>

          <Section title="9. Revisions and Corrections">
            <p>If a translation contains an error attributable to Visma Translation, the client should notify us within a reasonable period after delivery.</p>
            <p>Where appropriate, we may review and correct genuine translation errors without additional charges.</p>
            <p>Changes resulting from revised source material, new instructions, or client preference may be treated as additional work.</p>
          </Section>

          <Section title="10. Intellectual Property">
            <p>Unless otherwise agreed in writing, the client retains ownership of original materials provided by the client.</p>
            <p>Upon full payment, the client will generally receive the agreed final deliverables for the intended use specified in the project agreement.</p>
            <p>Visma Translation retains ownership of its pre-existing tools, processes, templates, methodologies, and proprietary materials.</p>
          </Section>

          <Section title="11. Prohibited Use">
            <p>Clients must not use our services for unlawful purposes or submit materials that violate applicable laws or third-party rights.</p>
            <p>We reserve the right to refuse or discontinue a project where we reasonably believe the requested work may involve unlawful activity.</p>
          </Section>

          <Section title="12. Website Content">
            <p>The content on this website is provided for general informational purposes.</p>
            <p>While we aim to keep information accurate and current, we do not guarantee that all website content is complete, accurate, or free from errors.</p>
          </Section>

          <Section title="13. Third-Party Links">
            <p>Our website may contain links to third-party websites. These links are provided for convenience, and Visma Translation does not necessarily endorse or control the content, availability, or practices of third-party websites.</p>
          </Section>

          <Section title="14. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, Visma Translation will not be liable for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our website or services.</p>
            <p>Any liability relating to a specific project may be limited to the amount paid by the client for the affected service, subject to applicable law and the terms agreed for that project.</p>
          </Section>

          <Section title="15. Force Majeure">
            <p>Visma Translation will not be responsible for delays or failure to perform caused by circumstances beyond our reasonable control, including natural disasters, war, government actions, internet or telecommunications failures, cyber incidents, labor disputes, or other unforeseen events.</p>
          </Section>

          <Section title="16. Governing Law">
            <p>These Terms and Conditions shall be governed by the applicable laws of India.</p>
            <p>Any disputes shall be subject to the jurisdiction of the appropriate courts in Bengaluru, Karnataka, India, unless otherwise required by applicable law.</p>
          </Section>

          <Section title="17. Changes to These Terms">
            <p>We may update these Terms and Conditions from time to time. Updated terms will be published on this page with a revised "Last Updated" date.</p>
          </Section>

          <Section title="18. Contact Us">
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
