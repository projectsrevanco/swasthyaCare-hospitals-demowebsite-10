import { Heart, Target, Lightbulb, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import './About.css';

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <h1 className="hero-title">Compassionate Care. Trusted Expertise.</h1>
            <p className="hero-subtitle">
              At Swasthya Care Hospitals, we combine experienced medical professionals, modern facilities, and patient-focused care to make healthcare simpler and more accessible.
            </p>
          </div>
          <div className="about-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
              alt="Hospital corridor with medical team" 
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Our Story</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Swasthya Care Hospitals was founded with a singular vision: to bring world-class healthcare to the community through a patient-centered approach. Over the years, we have grown into a premier medical institution known for its experienced professionals and state-of-the-art infrastructure.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            We believe in bridging the gap between advanced medical science and compassionate human care. By implementing modern healthcare facilities, making treatments more accessible, and focusing heavily on a digital-first patient experience, we are redefining what it means to be a modern hospital.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <Target className="mv-icon" size={48} />
              <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                To provide accessible, reliable, and compassionate healthcare supported by modern medical practices.
              </p>
            </div>
            <div className="mv-card" style={{ borderTopColor: 'var(--color-accent)' }}>
              <Lightbulb className="mv-icon" size={48} style={{ color: 'var(--color-accent)' }} />
              <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                To become a trusted healthcare destination where technology and human care work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Our Core Values</h2>
            <p>The principles that guide every interaction and decision at Swasthya Care.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper"><HeartHandshake size={24} /></div>
              <h3>Compassion</h3>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper"><ShieldCheck size={24} /></div>
              <h3>Trust</h3>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper"><Award size={24} /></div>
              <h3>Excellence</h3>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper"><Heart size={24} /></div>
              <h3>Patient Safety</h3>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper"><Target size={24} /></div>
              <h3>Transparency</h3>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper"><Lightbulb size={24} /></div>
              <h3>Innovation</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>World-Class Facilities</h2>
            <p>Designed for comfort, efficiency, and the best possible medical outcomes.</p>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop" alt="Consultation Rooms" className="facility-image" />
              <div className="facility-content">
                <h3>Consultation Rooms</h3>
                <p>Private, well-equipped rooms designed for comfortable doctor-patient interactions.</p>
              </div>
            </div>
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop" alt="Diagnostic Laboratory" className="facility-image" />
              <div className="facility-content">
                <h3>Diagnostic Laboratory</h3>
                <p>Advanced imaging and pathology lab for rapid, accurate results.</p>
              </div>
            </div>
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop" alt="Pharmacy" className="facility-image" />
              <div className="facility-content">
                <h3>Pharmacy</h3>
                <p>Fully stocked 24/7 in-house pharmacy for all your medication needs.</p>
              </div>
            </div>
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop" alt="Waiting Areas" className="facility-image" />
              <div className="facility-content">
                <h3>Waiting Areas</h3>
                <p>Spacious, clean, and comfortable lounging areas with live queue displays.</p>
              </div>
            </div>
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" alt="Patient Support" className="facility-image" />
              <div className="facility-content">
                <h3>Patient Support</h3>
                <p>Dedicated helpdesk and coordination teams to assist you at every step.</p>
              </div>
            </div>
            <div className="facility-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Digital Services" className="facility-image" />
              <div className="facility-content">
                <h3>Digital Services</h3>
                <p>Seamless online booking, tele-consultations, and digital medical records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="section-heading">
            <h2 style={{ color: 'white' }}>Why Patients Choose Us</h2>
            <p style={{ color: '#cbd5e1' }}>A track record built on trust, excellence, and dedication.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Specialists</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Departments</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Patients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Patient Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
