import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileText, Pill, 
  Activity, Calendar, Clock, CheckCircle2, Menu, Bell,
  User, FileSignature, UserPlus
} from 'lucide-react';
import './Dashboard.css';
import './DoctorDashboard.css';

export function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [sidebarOpen]);

  const navItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'Today\'s Appointments', icon: <Calendar size={20} /> },
    { id: 'Patients', icon: <Users size={20} /> },
    { id: 'Medical Records', icon: <Activity size={20} /> },
    { id: 'Reports', icon: <FileText size={20} /> },
    { id: 'Prescriptions', icon: <Pill size={20} /> },
    { id: 'Follow-ups', icon: <Clock size={20} />, badge: 3 },
    { id: 'Profile', icon: <User size={20} /> }
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <Activity color="var(--color-primary)" />
          Doctor Portal
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <div 
              key={item.id} 
              className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.icon}
              {item.id}
              {item.badge && <span className="sidebar-link-badge">{item.badge}</span>}
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <Link to="/" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <button className="topbar-mobile-toggle" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="topbar-right">
            <button className="topbar-action">
              <Bell size={20} />
              <span className="topbar-badge">5</span>
            </button>
            <div className="user-profile">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop" alt="Dr. Rajesh" className="user-avatar" style={{ padding: 0 }} />
              <div className="user-info">
                <span className="user-name">Dr. Rajesh Kumar</span>
                <span className="user-role">Cardiology</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Views */}
        <main className="dashboard-content">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'Overview' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Overview</h2>
                <p>Your practice at a glance for Oct 08, 2026.</p>
              </div>

              <div className="doc-dash-grid">
                <div className="doc-stat-card">
                  <div className="doc-stat-icon"><Calendar size={24} /></div>
                  <div className="doc-stat-info">
                    <h3>24</h3>
                    <p>Total Appointments</p>
                  </div>
                </div>
                <div className="doc-stat-card">
                  <div className="doc-stat-icon"><Clock size={24} /></div>
                  <div className="doc-stat-info">
                    <h3>6</h3>
                    <p>Waiting Patients</p>
                  </div>
                </div>
                <div className="doc-stat-card accent">
                  <div className="doc-stat-icon"><CheckCircle2 size={24} /></div>
                  <div className="doc-stat-info">
                    <h3>12</h3>
                    <p>Completed Consultations</p>
                  </div>
                </div>
                <div className="doc-stat-card">
                  <div className="doc-stat-icon"><UserPlus size={24} /></div>
                  <div className="doc-stat-info">
                    <h3>3</h3>
                    <p>Follow-ups Due</p>
                  </div>
                </div>
              </div>

              <div className="dash-card">
                <div className="dash-card-header">
                  <span className="dash-card-title">Live Appointment Queue</span>
                  <button className="btn btn-outline btn-sm">View All</button>
                </div>
                <div className="dash-table-wrapper" style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>Token</th>
                        <th>Patient Name</th>
                        <th>Time</th>
                        <th>Visit Type</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>A-104</strong></td>
                        <td>Rahul Verma</td>
                        <td>10:00 AM</td>
                        <td>Follow-up</td>
                        <td><span className="status-badge status-consultation"><div style={{width: 6, height: 6, borderRadius: '50%', backgroundColor: '#1e40af'}}></div> In Consultation</span></td>
                        <td><button className="btn btn-outline btn-sm">Open File</button></td>
                      </tr>
                      <tr>
                        <td><strong>A-105</strong></td>
                        <td>Sneha Reddy</td>
                        <td>10:15 AM</td>
                        <td>New Consult</td>
                        <td><span className="status-badge status-waiting"><div style={{width: 6, height: 6, borderRadius: '50%', backgroundColor: '#854d0e'}}></div> Waiting</span></td>
                        <td><button className="btn btn-outline btn-sm" onClick={() => setActiveTab('Patients')}>Call Next</button></td>
                      </tr>
                      <tr>
                        <td><strong>A-106</strong></td>
                        <td>Amit Patel</td>
                        <td>10:30 AM</td>
                        <td>Report Review</td>
                        <td><span className="status-badge status-waiting"><div style={{width: 6, height: 6, borderRadius: '50%', backgroundColor: '#854d0e'}}></div> Waiting</span></td>
                        <td><button className="btn btn-outline btn-sm" disabled>View File</button></td>
                      </tr>
                      <tr>
                        <td><strong>A-103</strong></td>
                        <td>Kiran Kumar</td>
                        <td>09:45 AM</td>
                        <td>New Consult</td>
                        <td><span className="status-badge status-completed"><div style={{width: 6, height: 6, borderRadius: '50%', backgroundColor: '#065f46'}}></div> Completed</span></td>
                        <td><button className="btn btn-outline btn-sm" disabled>Review</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PATIENT PROFILE TAB (Simulated click from Call Next) */}
          {activeTab === 'Patients' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Patient File</h2>
                <p>Viewing active consultation details.</p>
              </div>

              <div className="patient-profile-header">
                <div className="patient-profile-avatar">SR</div>
                <div className="patient-profile-info">
                  <h3>Sneha Reddy</h3>
                  <div className="patient-profile-tags">
                    <span className="patient-tag"><User size={16} /> 32 yrs, Female</span>
                    <span className="patient-tag"><Activity size={16} /> Blood Grp: O+</span>
                    <span className="patient-tag"><Clock size={16} /> Last Visit: 12 Jan 2026</span>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-outline"><FileSignature size={18} style={{ marginRight: '0.5rem' }} /> New Prescription</button>
                  <button className="btn btn-primary">Complete Consultation</button>
                </div>
              </div>

              <div className="patient-history-grid">
                <div className="history-card">
                  <h4><Activity size={20} /> Vitals & History</h4>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-main)', lineHeight: '1.8' }}>
                    <li>BP: 120/80 mmHg</li>
                    <li>Heart Rate: 72 bpm</li>
                    <li>Known Allergies: Penicillin</li>
                    <li>Conditions: Mild Hypertension</li>
                  </ul>
                </div>
                <div className="history-card">
                  <h4><FileText size={20} /> Recent Reports</h4>
                  <div className="list-group">
                    <div className="list-item" style={{ padding: '0.75rem', border: 'none', backgroundColor: '#f8fafc' }}>
                      <FileText size={18} className="text-primary" />
                      <div style={{ flex: 1, fontSize: '0.9rem' }}>Lipid Profile (01 Oct)</div>
                      <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}>View</button>
                    </div>
                    <div className="list-item" style={{ padding: '0.75rem', border: 'none', backgroundColor: '#f8fafc' }}>
                      <Activity size={18} className="text-primary" />
                      <div style={{ flex: 1, fontSize: '0.9rem' }}>ECG Normal (01 Oct)</div>
                      <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FOLLOW-UPS TAB */}
          {activeTab === 'Follow-ups' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Follow-ups Due</h2>
                <p>Patients requiring attention or review.</p>
              </div>

              <div className="dash-table-wrapper">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Date Due</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Priya Sharma</td>
                      <td>08 Oct 2026</td>
                      <td>Post-Angioplasty Review</td>
                      <td><span style={{ color: '#ef4444', fontWeight: 600 }}>Overdue</span></td>
                      <td><button className="btn btn-primary btn-sm">Schedule Follow-Up</button></td>
                    </tr>
                    <tr>
                      <td>Vikram Singh</td>
                      <td>09 Oct 2026</td>
                      <td>Medication Adjustment</td>
                      <td><span style={{ color: '#f59e0b', fontWeight: 600 }}>Due Tomorrow</span></td>
                      <td><button className="btn btn-primary btn-sm">Schedule Follow-Up</button></td>
                    </tr>
                    <tr>
                      <td>Ananya Rao</td>
                      <td>12 Oct 2026</td>
                      <td>Routine Cardiac Check</td>
                      <td><span style={{ color: 'var(--color-text-muted)' }}>Upcoming</span></td>
                      <td><button className="btn btn-outline btn-sm">Send Reminder</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Placeholders */}
          {['Today\'s Appointments', 'Medical Records', 'Reports', 'Prescriptions', 'Profile'].includes(activeTab) && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>{activeTab}</h2>
                <p>This module is simulated in the concept dashboard.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
