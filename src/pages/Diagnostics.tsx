import { Link } from 'react-router-dom';
import { 
  Droplet, Activity, Microscope, HeartPulse, ShieldCheck, Download, 
  FileText, ActivitySquare, Scan
} from 'lucide-react';
import './Diagnostics.css';

export function Diagnostics() {
  return (
    <>
      {/* Hero Section */}
      <section className="diag-hero">
        <div className="container diag-hero-container">
          <div className="diag-hero-content">
            <h1>Accurate Tests. Clear Reports.</h1>
            <p>
              Access diagnostic services and understand your test journey with a simple digital experience.
            </p>
            <Link to="/book" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Book a Test</Link>
          </div>
          <div className="diag-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" 
              alt="Medical laboratory testing" 
              className="diag-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Diagnostic Categories */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Explore Diagnostic Tests</h2>
            <p>Comprehensive testing services performed in our state-of-the-art laboratory.</p>
          </div>
          <div className="diag-cats-grid">
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><Droplet size={24} /></div>
              <h3>Blood Tests</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><Activity size={24} /></div>
              <h3>Diabetes Tests</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><Microscope size={24} /></div>
              <h3>Thyroid Tests</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><ActivitySquare size={24} /></div>
              <h3>Liver Tests</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><Droplet size={24} /></div>
              <h3>Kidney Tests</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><HeartPulse size={24} /></div>
              <h3>Lipid Profile</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><Activity size={24} /></div>
              <h3>ECG</h3>
            </div>
            <div className="diag-cat-card">
              <div className="diag-cat-icon"><ShieldCheck size={24} /></div>
              <h3>Health Screening</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>How It Works</h2>
            <p>A seamless process from booking your test to receiving your digital report.</p>
          </div>
          <div className="diag-steps-container">
            <div className="diag-step">
              <div className="step-number">1</div>
              <h4>Select Test</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Choose from our comprehensive test menu.</p>
            </div>
            <div className="diag-step">
              <div className="step-number">2</div>
              <h4>Book Appointment</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Schedule a convenient date and time.</p>
            </div>
            <div className="diag-step">
              <div className="step-number">3</div>
              <h4>Visit Diagnostic Center</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Check in at our modern facility.</p>
            </div>
            <div className="diag-step">
              <div className="step-number">4</div>
              <h4>Complete Test</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Samples collected by experts safely.</p>
            </div>
            <div className="diag-step">
              <div className="step-number">5</div>
              <h4>Receive Report</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Get an instant SMS when results are ready.</p>
            </div>
            <div className="diag-step">
              <div className="step-number">6</div>
              <h4>Consult Doctor</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Review findings with a specialist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report UI Demo */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="report-demo-wrapper">
            <div className="report-demo-header">
              <h2>Access Your Results Anywhere</h2>
              <p>Experience our secure digital report portal.</p>
            </div>
            
            <div className="digital-report-ui">
              <div className="report-ui-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText className="text-primary" size={24} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>Diagnostic Report</span>
                </div>
                <div className="report-ui-badge">Available</div>
              </div>
              
              <div className="report-ui-body">
                <div className="report-ui-grid">
                  <div className="report-field">
                    <span className="report-field-label">Patient Name</span>
                    <span className="report-field-value">Ananya Rao</span>
                  </div>
                  <div className="report-field">
                    <span className="report-field-label">Date</span>
                    <span className="report-field-value">08 Oct 2026</span>
                  </div>
                  <div className="report-field" style={{ gridColumn: '1 / -1' }}>
                    <span className="report-field-label">Test</span>
                    <span className="report-field-value" style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>Complete Blood Count (CBC)</span>
                  </div>
                </div>
                
                <div className="report-ui-actions">
                  <button className="btn btn-outline" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <Scan size={18} /> View Report
                  </button>
                  <button className="btn btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <Download size={18} /> Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="understanding-reports">
              <h4>Understanding Your Reports</h4>
              <p>Please note that this is a digital demonstration interface. While our reports are designed to be clear and transparent, you should always discuss any abnormal results directly with a qualified medical professional for proper diagnosis and treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
            Need a Diagnostic Test?
          </h2>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
              Book a Test
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
