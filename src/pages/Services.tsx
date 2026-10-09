import { Link } from 'react-router-dom';
import { 
  UserRound, HeartPulse, Heart, Baby, Activity, Bone, Sparkles, Ear, 
  Microscope, ShieldCheck, Pill, Ambulance, ArrowRight, CheckCircle2,
  CalendarCheck, ClipboardCheck, Users, FileSearch, FileText, RefreshCw
} from 'lucide-react';
import './Services.css';

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container services-hero-container">
          <div className="services-hero-content">
            <h1>Complete Healthcare Under One Roof</h1>
            <p>
              From routine consultations to specialized care, diagnostics, preventive health, and pharmacy services, we support your healthcare journey at every step.
            </p>
          </div>
          <div className="services-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
              alt="Healthcare professionals in hospital" 
              className="services-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Our Departments & Services</h2>
            <p>We offer specialized care across multiple disciplines to meet all your medical needs.</p>
          </div>
          <div className="full-services-grid">
            {/* 1. Doctor Consultations */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><UserRound size={28} /></div>
              <h3>Doctor Consultations</h3>
              <p className="fs-desc">Expert medical advice from experienced physicians.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> In-person & Video options</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Easy scheduling</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 2. General Medicine */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><HeartPulse size={28} /></div>
              <h3>General Medicine</h3>
              <p className="fs-desc">Comprehensive care for adults, focusing on prevention and chronic disease management.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Chronic illness care</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Routine checkups</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 3. Cardiology */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Heart size={28} /></div>
              <h3>Cardiology</h3>
              <p className="fs-desc">Advanced cardiac care, from diagnostics to interventional procedures.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> ECG & Echocardiogram</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Angioplasty support</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 4. Pediatrics */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Baby size={28} /></div>
              <h3>Pediatrics</h3>
              <p className="fs-desc">Compassionate healthcare for infants, children, and adolescents.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Vaccinations</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Growth monitoring</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 5. Gynecology */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Activity size={28} /></div>
              <h3>Gynecology</h3>
              <p className="fs-desc">Specialized care for women's reproductive health and wellness.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Maternity care</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Preventive screenings</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 6. Orthopedics */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Bone size={28} /></div>
              <h3>Orthopedics</h3>
              <p className="fs-desc">Treatment for bone, joint, and muscle conditions and injuries.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Joint replacement</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Physiotherapy</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 7. Dermatology */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Sparkles size={28} /></div>
              <h3>Dermatology</h3>
              <p className="fs-desc">Expert treatment for all skin, hair, and nail conditions.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Clinical dermatology</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Cosmetic procedures</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 8. ENT */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Ear size={28} /></div>
              <h3>ENT</h3>
              <p className="fs-desc">Comprehensive care for ear, nose, and throat disorders.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Hearing tests</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Sinus treatments</li>
              </ul>
              <Link to="/doctors" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 9. Diagnostics */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Microscope size={28} /></div>
              <h3>Diagnostics</h3>
              <p className="fs-desc">State-of-the-art laboratory and imaging services.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Digital X-Rays & MRI</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Fully automated pathology</li>
              </ul>
              <Link to="/diagnostics" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 10. Preventive Healthcare */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><ShieldCheck size={28} /></div>
              <h3>Preventive Healthcare</h3>
              <p className="fs-desc">Comprehensive health checkup packages for early detection.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Age-specific packages</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Executive health checks</li>
              </ul>
              <Link to="/packages" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 11. Pharmacy */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Pill size={28} /></div>
              <h3>Pharmacy</h3>
              <p className="fs-desc">24/7 access to genuine medicines and healthcare products.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Doorstep delivery available</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Prescription refills</li>
              </ul>
              <Link to="/pharmacy" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>

            {/* 12. Emergency Care */}
            <div className="full-service-card">
              <div className="fs-icon-wrapper"><Ambulance size={28} /></div>
              <h3>Emergency Care</h3>
              <p className="fs-desc">Round-the-clock emergency medical services and trauma care.</p>
              <ul className="fs-benefits">
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> 24/7 Ambulance</li>
                <li><CheckCircle2 className="fs-benefit-icon" size={16} /> Critical care units</li>
              </ul>
              <Link to="/contact" className="fs-cta">Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="detail-section">
        <div className="container detail-container">
          <div className="detail-content">
            <h2>Expert Consultations</h2>
            <p>
              Easy access to experienced healthcare professionals. Our team of doctors brings decades of clinical expertise across various specialties. Whether you need a routine checkup or a second opinion on a complex condition, we ensure you receive the highest standard of medical attention.
            </p>
            <Link to="/doctors" className="btn btn-outline">Find a Specialist</Link>
          </div>
          <div className="detail-image-wrapper">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" alt="Doctor Consultation" className="detail-image" />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container detail-container reverse">
          <div className="detail-content">
            <h2>Advanced Diagnostics</h2>
            <p>
              Reliable testing with easy access to reports. We utilize the latest imaging and pathology technology to provide accurate and rapid diagnoses. Our digital portal allows you to download and review your reports securely from the comfort of your home.
            </p>
            <Link to="/diagnostics" className="btn btn-outline">View Diagnostics</Link>
          </div>
          <div className="detail-image-wrapper">
            <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=600&auto=format&fit=crop" alt="Advanced Diagnostics Lab" className="detail-image" />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container detail-container">
          <div className="detail-content">
            <h2>Preventive Healthcare</h2>
            <p>
              Health packages designed to identify potential issues early. We believe prevention is better than cure. Our tailored health checkup packages cater to different age groups and lifestyles, helping you stay ahead of potential health risks.
            </p>
            <Link to="/packages" className="btn btn-outline">Explore Packages</Link>
          </div>
          <div className="detail-image-wrapper">
            <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop" alt="Preventive Healthcare Checkup" className="detail-image" />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container detail-container reverse">
          <div className="detail-content">
            <h2>Pharmacy Support</h2>
            <p>
              Convenient access to prescribed medicines. Our 24/7 in-house pharmacy ensures that you never have to worry about the availability of genuine medications. We also offer home delivery services for chronic patients.
            </p>
            <Link to="/pharmacy" className="btn btn-outline">Visit Pharmacy</Link>
          </div>
          <div className="detail-image-wrapper">
            <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop" alt="Hospital Pharmacy" className="detail-image" />
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-heading">
            <h2 style={{ color: 'white' }}>The Patient Journey</h2>
            <p style={{ color: '#cbd5e1' }}>A seamless, guided experience from booking to recovery.</p>
          </div>
          <div className="timeline">
            <div className="timeline-step">
              <div className="timeline-icon"><CalendarCheck size={28} /></div>
              <h4>1. Book</h4>
              <p>Schedule your visit online</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><ClipboardCheck size={28} /></div>
              <h4>2. Check In</h4>
              <p>Quick digital registration</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><Users size={28} /></div>
              <h4>3. Consult</h4>
              <p>Meet your specialist</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><FileSearch size={28} /></div>
              <h4>4. Test</h4>
              <p>Undergo diagnostics if needed</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><FileText size={28} /></div>
              <h4>5. Receive Report</h4>
              <p>Get results digitally</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><RefreshCw size={28} /></div>
              <h4>6. Follow Up</h4>
              <p>Stay on track with reminders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Need Medical Assistance?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
            Our support team is available 24/7 to help you with appointments and emergencies.
          </p>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book an Appointment</Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
