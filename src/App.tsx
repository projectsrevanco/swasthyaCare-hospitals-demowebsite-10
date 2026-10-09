import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Doctors, DoctorProfile } from './pages/Doctors';
import { Services } from './pages/Services';
import { Packages } from './pages/Packages';
import { Diagnostics } from './pages/Diagnostics';
import { Pharmacy } from './pages/Pharmacy';
import { Resources } from './pages/Resources';
import { Book } from './pages/Book';
import { Dashboard } from './pages/Dashboard';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { StaffDashboard } from './pages/StaffDashboard';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/resources/*" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
