import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import logoImg from '../assets/logo.png'
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
            <span>099650 99656</span>
          </div>
          
          <div className="contact-item">
            <Mail size={18} color="var(--primary)" />
            <span>info@hotelmeyyappaa.com</span>
          </div>
          
          <div className="contact-item">
            <MapPin size={18} color="var(--primary)" />
            <span>315/15, MAM Building, Sekkalai Rd, Karaikudi, Tamil Nadu 630001</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo" style={{alignItems: 'center'}}>
              <img src={logoImg} alt="Hotel Meyyappaa Logo" style={{ height: '80px', width: 'auto', margin: '0', objectFit: 'contain' }} />
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
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Hotel Meyyappaa. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
