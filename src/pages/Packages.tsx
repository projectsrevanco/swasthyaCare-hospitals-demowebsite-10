import { Link } from 'react-router-dom';
import { CheckCircle2, Minus } from 'lucide-react';
import './Packages.css';

export function Packages() {
  return (
    <>
      {/* Hero Section */}
      <section className="packages-hero">
        <div className="container">
          <h1>Stay Ahead of Your Health</h1>
          <p>Choose preventive health packages designed for different ages, lifestyles, and healthcare needs.</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section" style={{ marginTop: '-4rem', paddingTop: 0 }}>
        <div className="container">
          <div className="packages-grid">
            
            {/* Basic Health Check */}
            <div className="package-card" style={{ zIndex: 10, marginTop: '2rem' }}>
              <h3 className="package-title">Basic Health Check</h3>
              <p className="package-desc" style={{ marginBottom: '0.5rem' }}>Essential screening for overall health awareness.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Ideal for: Age 20-30</p>
              <div className="package-price">
                <span className="price-currency">₹</span>1,499
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> CBC</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Blood Sugar</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Blood Pressure</li>
                <li><CheckCircle2 className="test-icon" size={18} /> General Consultation</li>
              </ul>
              <Link to="/book" className="btn btn-outline" style={{ width: '100%' }}>Book Package</Link>
            </div>

            {/* Comprehensive Health Check */}
            <div className="package-card" style={{ zIndex: 11, borderColor: 'var(--color-primary)', borderTopWidth: '4px' }}>
              <div className="badge badge-primary" style={{ alignSelf: 'flex-start', marginBottom: '1rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>Most Popular</div>
              <h3 className="package-title">Comprehensive Check</h3>
              <p className="package-desc" style={{ marginBottom: '0.5rem' }}>Thorough assessment of major body functions.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Ideal for: Age 30-50</p>
              <div className="package-price">
                <span className="price-currency">₹</span>3,999
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> CBC & Lipid Profile</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Liver & Kidney Function</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Blood Sugar & ECG</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Doctor Consultation</li>
              </ul>
              <Link to="/book" className="btn btn-primary" style={{ width: '100%' }}>Book Package</Link>
            </div>

            {/* Women's Wellness */}
            <div className="package-card" style={{ zIndex: 10, marginTop: '2rem' }}>
              <h3 className="package-title">Women's Wellness</h3>
              <p className="package-desc" style={{ marginBottom: '0.5rem' }}>Specialized screening designed for women.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Ideal for: Women 30+</p>
              <div className="package-price">
                <span className="price-currency">₹</span>2,999
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> CBC & Thyroid</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Blood Sugar</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Preventive screening</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Women's health consultation</li>
              </ul>
              <Link to="/book" className="btn btn-outline" style={{ width: '100%' }}>Book Package</Link>
            </div>

            {/* Senior Care */}
            <div className="package-card" style={{ zIndex: 10, marginTop: '2rem' }}>
              <h3 className="package-title">Senior Care</h3>
              <p className="package-desc" style={{ marginBottom: '0.5rem' }}>Screening for age-related conditions.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Ideal for: Age 50+</p>
              <div className="package-price">
                <span className="price-currency">₹</span>4,499
              </div>
              <ul className="package-tests">
                <li><CheckCircle2 className="test-icon" size={18} /> CBC & Diabetes screening</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Lipid & Kidney function</li>
                <li><CheckCircle2 className="test-icon" size={18} /> ECG</li>
                <li><CheckCircle2 className="test-icon" size={18} /> Doctor consultation</li>
              </ul>
              <Link to="/book" className="btn btn-outline" style={{ width: '100%' }}>Book Package</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Package Comparison</h2>
            <p>Compare our health packages to find the right one for your needs.</p>
          </div>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Test Parameter</th>
                  <th>Basic Check</th>
                  <th>Women's Wellness</th>
                  <th>Comprehensive Check</th>
                  <th>Senior Care</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete Blood Count (CBC)</td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Blood Sugar / Diabetes</td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Blood Pressure</td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Thyroid Profile</td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Lipid Profile (Cholesterol)</td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Kidney Function Test</td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Liver Function Test</td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>ECG</td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><Minus className="table-dash" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                  <td><CheckCircle2 className="table-check" size={20} /></td>
                </tr>
                <tr>
                  <td>Specialist Consultation</td>
                  <td>General</td>
                  <td>Gynecologist</td>
                  <td>Physician</td>
                  <td>Physician</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
            Choose a package and take the first step toward preventive care.
          </h2>
          <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
            Book Health Package
          </Link>
        </div>
      </section>
    </>
  );
}
