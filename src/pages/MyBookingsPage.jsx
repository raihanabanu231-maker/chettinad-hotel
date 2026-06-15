import React, { useState } from 'react'
import { Calendar, Users, Eye, Download, XCircle } from 'lucide-react'
import './MyBookingsPage.css'

export default function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="bookings-page container">
      <div className="bookings-header">
        <h2>My Bookings</h2>
        <p>Manage your current stays and view past booking history.</p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <h4>Current Bookings</h4>
          <span>1</span>
        </div>
        <div className="summary-card">
          <h4>Upcoming Bookings</h4>
          <span>2</span>
        </div>
        <div className="summary-card">
          <h4>Completed Stays</h4>
          <span>10</span>
        </div>
        <div className="summary-card" style={{borderLeftColor: '#ef4444'}}>
          <h4>Cancelled Bookings</h4>
          <span>0</span>
        </div>
      </div>

      <div className="booking-tabs">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current & Upcoming
        </button>
        <button 
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Stays
        </button>
        <button 
          className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <div className="booking-list">
        {activeTab === 'current' && (
          <div className="booking-card">
            <div className="booking-card-header">
              <span className="booking-id">Booking ID: #CS-847291</span>
              <span className="booking-status status-confirmed">Confirmed</span>
            </div>
            <div className="booking-card-body">
              <div className="booking-info">
                <div className="booking-room-type">Heritage Suite</div>
                <div className="booking-details-grid">
                  <div className="detail-col">
                    <Calendar size={16} /> 12 Aug 2025 - 15 Aug 2025
                  </div>
                  <div className="detail-col">
                    <Users size={16} /> 2 Adults, 1 Child
                  </div>
                  <div className="detail-col">
                    3 Nights
                  </div>
                </div>
              </div>
              <div className="booking-amount">
                <span>Amount Paid</span>
                <strong>₹24,500</strong>
              </div>
            </div>
            <div className="booking-card-footer">
              <button className="btn-action"><Eye size={16} /> View Details</button>
              <button className="btn-action"><Download size={16} /> Download Receipt</button>
              <button className="btn-action btn-danger"><XCircle size={16} /> Cancel Booking</button>
            </div>
          </div>
        )}

        {activeTab === 'past' && (
          <div className="booking-card">
            <div className="booking-card-header">
              <span className="booking-id">Booking ID: #CS-392810</span>
              <span className="booking-status status-completed">Completed</span>
            </div>
            <div className="booking-card-body">
              <div className="booking-info">
                <div className="booking-room-type">Deluxe Room</div>
                <div className="booking-details-grid">
                  <div className="detail-col">
                    <Calendar size={16} /> 05 Jan 2025 - 07 Jan 2025
                  </div>
                  <div className="detail-col">
                    <Users size={16} /> 2 Adults
                  </div>
                  <div className="detail-col">
                    2 Nights
                  </div>
                </div>
              </div>
              <div className="booking-amount">
                <span>Amount Paid</span>
                <strong>₹8,200</strong>
              </div>
            </div>
            <div className="booking-card-footer">
              <button className="btn-action"><Eye size={16} /> View Details</button>
              <button className="btn-action"><Download size={16} /> Download Invoice</button>
            </div>
          </div>
        )}

        {activeTab === 'cancelled' && (
          <div style={{padding: '3rem', textAlign: 'center', color: 'var(--text-muted)'}}>
            <p>No cancelled bookings found.</p>
          </div>
        )}
      </div>

    </div>
  )
}
