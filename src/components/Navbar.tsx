import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Services', path: '/services' },
  { name: 'Health Packages', path: '/packages' },
  { name: 'Diagnostics', path: '/diagnostics' },
  { name: 'Pharmacy', path: '/pharmacy' },
  { name: 'Patient Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand">
          <Activity className="brand-icon" size={32} />
          <span>Swasthya Care</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
          <Link to="/book" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link 
          to="/book" 
          className="btn btn-primary" 
          style={{ marginTop: '1rem' }}
          onClick={() => setIsOpen(false)}
        >
          Book an Appointment
        </Link>
      </div>
    </nav>
  );
}
