import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, AlertCircle, Clock, 
  Stethoscope, Pill, Microscope, HeartPulse, Check, Send
} from 'lucide-react';
import './Contact.css';
import './Book.css'; // For form input reuse if needed

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.mobile.trim() || formData.mobile.length < 10) newErrors.mobile = 'Valid mobile number is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Fictional submit action
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <h1>We're Here to Help</h1>
            <p>
              Have a question about appointments, diagnostics, health packages, or our services? Get in touch with our team.
            </p>
          </div>
          <div className="contact-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
              alt="Hospital reception desk" 
              className="contact-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section>
        <div className="container">
          <div className="dept-contacts-grid">
            <div className="dept-contact-card">
              <Phone className="dept-icon" size={28} />
              <h3>General Enquiries</h3>
              <p>+91 80000 45678</p>
            </div>
            <div className="dept-contact-card">
              <Stethoscope className="dept-icon" size={28} />
              <h3>Appointment Support</h3>
              <p>+91 80000 45671</p>
            </div>
            <div className="dept-contact-card emergency">
              <AlertCircle className="dept-icon" size={28} />
              <h3>Emergency</h3>
              <p>+91 80000 45679</p>
            </div>
            <div className="dept-contact-card">
              <Pill className="dept-icon" size={28} />
              <h3>Pharmacy</h3>
              <p>+91 80000 45672</p>
            </div>
            <div className="dept-contact-card">
              <Microscope className="dept-icon" size={28} />
              <h3>Diagnostics</h3>
              <p>+91 80000 45673</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            
            {/* Form */}
            <div className="contact-form-wrapper">
              {!isSubmitted ? (
                <>
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and our support team will get back to you within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label">Full Name *</label>
                        <input 
                          type="text" 
                          className={`form-input ${errors.name ? 'error' : ''}`}
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-field">
                        <label className="form-label">Mobile Number *</label>
                        <input 
                          type="tel" 
                          className={`form-input ${errors.mobile ? 'error' : ''}`}
                          placeholder="e.g. 9876543210"
                          value={formData.mobile}
                          onChange={e => setFormData({...formData, mobile: e.target.value})}
                        />
                        {errors.mobile && <span className="form-error">{errors.mobile}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label">Subject *</label>
                        <select 
                          className={`form-select ${errors.subject ? 'error' : ''}`}
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                        >
                          <option value="">Select a subject...</option>
                          <option value="Appointment Booking">Appointment Booking</option>
                          <option value="Health Packages">Health Packages</option>
                          <option value="Diagnostics/Reports">Diagnostics/Reports</option>
                          <option value="Pharmacy/Medicines">Pharmacy/Medicines</option>
                          <option value="Feedback/Complaints">Feedback/Complaints</option>
                          <option value="Other">Other Enquiry</option>
                        </select>
                        {errors.subject && <span className="form-error">{errors.subject}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label">Message *</label>
                        <textarea 
                          className={`form-textarea ${errors.message ? 'error' : ''}`}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                        {errors.message && <span className="form-error">{errors.message}</span>}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                      <Send size={18} /> Send Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success-state">
                  <div className="form-success-icon">
                    <Check size={48} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out to Swasthya Care Hospitals. Our team will review your message and contact you shortly.</p>
                  <button className="btn btn-outline" onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
                  }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Hospital Info & Map */}
            <div className="contact-info-wrapper">
              <div className="info-card">
                <h3>Hospital Information</h3>
                
                <div className="info-item">
                  <MapPin className="info-item-icon" size={24} />
                  <div className="info-item-content">
                    <h4>Address</h4>
                    <p>Swasthya Care Hospitals<br/>Health Avenue, Vijayawada,<br/>Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="info-item">
                  <Phone className="info-item-icon" size={24} />
                  <div className="info-item-content">
                    <h4>Phone</h4>
                    <p>Main Line: +91 80000 45678</p>
                    <p>Emergency: <strong style={{ color: '#fca5a5' }}>+91 80000 45679</strong></p>
                  </div>
                </div>

                <div className="info-item">
                  <Mail className="info-item-icon" size={24} />
                  <div className="info-item-content">
                    <h4>Email</h4>
                    <p><a href="mailto:care@swasthyacare.example">care@swasthyacare.example</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <Clock className="info-item-icon" size={24} />
                  <div className="info-item-content">
                    <h4>Visiting Hours</h4>
                    <p>General Wards: 4:00 PM – 7:00 PM</p>
                    <p>ICU: 11:00 AM – 12:00 PM, 5:00 PM – 6:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
            
          </div>
          
          {/* Emergency CTA */}
          <div className="emergency-cta">
            <h2><HeartPulse size={32} /> Medical Emergency?</h2>
            <p>
              For immediate medical emergencies, contact your local emergency services or visit the nearest emergency facility. Do not wait for an email response for life-threatening conditions.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
            Ready to consult with our experts?
          </h2>
          <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
