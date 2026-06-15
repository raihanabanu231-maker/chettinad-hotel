import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          {/* Using a placeholder floral SVG for the logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)', marginRight: '8px'}}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m8 14 4-4 4 4"></path></svg>
          <div className="logo-text">
            <h1>Chettinad</h1>
            <span>STAYS</span>
          </div>
        </Link>
        <div className="nav-center">
          <Link to="/" className="active">Home</Link>
          <button onClick={() => scrollToSection('explore')}>Explore Chettinad</button>
          <Link to="/my-bookings">My Bookings</Link>
          <button onClick={() => scrollToSection('reviews')}>Reviews</button>
          <button onClick={() => scrollToSection('contact')}>Contact Us</button>
        </div>
        <div className="nav-right">
          <Link to="/profile" className="nav-profile-link">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
