import { Link } from 'react-router-dom';
import { 
  Calendar, User, Heart, 
  FileText, ArrowRight, CheckCircle2, Bell, Quote,
  Microscope, Pill, Phone, UserRoundSearch, Download
} from 'lucide-react';
import './Home.css';

export function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Expert Care. Better Health. All Under One Roof.</h1>
            <p className="hero-subtitle">
              From trusted consultations and advanced diagnostics to preventive health packages and pharmacy services, Swasthya Care Hospitals is here for every stage of your healthcare journey.
            </p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary">Book an Appointment</Link>
              <Link to="/doctors" className="btn btn-outline">Find a Doctor</Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <CheckCircle2 className="hero-trust-icon" size={20} />
                <span>Experienced Doctors</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 className="hero-trust-icon" size={20} />
                <span>Advanced Diagnostics</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 className="hero-trust-icon" size={20} />
                <span>Patient-Centered Care</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
              alt="Doctor consulting with a patient in a modern hospital" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* 2. Quick Action Cards */}
      <section className="quick-actions-section">
        <div className="quick-actions-grid">
          <Link to="/book" className="action-card">
            <div className="action-icon-wrapper">
              <Calendar size={32} />
            </div>
            <h3>Book Appointment</h3>
            <p>Schedule a consultation with a doctor.</p>
          </Link>
          <Link to="/doctors" className="action-card">
            <div className="action-icon-wrapper">
              <UserRoundSearch size={32} />
            </div>
            <h3>Find a Doctor</h3>
            <p>Find specialists based on department.</p>
          </Link>
          <Link to="/diagnostics" className="action-card">
            <div className="action-icon-wrapper">
              <Microscope size={32} />
            </div>
            <h3>Diagnostic Tests</h3>
            <p>Explore tests and health checkups.</p>
          </Link>
          <Link to="/packages" className="action-card">
            <div className="action-icon-wrapper">
              <Heart size={32} />
            </div>
            <h3>Health Packages</h3>
            <p>Choose preventive health packages.</p>
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Healthcare Designed Around You</h2>
            <p>We combine medical excellence with a patient-first approach to ensure your well-being.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <User className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Experienced Medical Professionals</h3>
                <p>Our team consists of highly qualified doctors with decades of experience in their respective fields.</p>
              </div>
            </div>
            <div className="feature-card">
              <Microscope className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Advanced Diagnostic Facilities</h3>
                <p>State-of-the-art laboratory and imaging services for accurate and timely diagnosis.</p>
              </div>
            </div>
            <div className="feature-card">
              <Heart className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Patient-Centered Care</h3>
                <p>Compassionate care tailored to your unique health needs and personal preferences.</p>
              </div>
            </div>
            <div className="feature-card">
              <FileText className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Digital Health Records</h3>
                <p>Securely access your medical history, prescriptions, and lab reports from anywhere.</p>
              </div>
            </div>
            <div className="feature-card">
              <Calendar className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Easy Appointment Booking</h3>
                <p>Schedule your visits online without the hassle of long phone calls or waiting in line.</p>
              </div>
            </div>
            <div className="feature-card">
              <Bell className="feature-icon" size={32} />
              <div className="feature-content">
                <h3>Follow-up & Reminder Support</h3>
                <p>Automated reminders for your upcoming appointments and medication schedules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Medical Services */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Comprehensive Healthcare Services</h2>
            <p>Explore our wide range of medical services designed to cover all aspects of your health.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=600&auto=format&fit=crop" alt="Doctor Consultation" className="service-image" />
              <div className="service-content">
                <h3>Doctor Consultation</h3>
                <p>Expert medical advice across various specialties for accurate diagnosis and treatment plans.</p>
                <Link to="/services" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600&auto=format&fit=crop" alt="Diagnostics" className="service-image" />
              <div className="service-content">
                <h3>Diagnostics</h3>
                <p>Comprehensive imaging and pathology services using the latest medical technology.</p>
                <Link to="/diagnostics" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop" alt="Pharmacy" className="service-image" />
              <div className="service-content">
                <h3>Pharmacy</h3>
                <p>24/7 fully stocked pharmacy with genuine medicines and healthcare products.</p>
                <Link to="/pharmacy" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop" alt="Preventive Healthcare" className="service-image" />
              <div className="service-content">
                <h3>Preventive Healthcare</h3>
                <p>Tailored health checkup packages to detect and prevent illnesses early.</p>
                <Link to="/packages" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=600&auto=format&fit=crop" alt="Emergency Care" className="service-image" />
              <div className="service-content">
                <h3>Emergency Care</h3>
                <p>Rapid response emergency services available round the clock for critical care.</p>
                <Link to="/services" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop" alt="Specialized Departments" className="service-image" />
              <div className="service-content">
                <h3>Specialized Departments</h3>
                <p>Dedicated centers of excellence for Cardiology, Neurology, Orthopedics, and more.</p>
                <Link to="/services" className="service-cta">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Appointment / Queue Concept */}
      <section className="queue-section">
        <div className="container queue-container">
          <div className="queue-info">
            <h2>Less Waiting. More Caring.</h2>
            <p>Our smart token management system ensures you spend less time in the waiting room and more time receiving the care you need. Track your token status live from your phone.</p>
            <Link to="/book" className="btn btn-accent">Book Your Appointment</Link>
          </div>
          <div className="queue-demo">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Live Queue Status</h3>
            <div className="queue-status">
              <div className="queue-box">
                <span className="queue-label">Current Token</span>
                <span className="queue-number">A-104</span>
              </div>
              <div className="queue-box active">
                <span className="queue-label">Now Serving</span>
                <span className="queue-number">A-101</span>
              </div>
            </div>
            <div className="queue-estimate">
              Estimated Wait: <strong>15 min</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Doctors Preview */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Meet Our Specialists</h2>
            <p>Our dedicated team of doctors brings expertise, compassion, and innovation to patient care.</p>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" alt="Dr. Rajesh Kumar" className="doctor-image" />
              <div className="doctor-info">
                <h3>Dr. Rajesh Kumar</h3>
                <p className="doctor-specialty">Cardiologist</p>
                <p className="doctor-exp">15+ Years Experience<br/>In-Clinic & Video Consult</p>
                <div className="doctor-actions">
                  <Link to="/doctors" className="btn btn-outline btn-sm">View Profile</Link>
                  <Link to="/book" className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=400&auto=format&fit=crop" alt="Dr. Priya Sharma" className="doctor-image" />
              <div className="doctor-info">
                <h3>Dr. Priya Sharma</h3>
                <p className="doctor-specialty">Neurologist</p>
                <p className="doctor-exp">12+ Years Experience<br/>In-Clinic Consult</p>
                <div className="doctor-actions">
                  <Link to="/doctors" className="btn btn-outline btn-sm">View Profile</Link>
                  <Link to="/book" className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" alt="Dr. Amit Patel" className="doctor-image" />
              <div className="doctor-info">
                <h3>Dr. Amit Patel</h3>
                <p className="doctor-specialty">Orthopedic Surgeon</p>
                <p className="doctor-exp">18+ Years Experience<br/>In-Clinic & Video Consult</p>
                <div className="doctor-actions">
                  <Link to="/doctors" className="btn btn-outline btn-sm">View Profile</Link>
                  <Link to="/book" className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" alt="Dr. Sneha Reddy" className="doctor-image" />
              <div className="doctor-info">
                <h3>Dr. Sneha Reddy</h3>
                <p className="doctor-specialty">Pediatrician</p>
                <p className="doctor-exp">10+ Years Experience<br/>In-Clinic Consult</p>
                <div className="doctor-actions">
                  <Link to="/doctors" className="btn btn-outline btn-sm">View Profile</Link>
                  <Link to="/book" className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Health Packages */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Preventive Health Packages</h2>
            <p>Proactive care tailored for you. Choose a package that fits your wellness goals.</p>
          </div>
          <div className="packages-grid">
            <div className="package-card">
              <h3 className="package-title">Basic Health Check</h3>
              <p className="package-desc">Essential screening for overall health awareness.</p>
              <div className="package-price">
                <span className="price-currency">₹</span>1,499
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> Complete Blood Count</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Lipid Profile</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Fasting Blood Sugar</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Physician Consultation</li>
              </ul>
              <Link to="/packages" className="btn btn-outline" style={{ width: '100%' }}>View Details</Link>
            </div>
            <div className="package-card" style={{ borderColor: 'var(--color-primary)', position: 'relative' }}>
              <div className="badge badge-primary" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-primary)', color: 'white' }}>Most Popular</div>
              <h3 className="package-title">Comprehensive Check</h3>
              <p className="package-desc">Thorough assessment of all major body functions.</p>
              <div className="package-price">
                <span className="price-currency">₹</span>3,999
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> 60+ Lab Parameters</li>
                <li><CheckCircle2 className="test-icon" size={18} /> ECG & Chest X-Ray</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Ultrasound Abdomen</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Specialist Consultations</li>
              </ul>
              <Link to="/packages" className="btn btn-primary" style={{ width: '100%' }}>View Details</Link>
            </div>
            <div className="package-card">
              <h3 className="package-title">Women's Wellness</h3>
              <p className="package-desc">Specialized screening designed specifically for women.</p>
              <div className="package-price">
                <span className="price-currency">₹</span>2,999
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> Thyroid Profile</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Pap Smear & Pelvic USG</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Mammogram/Breast Exam</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Gynecologist Consultation</li>
              </ul>
              <Link to="/packages" className="btn btn-outline" style={{ width: '100%' }}>View Details</Link>
            </div>
            <div className="package-card">
              <h3 className="package-title">Senior Care</h3>
              <p className="package-desc">Comprehensive screening for age-related conditions.</p>
              <div className="package-price">
                <span className="price-currency">₹</span>4,499
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> Bone Mineral Density</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Vitamin D & B12</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Prostate/Ovarian Screen</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Detailed Physician Consult</li>
              </ul>
              <Link to="/packages" className="btn btn-outline" style={{ width: '100%' }}>View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Diagnostics */}
      <section className="section section-light">
        <div className="container diagnostics-container">
          <div className="diagnostics-demo">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Recent Reports</h3>
            <div className="report-card">
              <div className="report-info">
                <h4>Complete Blood Count</h4>
                <p>Oct 08, 2026 • Rajesh V.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="report-status status-ready">Ready</span>
                <button className="btn btn-outline btn-sm" aria-label="Download Report"><Download size={16} /></button>
              </div>
            </div>
            <div className="report-card">
              <div className="report-info">
                <h4>Lipid Profile</h4>
                <p>Oct 08, 2026 • Rajesh V.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="report-status status-ready">Ready</span>
                <button className="btn btn-outline btn-sm" aria-label="Download Report"><Download size={16} /></button>
              </div>
            </div>
            <div className="report-card" style={{ opacity: 0.7 }}>
              <div className="report-info">
                <h4>HbA1c (Glycosylated Hb)</h4>
                <p>Oct 08, 2026 • Rajesh V.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="report-status" style={{ backgroundColor: '#e2e8f0', color: '#64748b' }}>Processing</span>
              </div>
            </div>
          </div>
          <div className="diagnostics-info">
            <h2>Clear Reports. Better Decisions.</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Access your diagnostic reports securely online the moment they are ready. No need to wait in line or revisit the hospital just to collect physical copies.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                <CheckCircle2 color="var(--color-accent)" size={20} /> SMS & Email Notifications
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                <CheckCircle2 color="var(--color-accent)" size={20} /> Secure PDF Downloads
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                <CheckCircle2 color="var(--color-accent)" size={20} /> Historical Trend Analysis
              </li>
            </ul>
            <Link to="/diagnostics" className="btn btn-primary">Explore Diagnostic Services</Link>
          </div>
        </div>
      </section>

      {/* 9. Patient Follow-Up */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Your Care Doesn't End After the Visit</h2>
            <p>Stay on track with your treatment plan through our integrated digital follow-up system.</p>
          </div>
          <div className="followup-grid">
            <div className="followup-card">
              <div className="followup-icon-wrapper">
                <Calendar size={24} />
              </div>
              <div className="followup-content">
                <h4>Appointment Reminders</h4>
                <p>Never miss a consultation with automated alerts.</p>
              </div>
            </div>
            <div className="followup-card">
              <div className="followup-icon-wrapper">
                <Pill size={24} />
              </div>
              <div className="followup-content">
                <h4>Medication Alerts</h4>
                <p>Timely reminders to take your prescribed medicines.</p>
              </div>
            </div>
            <div className="followup-card">
              <div className="followup-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="followup-content">
                <h4>Follow-up Reminders</h4>
                <p>Notifications for your next required routine checkup.</p>
              </div>
            </div>
            <div className="followup-card">
              <div className="followup-icon-wrapper">
                <FileText size={24} />
              </div>
              <div className="followup-content">
                <h4>Report Notifications</h4>
                <p>Instant updates when your lab results are ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>What Our Patients Say</h2>
            <p>Real stories from individuals who entrusted us with their health.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "The queue management system is a lifesaver. I could track my token from home and reached the hospital just 10 minutes before my turn. Excellent doctors and very clean facility."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <h4>Meena K.</h4>
                  <p>Cardiology Patient</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "I took the comprehensive health package for my parents. The staff was incredibly patient and guided them through every test smoothly. Getting reports on the phone made everything so easy."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <h4>Arjun R.</h4>
                  <p>Preventive Health</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "Dr. Sharma is brilliant. The way she explained the diagnosis and treatment plan gave me immense confidence. The hospital infrastructure is top-notch and feels very premium."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <h4>Siddharth V.</h4>
                  <p>Neurology Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Health Tips */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Health Tips & Articles</h2>
            <p>Empower yourself with knowledge for a healthier lifestyle.</p>
          </div>
          <div className="tips-grid">
            <div className="tip-card">
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop" alt="Health Checkup" className="tip-image" />
              <div className="tip-content">
                <h3>When Should You Get a Health Checkup?</h3>
                <p>Understanding the importance of regular screening and how frequently you should visit your doctor based on age and lifestyle.</p>
                <Link to="/resources" className="service-cta">Read Article <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="tip-card">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop" alt="Lab Reports" className="tip-image" />
              <div className="tip-content">
                <h3>Understanding Your Diagnostic Reports</h3>
                <p>A simple guide to making sense of common terms and values found in your blood test and pathology reports.</p>
                <Link to="/resources" className="service-cta">Read Article <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="tip-card">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" alt="Healthy Lifestyle" className="tip-image" />
              <div className="tip-content">
                <h3>Simple Habits for Better Health</h3>
                <p>Small, actionable changes you can make to your daily routine today to significantly improve your long-term well-being.</p>
                <Link to="/resources" className="service-cta">Read Article <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>Take the Next Step Toward Better Health</h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Our specialists are ready to provide you with the best possible care. Book your appointment today or reach out for more information.
          </p>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book an Appointment</Link>
            <Link to="/contact" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
