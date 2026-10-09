import { Link } from 'react-router-dom';
import { Activity, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Description */}
          <div>
            <div className="footer-brand">
              <Activity className="footer-brand-icon" size={32} />
              <span>Swasthya Care</span>
            </div>
            <p className="footer-desc">
              Providing world-class healthcare with compassion and advanced technology. 
              Your health is our priority, and we are committed to excellence in patient care.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/services">Medical Services</Link></li>
              <li><Link to="/packages">Health Packages</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="footer-heading">Patient Resources</h3>
            <ul className="footer-links">
              <li><Link to="/resources/records">Digital Patient Records</Link></li>
              <li><Link to="/resources/reports">Download Reports</Link></li>
              <li><Link to="/book">Online Appointment</Link></li>
              <li><Link to="/resources/insurance">Insurance & Billing</Link></li>
              <li><Link to="/resources/guidelines">Visitor Guidelines</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Contact Information</h3>
            <ul className="footer-contact">
              <li>
                <MapPin className="footer-contact-icon" size={20} />
                <span>Health Avenue, Vijayawada,<br />Andhra Pradesh, India</span>
              </li>
              <li>
                <Phone className="footer-contact-icon" size={20} />
                <span>+91 80000 45678</span>
              </li>
              <li>
                <Mail className="footer-contact-icon" size={20} />
                <span>care@swasthyacare.example</span>
              </li>
            </ul>
            <div className="footer-emergency">
              <span className="footer-emergency-title">24/7 Emergency Line</span>
              <span className="footer-emergency-number">+91 80000 45679</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Swasthya Care Hospitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
