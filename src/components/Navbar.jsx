import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { User, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${target}`);
      } else {
        const id = target.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without causing a jump
          window.history.pushState(null, '', target);
        }
      }
    } else {
      navigate(target);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash ? 'active' : '';
    }
    if (path.startsWith('#')) {
      return location.hash === path ? 'active' : '';
    }
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          {/* Using a placeholder floral SVG for the logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#8B5E3C', marginRight: '8px'}}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m8 14 4-4 4 4"></path></svg>
          <div className="logo-text">
            <h1>Hotel</h1>
            <span>MEYYAPPAA</span>
          </div>
        </Link>
        <div className="nav-center">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className={isActive('/')}>Home</a>
          <a href="/#explore" onClick={(e) => handleNavClick(e, '#explore')} className={isActive('#explore')}>Explore Chettinad</a>
          <a href="/reviews" onClick={(e) => handleNavClick(e, '/reviews')} className={isActive('/reviews')}>Reviews</a>
          <a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className={isActive('#contact')}>Contact Us</a>
          <a href="/my-bookings" onClick={(e) => handleNavClick(e, '/my-bookings')} className={isActive('/my-bookings')}>My Bookings</a>
        </div>
        <div className="nav-right" style={{ position: 'relative' }}>
          <button 
            className={`nav-profile-link ${isActive('/profile') || isProfileOpen ? 'active' : ''}`}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <User size={20} />
            <span>Profile</span>
            <ChevronDown size={16} />
          </button>
          
          {isProfileOpen && (
            <div className="profile-dropdown glass-panel">
              <Link to="/profile" onClick={() => setIsProfileOpen(false)}>View Profile</Link>
              <button onClick={() => { setIsProfileOpen(false); window.dispatchEvent(new Event('openChangePassword')); }}>Change Password</button>
              <button onClick={() => setIsProfileOpen(false)}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
