import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Microscope, FileText, Pill, RefreshCw, HelpCircle, 
  ChevronDown, ArrowRight, CalendarCheck, ClipboardCheck, Users, FileSearch
} from 'lucide-react';
import './Resources.css';
import './Services.css'; // Reuse timeline styles

export function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment online through our portal by clicking the 'Book an Appointment' button on the top right. Alternatively, you can call our 24/7 helpdesk or visit the hospital reception directly."
    },
    {
      question: "Can I choose a specific doctor?",
      answer: "Yes, our 'Find a Doctor' directory allows you to browse specialists by department, view their profiles, and book a consultation directly with the doctor of your choice."
    },
    {
      question: "How do I access my test reports?",
      answer: "Once your tests are completed, you will receive an SMS notification. You can then log in to the Patient Portal using your registered mobile number to view and download your reports securely."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid photo ID, any previous medical records or test reports related to your condition, and your current prescription if you are taking any medications."
    },
    {
      question: "How can I reschedule?",
      answer: "You can easily reschedule your appointment through the Patient Portal up to 4 hours before your scheduled time, or by calling our support desk."
    },
    {
      question: "How will I receive follow-up reminders?",
      answer: "Our digital system automatically sends SMS and email reminders for your upcoming follow-up visits, medication refills, and pending test reports."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <h1>Everything You Need for a Smoother Healthcare Journey</h1>
          <p>Guides, FAQs, and resources to help you navigate your treatment and recovery with ease.</p>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="resources-grid">
            <div className="resource-card">
              <Calendar className="resource-icon" size={32} />
              <h3>Appointment Guide</h3>
              <p>Everything you need to know about booking, rescheduling, and preparing for your doctor's visit.</p>
              <Link to="/book" className="resource-link">Read Guide <ArrowRight size={16} /></Link>
            </div>
            
            <div className="resource-card">
              <Microscope className="resource-icon" size={32} />
              <h3>Preparing for a Diagnostic Test</h3>
              <p>Important instructions on fasting, what to wear, and how to prepare for various lab and imaging tests.</p>
              <Link to="/diagnostics" className="resource-link">View Instructions <ArrowRight size={16} /></Link>
            </div>
            
            <div className="resource-card">
              <FileText className="resource-icon" size={32} />
              <h3>Understanding Test Reports</h3>
              <p>A simple guide to navigating our digital report portal and understanding basic medical terminology.</p>
              <Link to="/diagnostics" className="resource-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            
            <div className="resource-card">
              <Pill className="resource-icon" size={32} />
              <h3>Medication Information</h3>
              <p>Learn how to safely manage your prescriptions, understand dosages, and request pharmacy refills.</p>
              <Link to="/pharmacy" className="resource-link">Pharmacy Services <ArrowRight size={16} /></Link>
            </div>
            
            <div className="resource-card">
              <RefreshCw className="resource-icon" size={32} />
              <h3>Follow-Up Care</h3>
              <p>Guidelines on post-consultation care, setting up reminders, and staying on track with your treatment plan.</p>
              <Link to="/contact" className="resource-link">Get Support <ArrowRight size={16} /></Link>
            </div>
            
            <div className="resource-card">
              <HelpCircle className="resource-icon" size={32} />
              <h3>Frequently Asked Questions</h3>
              <p>Quick answers to common queries regarding hospital policies, billing, insurance, and facilities.</p>
              <a href="#faq" className="resource-link">Jump to FAQ <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey (Reused from Services) */}
      <section className="timeline-section" style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-text-main)' }}>
        <div className="container">
          <div className="section-heading">
            <h2 style={{ color: 'var(--color-primary-dark)' }}>The Patient Journey</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>A seamless, guided experience from booking to recovery.</p>
          </div>
          {/* We use inline styles to override the dark theme of timeline-section from Services.css */}
          <div className="timeline">
            <div className="timeline-step">
              <div className="timeline-icon"><CalendarCheck size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>1. Book</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Schedule your visit online</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><ClipboardCheck size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>2. Visit</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Quick digital check-in</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><Users size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>3. Consult</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Meet your specialist</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><FileSearch size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>4. Test</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Undergo diagnostics</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><FileText size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>5. Report</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Get results digitally</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon"><RefreshCw size={28} /></div>
              <h4 style={{ color: 'var(--color-primary-dark)' }}>6. Follow-up</h4>
              <p style={{ color: 'var(--color-text-muted)' }}>Stay on track</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to help you navigate our services.</p>
          </div>
          
          <div className="faq-section">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <ChevronDown className="faq-icon" size={20} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary-dark)', textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
            Ready to start your journey?
          </h2>
          <Link to="/book" className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem' }}>
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
