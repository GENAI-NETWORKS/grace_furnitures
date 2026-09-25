'use client';
import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const OWNER_WHATSAPP = '919842025243';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name     = (form.elements.namedItem('name')     as HTMLInputElement).value.trim();
    const company  = (form.elements.namedItem('company')  as HTMLInputElement).value.trim();
    const phone    = (form.elements.namedItem('phone')    as HTMLInputElement).value.trim();
    const email    = (form.elements.namedItem('email')    as HTMLInputElement).value.trim();
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value;
    const message  = (form.elements.namedItem('message')  as HTMLTextAreaElement).value.trim();

    if (!name || !phone || !category) return;

    // Build WhatsApp message
    const lines = [
      '🪑 *New Enquiry – GRACE™ Furniture Website*',
      '',
      `👤 *Name:* ${name}`,
      company  ? `🏢 *Company:* ${company}`   : '',
      `📞 *Phone:* ${phone}`,
      email    ? `📧 *Email:* ${email}`        : '',
      `📦 *Product Category:* ${category}`,
      message  ? `📝 *Message:*\n${message}`   : '',
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(lines)}`;

    setLoading(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      form.reset();
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => setSubmitted(false), 6000);
    }, 400);
  };

  return (
    <div className="contact-form-wrap">
      <h3 className="form-title">Send an Enquiry</h3>
      <p className="form-sub">Fill in the details below and we&apos;ll get back to you with pricing and availability.</p>

      <form id="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <input type="text" id="form-name" name="name" placeholder=" " required autoComplete="name" />
            <label htmlFor="form-name">Your Name *</label>
          </div>
          <div className="form-group">
            <input type="text" id="form-company" name="company" placeholder=" " autoComplete="organization" />
            <label htmlFor="form-company">Company / Business</label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input type="tel" id="form-phone" name="phone" placeholder=" " required autoComplete="tel" />
            <label htmlFor="form-phone">Phone Number *</label>
          </div>
          <div className="form-group">
            <input type="email" id="form-email" name="email" placeholder=" " autoComplete="email" />
            <label htmlFor="form-email">Email Address</label>
          </div>
        </div>

        <div className="form-group">
          <select id="form-category" name="category" required defaultValue="">
            <option value="" disabled></option>
            <option value="Wardrobes &amp; Storage">Wardrobes &amp; Storage</option>
            <option value="Bookshelves &amp; Cabinets">Bookshelves &amp; Cabinets</option>
            <option value="Office Furniture">Office Furniture</option>
            <option value="Bedroom Furniture">Bedroom Furniture</option>
            <option value="Dining Furniture">Dining Furniture</option>
            <option value="Sofa Sets">Sofa Sets</option>
            <option value="Dressing Tables">Dressing Tables</option>
            <option value="Customized Solutions">Customized Solutions</option>
            <option value="Multiple Categories">Multiple Categories</option>
          </select>
          <label htmlFor="form-category">Product Category *</label>
        </div>

        <div className="form-group">
          <textarea id="form-message" name="message" placeholder=" " rows={4}></textarea>
          <label htmlFor="form-message">Your Requirements / Message</label>
        </div>

        <button
          type="submit"
          className="btn btn-crimson form-submit"
          id="form-submit-btn"
          disabled={loading}
          style={{ opacity: loading ? 0.75 : 1 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          {loading ? 'Opening WhatsApp…' : 'Send Enquiry'}
        </button>

        {submitted && (
          <div className="form-success show" role="alert" aria-live="polite">
            <CheckCircle width="16" height="16" style={{ verticalAlign: '-3px', marginRight: '4px' }} />
            Thank you! Your enquiry has been sent via WhatsApp. We&apos;ll respond within 24 hours.
          </div>
        )}
      </form>
    </div>
  );
}
