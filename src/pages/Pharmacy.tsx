import { Link } from 'react-router-dom';
import { Pill, FileText, Package, Bell, Truck, Eye, LifeBuoy } from 'lucide-react';
import './Pharmacy.css';

export function Pharmacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="pharmacy-hero">
        <div className="container pharmacy-hero-container">
          <div className="pharmacy-hero-content">
            <h1>Convenient Pharmacy Support</h1>
            <p>
              Get prescribed medicines and pharmacy assistance as part of your seamless healthcare journey at Swasthya Care Hospitals.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Contact Pharmacy</Link>
          </div>
          <div className="pharmacy-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop" 
              alt="Pharmacist assisting a patient" 
              className="pharmacy-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Pharmacy Services</h2>
            <p>We ensure that your prescribed treatments are easily accessible and managed effectively.</p>
          </div>
          <div className="pharmacy-services-grid">
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><FileText size={32} /></div>
              <h3>Prescription Support</h3>
              <p>Easily access and manage your digital prescriptions directly through our patient portal.</p>
            </div>
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><Package size={32} /></div>
              <h3>Medicine Availability</h3>
              <p>A fully stocked inventory of authentic medicines, ensuring you get exactly what your doctor ordered.</p>
            </div>
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><LifeBuoy size={32} /></div>
              <h3>Pharmacy Assistance</h3>
              <p>Guidance from our trained pharmacists on proper dosage, timing, and potential side effects.</p>
            </div>
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><Bell size={32} /></div>
              <h3>Refill Reminders</h3>
              <p>Automated SMS and email reminders when it's time to refill your ongoing chronic medications.</p>
            </div>
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><Truck size={32} /></div>
              <h3>Home Delivery Concept</h3>
              <p>Explore our assisted home delivery initiatives designed to help senior citizens and chronic patients.</p>
            </div>
            <div className="pharmacy-service-card">
              <div className="pharmacy-service-icon"><Pill size={32} /></div>
              <h3>Quality Assurance</h3>
              <p>All medicines are stored under strict temperature controls to maintain their maximum efficacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prescription UI */}
      <section className="section">
        <div className="container">
          <div className="prescription-demo-container">
            <div className="prescription-demo-content">
              <h2>Seamless Digital Prescriptions</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Say goodbye to lost paper slips. Every time you consult a doctor at Swasthya Care Hospitals, your prescription is instantly securely generated and attached to your patient profile.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                You can view the exact dosage instructions (e.g., Morning-Afternoon-Night) and request assistance from our pharmacy team directly from this digital interface.
              </p>
              <Link to="/resources" className="btn btn-outline">Learn About Our Digital Services</Link>
            </div>

            <div className="prescription-ui-wrapper">
              <div className="prescription-ui-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={24} />
                  <span style={{ fontWeight: 600, fontSize: '1.15rem' }}>E-Prescription</span>
                </div>
                <div className="prescription-ui-badge">Active</div>
              </div>

              <div className="prescription-ui-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div className="prescription-field" style={{ marginBottom: 0 }}>
                    <span className="prescription-label">Prescription ID</span>
                    <span className="prescription-value" style={{ color: 'var(--color-primary-dark)' }}>RX-2048</span>
                  </div>
                  <div className="prescription-field" style={{ marginBottom: 0, textAlign: 'right' }}>
                    <span className="prescription-label">Date</span>
                    <span className="prescription-value">08 Oct 2026</span>
                  </div>
                </div>

                <div className="prescription-field">
                  <span className="prescription-label">Prescribed By</span>
                  <span className="prescription-value">Dr. Meera Sharma</span>
                </div>

                <div className="prescription-field">
                  <span className="prescription-label">Medicines</span>
                  <ul className="medicine-list">
                    <li className="medicine-item">
                      <span className="medicine-name">Medicine A</span>
                      <span className="medicine-dosage">1-0-1</span>
                    </li>
                    <li className="medicine-item">
                      <span className="medicine-name">Medicine B</span>
                      <span className="medicine-dosage">0-1-0</span>
                    </li>
                  </ul>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                    * 1-0-1 indicates Morning and Night dosage.
                  </p>
                </div>
              </div>

              <div className="prescription-actions">
                <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem', fontSize: '0.95rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                  <Eye size={18} /> View PDF
                </button>
                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem', fontSize: '0.95rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                  <LifeBuoy size={18} /> Request Assistance
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary-dark)', textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
            Ready to experience better healthcare?
          </h2>
          <Link to="/book" className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
