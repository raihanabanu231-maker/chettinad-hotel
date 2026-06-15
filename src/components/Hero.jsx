import React, { useState } from 'react'
import { Calendar, Users } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content-container">
          <h1 className="hero-title">Stay in the Heart of<br/>Chettinad</h1>
          
          <div className="booking-widget">
            <div className="widget-field">
              <label>Check In</label>
              <div className="input-with-icon">
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}
                />
              </div>
            </div>
            <div className="widget-divider"></div>
            <div className="widget-field">
              <label>Check Out</label>
              <div className="input-with-icon">
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}
                />
              </div>
            </div>
            <div className="widget-divider"></div>
            <div className="widget-field">
              <label>Adults</label>
              <div className="input-with-icon">
                <select value={adults} onChange={e => setAdults(e.target.value)} style={{ cursor: 'pointer' }}>
                  {[1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
                </select>
              </div>
            </div>
            <div className="widget-divider"></div>
            <div className="widget-field">
              <label>Children</label>
              <div className="input-with-icon">
                <select value={children} onChange={e => setChildren(e.target.value)} style={{ cursor: 'pointer' }}>
                  {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
                </select>
              </div>
            </div>
            <button className="btn-primary widget-btn">Check Availability</button>
          </div>
        </div>
      </div>
    </section>
  )
}
