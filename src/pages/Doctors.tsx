import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, GraduationCap, Clock, Calendar, Video, MapPin, Star } from 'lucide-react';
import './Doctors.css';

const doctorsData = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiology',
    experience: '15+ Years',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology)',
    consultation: 'In-Clinic & Video Consult',
    days: 'Mon - Sat',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Rajesh Kumar is a senior interventional cardiologist with extensive experience in managing complex cardiac conditions. He specializes in angioplasty, pacemaker implantation, and heart failure management.',
    expertise: ['Angiography', 'Echocardiography', 'Heart Failure', 'Preventive Cardiology']
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialty: 'Neurology',
    experience: '12+ Years',
    qualifications: 'MBBS, MD (Medicine), DM (Neurology)',
    consultation: 'In-Clinic Consult',
    days: 'Mon - Fri',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Priya Sharma is a highly skilled neurologist with a focus on stroke management and movement disorders. She is dedicated to providing compassionate care for patients with chronic neurological conditions.',
    expertise: ['Stroke Management', 'Epilepsy', 'Migraine', 'Parkinson\'s Disease']
  },
  {
    id: '3',
    name: 'Dr. Amit Patel',
    specialty: 'Orthopedics',
    experience: '18+ Years',
    qualifications: 'MBBS, MS (Orthopedics), Fellowship in Joint Replacement',
    consultation: 'In-Clinic & Video Consult',
    days: 'Mon, Wed, Fri',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Amit Patel is a renowned orthopedic surgeon specializing in joint replacement and arthroscopy. He has performed over 2,000 successful joint replacement surgeries.',
    expertise: ['Knee Replacement', 'Hip Replacement', 'Arthroscopy', 'Sports Injuries']
  },
  {
    id: '4',
    name: 'Dr. Sneha Reddy',
    specialty: 'Pediatrics',
    experience: '10+ Years',
    qualifications: 'MBBS, MD (Pediatrics)',
    consultation: 'In-Clinic Consult',
    days: 'Mon - Sat',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Sneha Reddy is a compassionate pediatrician who specializes in newborn care and childhood vaccinations. She provides a welcoming and friendly environment for children and their parents.',
    expertise: ['Newborn Care', 'Vaccinations', 'Childhood Asthma', 'Nutrition']
  },
  {
    id: '5',
    name: 'Dr. Vikram Singh',
    specialty: 'General Medicine',
    experience: '20+ Years',
    qualifications: 'MBBS, MD (Internal Medicine)',
    consultation: 'In-Clinic & Video Consult',
    days: 'Tue - Sun',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Vikram Singh is a senior consulting physician handling complex internal medicine cases, chronic disease management, and geriatric care.',
    expertise: ['Diabetes Management', 'Hypertension', 'Infectious Diseases', 'Geriatric Care']
  },
  {
    id: '6',
    name: 'Dr. Ananya Das',
    specialty: 'Dermatology',
    experience: '8+ Years',
    qualifications: 'MBBS, MD (Dermatology)',
    consultation: 'In-Clinic Consult',
    days: 'Mon - Fri',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop',
    about: 'Dr. Ananya Das focuses on clinical and cosmetic dermatology. She provides personalized treatments for acne, hair loss, and various skin conditions.',
    expertise: ['Acne Treatment', 'Hair Fall', 'Cosmetic Dermatology', 'Psoriasis']
  }
];

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty ? doc.specialty === selectedSpecialty : true;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      <div className="doctors-header">
        <div className="container">
          <h1>Find the Right Doctor for You</h1>
          <p>Browse our directory of highly qualified specialists and book your consultation instantly.</p>
        </div>
      </div>

      <div className="filters-section">
        <div className="container filters-container">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by doctor name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="filter-select"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Dermatology">Dermatology</option>
          </select>
          <select className="filter-select">
            <option value="">Experience</option>
            <option value="5">5+ Years</option>
            <option value="10">10+ Years</option>
            <option value="15">15+ Years</option>
          </select>
          <select className="filter-select">
            <option value="">Consultation Type</option>
            <option value="In-Clinic">In-Clinic</option>
            <option value="Video">Video Consult</option>
          </select>
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          <div className="doctors-grid">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="doctor-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'left' }}>
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3>{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  
                  <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <GraduationCap size={16} /> <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.qualifications}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Clock size={16} /> {doctor.experience}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Video size={16} /> {doctor.consultation}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <Calendar size={16} /> {doctor.days}
                    </div>
                  </div>

                  <div className="doctor-actions" style={{ flexDirection: 'row' }}>
                    <Link to={`/doctors/${doctor.id}`} className="btn btn-outline btn-sm" style={{ flex: 1 }}>View Profile</Link>
                    <Link to="/book" className="btn btn-primary btn-sm" style={{ flex: 1 }}>Book</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredDoctors.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              <h3>No doctors found matching your criteria.</h3>
              <button className="btn btn-outline mt-4" onClick={() => { setSearchTerm(''); setSelectedSpecialty(''); }}>Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function DoctorProfile() {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const doctor = doctorsData.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="section container text-center">
        <h2>Doctor not found</h2>
        <Link to="/doctors" className="btn btn-primary mt-4">Back to Directory</Link>
      </div>
    );
  }

  return (
    <>
      <section className="profile-header">
        <div className="container profile-container">
          <div className="profile-image-wrapper">
            <img src={doctor.image} alt={doctor.name} className="profile-image" />
          </div>
          <div className="profile-details">
            <h1>{doctor.name}</h1>
            <div className="profile-specialty">{doctor.specialty}</div>
            
            <div className="profile-meta">
              <div className="meta-item">
                <GraduationCap className="meta-icon" size={20} />
                <span>{doctor.qualifications}</span>
              </div>
              <div className="meta-item">
                <Star className="meta-icon" size={20} />
                <span>{doctor.experience} Experience</span>
              </div>
              <div className="meta-item">
                <MapPin className="meta-icon" size={20} />
                <span>Main Block, Floor 2</span>
              </div>
            </div>

            <div className="profile-section">
              <h3>About the Doctor</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                {doctor.about}
              </p>
            </div>

            <div className="profile-section">
              <h3>Areas of Expertise</h3>
              <div className="expertise-tags">
                {doctor.expertise.map(exp => (
                  <span key={exp} className="expertise-tag">{exp}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking-card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Book an Appointment</h2>
            
            <div className="flex gap-4" style={{ marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label className="form-label">Consultation Type</label>
                <select className="form-input">
                  {doctor.consultation.includes('Clinic') && <option>In-Clinic Visit</option>}
                  {doctor.consultation.includes('Video') && <option>Video Consultation</option>}
                </select>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label className="form-label">Select Date</label>
                <input type="date" className="form-input" defaultValue="2026-10-09" />
              </div>
            </div>

            <label className="form-label">Available Slots</label>
            <div className="time-slots">
              {['09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '04:00 PM'].map(slot => (
                <div 
                  key={slot} 
                  className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link to="/book" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Confirm Appointment Slot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
