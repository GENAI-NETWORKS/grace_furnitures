import ContactForm from '@/components/ContactForm';
import { Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title" id="contact-title">
            Let&apos;s <span className="gold">Work Together</span>
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '16px auto 0' }}>
            Share your requirement we respond within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Details</h3>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <Phone width="20" height="20" />
              </div>
              <div>
                <span className="contact-item-label">Phone</span>
                <div className="contact-item-value">
                  <a href="tel:+919842025243">+91 98420 25243</a><br />
                  <a href="tel:+917305010542">+91 73050 10542</a><br />
                  <a href="tel:+917305010545">+91 73050 10545</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <MapPin width="20" height="20" />
              </div>
              <div>
                <span className="contact-item-label">Factory Address</span>
                <div className="contact-item-value">
                  Plot No: P-33, Door No: 120/2,<br />
                  Salem Industrial Co-operative Estate Ltd,<br />
                  Salem–Ulundurpettai Highway,<br />
                  PO Adhikaripatty, Udayapatti,<br />
                  Salem, Tamil Nadu – 636014
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps?q=Plot+No:+P-33,+Door+No:+120/2,+Salem+Industrial+Co-operative+Estate,+Salem-Ulundurpettai+Highway,+Udayapatti,+Salem,+TN+-+636014&amp;output=embed"
                loading="lazy"
                title="GRACE™ Furniture factory location in Salem, Tamil Nadu"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing GRACE™ factory location at Salem Industrial Estate, Tamil Nadu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
