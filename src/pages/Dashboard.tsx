import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, CalendarCheck, FileText, Pill, 
  Activity, Bell, User, Menu, Download, Eye,
  Clock, FileSearch
} from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [sidebarOpen]);

  const navItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'Appointments', icon: <CalendarCheck size={20} /> },
    { id: 'Reports', icon: <FileText size={20} /> },
    { id: 'Prescriptions', icon: <Pill size={20} /> },
    { id: 'Health Records', icon: <Activity size={20} /> },
    { id: 'Notifications', icon: <Bell size={20} />, badge: 2 },
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
          Swasthya Care
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
            Back to Website
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
              <span className="topbar-badge">2</span>
            </button>
            <div className="user-profile" onClick={() => setActiveTab('Profile')}>
              <div className="user-avatar">AR</div>
              <div className="user-info">
                <span className="user-name">Ananya Rao</span>
                <span className="user-role">Patient ID: P-8042</span>
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
                <h2>Welcome back, Ananya!</h2>
                <p>Here is your healthcare summary for today.</p>
              </div>

              <div className="dash-grid">
                {/* Next Appointment Card */}
                <div className="dash-card">
                  <div className="dash-card-header">
                    <span className="dash-card-title">Next Appointment</span>
                    <CalendarCheck className="text-primary" size={20} />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', minWidth: '80px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Oct</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>10</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>Dr. Meera Sharma</h4>
                      <p style={{ margin: '0 0 0.25rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Gynecology • In-Clinic</p>
                      <p style={{ margin: 0, color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>10:30 AM</p>
                    </div>
                  </div>
                </div>

                {/* Queue Tracking Card */}
                <div className="dash-card queue-card">
                  <div className="dash-card-header">
                    <span className="dash-card-title">Live Queue Status</span>
                    <Clock size={20} />
                  </div>
                  
                  <div className="queue-display">
                    <div className="queue-number-box">
                      <div className="queue-label">Now Serving</div>
                      <div className="queue-number serving">A-104</div>
                    </div>
                    <div className="queue-number-box">
                      <div className="queue-label">Your Token</div>
                      <div className="queue-number">A-108</div>
                    </div>
                  </div>

                  <div className="queue-progress-container">
                    <div className="queue-progress-bar">
                      <div className="queue-progress-fill"></div>
                    </div>
                    <div className="queue-stats">
                      <span>Patients Ahead: <strong>3</strong></span>
                      <span>Est. Wait: <strong>18 min</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions / Recent */}
              <div className="dash-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="dash-card">
                  <h3 className="dash-card-title" style={{ marginBottom: '1.5rem' }}>Recent Notifications</h3>
                  <div className="list-group">
                    <div className="list-item">
                      <div className="list-item-icon"><FileSearch size={20} /></div>
                      <div className="list-item-content">
                        <div className="list-item-title">Your report is ready</div>
                        <div className="list-item-desc">Complete Blood Count (CBC) report is available for download.</div>
                      </div>
                      <button className="btn btn-outline btn-sm list-item-action" onClick={() => setActiveTab('Reports')}>View</button>
                    </div>
                    <div className="list-item">
                      <div className="list-item-icon"><Pill size={20} /></div>
                      <div className="list-item-content">
                        <div className="list-item-title">Prescription Reminder</div>
                        <div className="list-item-desc">Time to take Medicine A (1-0-1)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* APPOINTMENTS TAB */}
          {activeTab === 'Appointments' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Appointments</h2>
                <p>Manage your upcoming and past consultations.</p>
              </div>
              <div className="dash-card">
                <h3 className="dash-card-title" style={{ marginBottom: '1.5rem' }}>Upcoming</h3>
                <div className="list-group">
                  <div className="list-item">
                    <div className="list-item-icon"><CalendarCheck size={20} /></div>
                    <div className="list-item-content">
                      <div className="list-item-title">Dr. Meera Sharma (Gynecology)</div>
                      <div className="list-item-desc">10 Oct 2026 • 10:30 AM • Token: A-108</div>
                    </div>
                    <div className="flex gap-2 list-item-action">
                      <button className="btn btn-outline btn-sm">Reschedule</button>
                      <button className="btn btn-outline btn-sm" style={{ color: '#ef4444', borderColor: '#ef4444' }}>Cancel</button>
                    </div>
                  </div>
                </div>
                
                <h3 className="dash-card-title" style={{ margin: '2.5rem 0 1.5rem 0' }}>Past Appointments</h3>
                <div className="list-group">
                  <div className="list-item" style={{ opacity: 0.7 }}>
                    <div className="list-item-icon"><CalendarCheck size={20} /></div>
                    <div className="list-item-content">
                      <div className="list-item-title">Dr. Rajesh Kumar (Cardiology)</div>
                      <div className="list-item-desc">15 Sep 2026 • Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REPORTS TAB */}
          {activeTab === 'Reports' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Diagnostic Reports</h2>
                <p>Access your lab test and imaging results.</p>
              </div>
              <div className="report-grid">
                {[
                  { name: 'Complete Blood Count (CBC)', date: '08 Oct 2026' },
                  { name: 'Lipid Profile', date: '08 Oct 2026' },
                  { name: 'Thyroid Function Test', date: '15 Sep 2026' },
                  { name: 'ECG Report', date: '15 Sep 2026' },
                ].map((report, idx) => (
                  <div key={idx} className="report-card">
                    <FileText className="report-icon" size={28} />
                    <div className="report-name">{report.name}</div>
                    <div className="report-date">{report.date}</div>
                    <div className="report-actions">
                      <button className="btn btn-outline btn-sm" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.25rem' }}><Eye size={16}/> View</button>
                      <button className="btn btn-primary btn-sm" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.25rem' }}><Download size={16}/> Save</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PRESCRIPTIONS TAB */}
          {activeTab === 'Prescriptions' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Active Prescriptions</h2>
                <p>Manage your ongoing medications.</p>
              </div>
              <div className="dash-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <div>
                    <h3 className="dash-card-title" style={{ margin: 0 }}>RX-2048</h3>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Dr. Meera Sharma • 08 Oct 2026</p>
                  </div>
                  <span style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: 'var(--color-accent-dark)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600 }}>Active</span>
                </div>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)', fontWeight: 500 }}>Medicine</th>
                      <th style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)', fontWeight: 500 }}>Dosage</th>
                      <th style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)', fontWeight: 500 }}>Frequency</th>
                      <th style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)', fontWeight: 500 }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '1rem 0', fontWeight: 500 }}>Medicine A</td>
                      <td style={{ padding: '1rem 0' }}>500mg</td>
                      <td style={{ padding: '1rem 0' }}>1-0-1 (Morning, Night)</td>
                      <td style={{ padding: '1rem 0' }}>5 Days</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem 0', fontWeight: 500 }}>Medicine B</td>
                      <td style={{ padding: '1rem 0' }}>10mg</td>
                      <td style={{ padding: '1rem 0' }}>0-1-0 (Afternoon)</td>
                      <td style={{ padding: '1rem 0' }}>10 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {['Health Records', 'Notifications', 'Profile'].includes(activeTab) && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>{activeTab}</h2>
                <p>This section is simulated in the concept dashboard.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
