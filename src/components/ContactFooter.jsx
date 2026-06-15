import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import './ContactFooter.css'

export default function ContactFooter() {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="container">
        <div id="contact" className="contact-info-bar">
          <h3 className="contact-title">Contact Us</h3>
          
          <div className="contact-item">
            <Phone size={18} color="var(--primary)" />
            <span>+91 98765 43210</span>
          </div>
          
          <div className="contact-item">
            <Mail size={18} color="var(--primary)" />
            <span>info@chettinadstays.com</span>
          </div>
          
          <div className="contact-item">
            <MapPin size={18} color="var(--primary)" />
            <span>123, Heritage Street, Karaikudi, Tamil Nadu 630001</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--secondary)'}}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m8 14 4-4 4 4"></path></svg>
              <div className="logo-text">
                <h1>Chettinad</h1>
                <span>STAYS</span>
              </div>
            </div>
            <p className="footer-desc">
              Experience the warmth of Chettinad hospitality with modern comfort and traditional charm.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#explore">Explore Chettinad</a></li>
              <li><a href="/my-bookings">My Bookings</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Important</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cancellation Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">WA</a>
              <a href="#" className="social-icon">EM</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Chettinad Stays. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
