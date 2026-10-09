import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Heart, Baby, Sparkles, Activity, Bone, Ear,
  ChevronLeft, ChevronRight, Check, Calendar as CalendarIcon
} from 'lucide-react';
import './Book.css';

// Mock Data
const departments = [
  { id: 'General Medicine', icon: <HeartPulse size={32} /> },
  { id: 'Cardiology', icon: <Heart size={32} /> },
  { id: 'Pediatrics', icon: <Baby size={32} /> },
  { id: 'Dermatology', icon: <Sparkles size={32} /> },
  { id: 'Gynecology', icon: <Activity size={32} /> },
  { id: 'Orthopedics', icon: <Bone size={32} /> },
  { id: 'ENT', icon: <Ear size={32} /> }
];

const mockDoctors = [
  { id: 'd1', name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', exp: '15+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop' },
  { id: 'd2', name: 'Dr. Priya Sharma', specialty: 'Neurology', exp: '12+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=200&auto=format&fit=crop' },
  { id: 'd3', name: 'Dr. Amit Patel', specialty: 'Orthopedics', exp: '18+ Years', type: 'Video Consult', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop' },
  { id: 'd4', name: 'Dr. Sneha Reddy', specialty: 'Pediatrics', exp: '10+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop' },
  { id: 'd5', name: 'Dr. Vikram Singh', specialty: 'General Medicine', exp: '20+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop' },
  { id: 'd6', name: 'Dr. Ananya Das', specialty: 'Dermatology', exp: '8+ Years', type: 'Video Consult', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=200&auto=format&fit=crop' },
  { id: 'd7', name: 'Dr. Meera Sharma', specialty: 'Gynecology', exp: '14+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1594824436998-d40b9044b76a?q=80&w=200&auto=format&fit=crop' },
  { id: 'd8', name: 'Dr. Suresh Babu', specialty: 'ENT', exp: '11+ Years', type: 'In-Clinic', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop' }, // Reused image
];

const timeSlots = [
  { time: '09:00 AM', available: true },
  { time: '09:30 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '10:30 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '11:30 AM', available: true },
  { time: '02:00 PM', available: true },
  { time: '02:30 PM', available: true },
  { time: '03:00 PM', available: false },
  { time: '03:30 PM', available: true },
];

export function Book() {
  const [step, setStep] = useState(1);
  const [dept, setDept] = useState('');
  const [doctor, setDoctor] = useState<any>(null);
  const [date, setDate] = useState('08 Oct 2026');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: 'Male',
    mobile: '',
    email: '',
    reason: '',
    type: 'New Patient'
  });
  const [errors, setErrors] = useState<any>({});

  const filteredDoctors = mockDoctors.filter(d => d.specialty === dept);

  const nextStep = () => {
    if (step === 1 && !dept) return alert('Please select a department');
    if (step === 2 && !doctor) return alert('Please select a doctor');
    if (step === 3 && !date) return alert('Please select a date');
    if (step === 4 && !time) return alert('Please select a time slot');
    if (step === 5) {
      // Validate form
      const newErrors: any = {};
      if (!patient.name) newErrors.name = 'Full name is required';
      if (!patient.mobile || patient.mobile.length < 10) newErrors.mobile = 'Valid mobile number is required';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const renderStepIndicator = () => {
    if (step === 7) return null; // Hide in success state
    const steps = [
      { num: 1, label: 'Department' },
      { num: 2, label: 'Doctor' },
      { num: 3, label: 'Date' },
      { num: 4, label: 'Time' },
      { num: 5, label: 'Details' },
      { num: 6, label: 'Confirm' }
    ];

    return (
      <div className="stepper-header">
        <h1>Book an Appointment</h1>
        <p>Follow the steps below to schedule your visit.</p>
        <div className="steps-indicator mt-8">
          {steps.map(s => (
            <div key={s.num} className={`step-item ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}>
              <div className="step-number">
                {step > s.num ? <Check size={14} /> : s.num}
              </div>
              <div className="step-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-card">
          
          <div className="stepper-container">
            {renderStepIndicator()}
          </div>

          <div className="step-content">
            
            {/* Step 1: Department */}
            {step === 1 && (
              <div className="step-body">
                <h2 className="step-title">Select Department</h2>
                <div className="selection-grid">
                  {departments.map(d => (
                    <div 
                      key={d.id} 
                      className={`selection-card ${dept === d.id ? 'selected' : ''}`}
                      onClick={() => setDept(d.id)}
                    >
                      <div className="selection-icon">{d.icon}</div>
                      <div className="selection-title">{d.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Doctor */}
            {step === 2 && (
              <div className="step-body">
                <h2 className="step-title">Choose a Specialist</h2>
                {filteredDoctors.length > 0 ? (
                  <div className="doctor-selection-grid">
                    {filteredDoctors.map(d => (
                      <div 
                        key={d.id} 
                        className={`doc-sel-card ${doctor?.id === d.id ? 'selected' : ''}`}
                        onClick={() => setDoctor(d)}
                      >
                        <div className="doc-sel-header">
                          <img src={d.image} alt={d.name} className="doc-sel-avatar" />
                          <div className="doc-sel-info">
                            <h4>{d.name}</h4>
                            <p>{d.specialty} • {d.exp}</p>
                          </div>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                          Available for {d.type}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>No doctors found for this department currently.</p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Date */}
            {step === 3 && (
              <div className="step-body">
                <h2 className="step-title">Select Date</h2>
                <div className="datetime-container">
                  <div className="calendar-header">
                    <button className="calendar-nav"><ChevronLeft /></button>
                    <span>October 2026</span>
                    <button className="calendar-nav"><ChevronRight /></button>
                  </div>
                  <div className="calendar-grid">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                      <div key={d} className="calendar-day-header">{d}</div>
                    ))}
                    {/* Empty slots for spacing */}
                    <div className="calendar-day empty"></div>
                    <div className="calendar-day empty"></div>
                    <div className="calendar-day empty"></div>
                    <div className="calendar-day empty"></div>
                    {/* Days */}
                    {[1,2,3,4,5,6,7].map(num => (
                      <div key={num} className="calendar-day unavailable">{num}</div>
                    ))}
                    <div 
                      className={`calendar-day ${date === '08 Oct 2026' ? 'selected' : ''}`}
                      onClick={() => setDate('08 Oct 2026')}
                    >8</div>
                    <div 
                      className={`calendar-day ${date === '09 Oct 2026' ? 'selected' : ''}`}
                      onClick={() => setDate('09 Oct 2026')}
                    >9</div>
                    <div 
                      className={`calendar-day ${date === '10 Oct 2026' ? 'selected' : ''}`}
                      onClick={() => setDate('10 Oct 2026')}
                    >10</div>
                    <div className="calendar-day unavailable">11</div>
                    <div 
                      className={`calendar-day ${date === '12 Oct 2026' ? 'selected' : ''}`}
                      onClick={() => setDate('12 Oct 2026')}
                    >12</div>
                    <div 
                      className={`calendar-day ${date === '13 Oct 2026' ? 'selected' : ''}`}
                      onClick={() => setDate('13 Oct 2026')}
                    >13</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Time */}
            {step === 4 && (
              <div className="step-body">
                <h2 className="step-title">Select Time</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Available slots for {date}
                </p>
                <div className="datetime-container">
                  <div className="time-slots-grid">
                    {timeSlots.map(t => (
                      <button 
                        key={t.time}
                        className={`time-slot-btn ${time === t.time ? 'selected' : ''}`}
                        disabled={!t.available}
                        onClick={() => setTime(t.time)}
                      >
                        {t.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Patient Details */}
            {step === 5 && (
              <div className="step-body">
                <h2 className="step-title">Patient Details</h2>
                <div className="patient-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Patient Type</label>
                      <select 
                        className="form-select"
                        value={patient.type}
                        onChange={e => setPatient({...patient, type: e.target.value})}
                      >
                        <option>New Patient</option>
                        <option>Existing Patient</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className={`form-input ${errors.name ? 'error' : ''}`} 
                        placeholder="John Doe"
                        value={patient.name}
                        onChange={e => {setPatient({...patient, name: e.target.value}); setErrors({...errors, name: ''})}}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Age</label>
                      <input 
                        type="number" 
                        className="form-input" 
                        placeholder="30"
                        value={patient.age}
                        onChange={e => setPatient({...patient, age: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Gender</label>
                      <select 
                        className="form-select"
                        value={patient.gender}
                        onChange={e => setPatient({...patient, gender: e.target.value})}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Mobile Number *</label>
                      <input 
                        type="tel" 
                        className={`form-input ${errors.mobile ? 'error' : ''}`} 
                        placeholder="9876543210"
                        value={patient.mobile}
                        onChange={e => {setPatient({...patient, mobile: e.target.value}); setErrors({...errors, mobile: ''})}}
                      />
                      {errors.mobile && <span className="form-error">{errors.mobile}</span>}
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="john@example.com"
                        value={patient.email}
                        onChange={e => setPatient({...patient, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Reason for Visit (Optional)</label>
                      <textarea 
                        className="form-textarea"
                        placeholder="Briefly describe your symptoms..."
                        value={patient.reason}
                        onChange={e => setPatient({...patient, reason: e.target.value})}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Confirmation */}
            {step === 6 && (
              <div className="step-body">
                <h2 className="step-title">Review Appointment</h2>
                <div className="summary-box">
                  <div className="summary-row">
                    <span className="summary-label">Department</span>
                    <span className="summary-value">{dept}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Doctor</span>
                    <span className="summary-value">{doctor?.name}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Date & Time</span>
                    <span className="summary-value">{date} | {time}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Patient Name</span>
                    <span className="summary-value">{patient.name}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Mobile</span>
                    <span className="summary-value">{patient.mobile}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Success State */}
            {step === 7 && (
              <div className="step-body success-state">
                <div className="success-icon-wrapper">
                  <Check size={48} />
                </div>
                <h2 className="success-title">Appointment Confirmed!</h2>
                <p className="success-subtitle">Your appointment has been successfully scheduled. Please arrive 15 minutes early.</p>
                
                <div className="token-card">
                  <div style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Token Number</div>
                  <div className="token-display">A-108</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>ID: SCH-2026-1048</div>
                  
                  <div className="success-details">
                    <div className="sd-item">
                      <span className="sd-label">Date</span>
                      <span className="sd-val">{date}</span>
                    </div>
                    <div className="sd-item">
                      <span className="sd-label">Time</span>
                      <span className="sd-val">{time}</span>
                    </div>
                    <div className="sd-item" style={{ gridColumn: '1 / -1' }}>
                      <span className="sd-label">Doctor</span>
                      <span className="sd-val">{doctor?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="success-actions">
                  <button className="btn btn-outline"><CalendarIcon size={18} style={{ marginRight: '0.5rem' }} /> Add to Calendar</button>
                  <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 7 && (
              <div className={`booking-actions ${step === 1 ? 'center' : ''}`}>
                {step > 1 && (
                  <button className="btn btn-outline" onClick={prevStep}>Back</button>
                )}
                <button className="btn btn-primary" onClick={nextStep}>
                  {step === 6 ? 'Confirm Appointment' : 'Next Step'} <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          * This is a demonstration interface. No actual appointments are booked.
        </p>
      </div>
    </section>
  );
}
