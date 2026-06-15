import React from 'react'
import { Calendar, Users } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content-container">
          <h1 className="hero-title">Stay in the Heart of<br/>Chettinad</h1>
          
          <div className="booking-widget">
            <div className="widget-field">
              <label>Check In</label>
              <div className="input-with-icon">
                <input type="text" placeholder="25 May 2025" />
                <Calendar size={18} color="var(--primary)" />
              </div>
            </div>
            <div className="widget-divider"></div>
            <div className="widget-field">
              <label>Check Out</label>
              <div className="input-with-icon">
                <input type="text" placeholder="27 May 2025" />
                <Calendar size={18} color="var(--primary)" />
              </div>
            </div>
            <div className="widget-divider"></div>
            <div className="widget-field">
              <label>Guests</label>
              <div className="input-with-icon">
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <Users size={18} color="var(--text-muted)" />
                  <select>
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>3 Adults</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-primary widget-btn">Check Availability</button>
          </div>
        </div>
      </div>
    </section>
  )
}
