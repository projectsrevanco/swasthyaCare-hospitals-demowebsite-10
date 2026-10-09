import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Settings, FileText,
  Activity, Bell, Menu, Search, Clock, ShieldCheck, UserCog, Volume2
} from 'lucide-react';
import './Dashboard.css';
import './StaffDashboard.css';

export function StaffDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [sidebarOpen]);

  const navItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'Queue', icon: <Users size={20} /> },
    { id: 'Appointments', icon: <Calendar size={20} /> },
    { id: 'Patients', icon: <Activity size={20} /> },
    { id: 'Reports', icon: <FileText size={20} /> },
    { id: 'Notifications', icon: <Bell size={20} />, badge: 4 },
    { id: 'Settings', icon: <Settings size={20} /> }
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">
      {sidebarOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <ShieldCheck color="var(--color-primary)" />
          Staff Portal
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
              <span className="topbar-badge">4</span>
            </button>
            <div className="user-profile">
              <div className="user-avatar" style={{ backgroundColor: 'var(--color-secondary)' }}><UserCog size={20}/></div>
              <div className="user-info">
                <span className="user-name">Desk 1 - Reception</span>
                <span className="user-role">Main Branch</span>
              </div>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'Overview' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Desk Overview</h2>
                <p>Real-time hospital operations summary.</p>
              </div>

              <div className="staff-dash-grid">
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Total Appointments</span>
                  <span className="staff-stat-card-value">124</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Checked In</span>
                  <span className="staff-stat-card-value" style={{ color: 'var(--color-accent-dark)' }}>42</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Waiting</span>
                  <span className="staff-stat-card-value" style={{ color: '#f59e0b' }}>15</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Avg Wait Time</span>
                  <span className="staff-stat-card-value" style={{ fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={24} color="var(--color-text-muted)" /> 14 min
                  </span>
                </div>
              </div>

              {/* Central Queue Management */}
              <div className="queue-mgmt-panel">
                <div className="queue-mgmt-header">
                  <span className="queue-mgmt-title">Central Queue Control</span>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span className="status-badge status-completed">System Online</span>
                  </div>
                </div>

                <div className="queue-tokens-container">
                  <div className="queue-token-box">
                    <div className="queue-token-label">Now Serving</div>
                    <div className="queue-token-value active">A-108</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Dr. Meera Sharma</div>
                  </div>
                  <div style={{ height: '80px', width: '1px', backgroundColor: '#cbd5e1' }}></div>
                  <div className="queue-token-box">
                    <div className="queue-token-label">Next in Line</div>
                    <div className="queue-token-value" style={{ color: 'var(--color-text-muted)' }}>A-109</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cardiology</div>
                  </div>
                </div>

                <div className="queue-actions">
                  <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Volume2 size={18} /> Announce Token</button>
                  <button className="btn btn-primary">Call Next Patient</button>
                  <button className="btn btn-outline" style={{ borderColor: '#ef4444', color: '#ef4444' }}>Hold Token</button>
                </div>
              </div>
            </div>
          )}

          {/* APPOINTMENTS TAB */}
          {activeTab === 'Appointments' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Appointment Management</h2>
                <p>Manage today's bookings and schedules.</p>
              </div>
              
              <div className="staff-dash-grid">
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Confirmed</span>
                  <span className="staff-stat-card-value">98</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Pending</span>
                  <span className="staff-stat-card-value" style={{ color: '#f59e0b' }}>12</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Cancelled</span>
                  <span className="staff-stat-card-value" style={{ color: '#ef4444' }}>5</span>
                </div>
                <div className="staff-stat-card">
                  <span className="staff-stat-card-title">Rescheduled</span>
                  <span className="staff-stat-card-value">9</span>
                </div>
              </div>

              <div className="dash-table-wrapper">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Department</th>
                      <th>Doctor</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sneha Reddy</td>
                      <td>Pediatrics</td>
                      <td>Dr. Sneha Reddy</td>
                      <td>10:00 AM</td>
                      <td><span className="status-badge status-completed">Confirmed</span></td>
                      <td><button className="btn btn-outline btn-sm">Check In</button></td>
                    </tr>
                    <tr>
                      <td>Amit Patel</td>
                      <td>Orthopedics</td>
                      <td>Dr. Amit Patel</td>
                      <td>10:30 AM</td>
                      <td><span className="status-badge status-waiting">Pending</span></td>
                      <td><button className="btn btn-outline btn-sm">Confirm</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PATIENTS TAB */}
          {activeTab === 'Patients' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>Patient Records</h2>
                <p>Search and manage patient files.</p>
              </div>

              <div className="patient-search-bar">
                <Search size={20} color="var(--color-text-muted)" />
                <input type="text" className="patient-search-input" placeholder="Search by name, ID, or phone..." />
              </div>

              <div className="dash-table-wrapper">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Patient ID</th>
                      <th>Name</th>
                      <th>Age/Gender</th>
                      <th>Contact</th>
                      <th>Last Visit</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P-8042</td>
                      <td>Ananya Rao</td>
                      <td>28 / F</td>
                      <td>9876543210</td>
                      <td>08 Oct 2026</td>
                      <td><button className="btn btn-outline btn-sm">View File</button></td>
                    </tr>
                    <tr>
                      <td>P-7031</td>
                      <td>Rahul Verma</td>
                      <td>45 / M</td>
                      <td>9123456780</td>
                      <td>15 Sep 2026</td>
                      <td><button className="btn btn-outline btn-sm">View File</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'Notifications' && (
            <div className="dash-view">
              <div className="dash-header">
                <h2>System Notifications</h2>
              </div>
              <div className="dash-card">
                <div className="list-group">
                  <div className="list-item">
                    <div className="list-item-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}><Calendar size={20} /></div>
                    <div className="list-item-content">
                      <div className="list-item-title">Doctor Schedule Update</div>
                      <div className="list-item-desc">Dr. Amit Patel will be on leave from 12 Oct to 14 Oct. Reassign appointments.</div>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="list-item-icon"><FileText size={20} /></div>
                    <div className="list-item-content">
                      <div className="list-item-title">Report Available</div>
                      <div className="list-item-desc">Batch of 15 diagnostic reports are ready for dispatch to patient portals.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholders */}
          {['Queue', 'Reports', 'Settings'].includes(activeTab) && (
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
