import React, { useState } from 'react'
import { Home, IndianRupee, Users, X } from 'lucide-react'
import './Filters.css'

export default function Filters() {
  const [roomType, setRoomType] = useState('All Rooms');
  const [price, setPrice] = useState('₹ Min - ₹ Max');
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');

  const handleClearFilters = () => {
    setRoomType('All Rooms');
    setPrice('₹ Min - ₹ Max');
    setAdults('1');
    setChildren('0');
  };

  return (
    <div className="filters-section">
      <div className="filters-container">
        
        <div className="filter-group">
          <div className="filter-icon"><Home size={16} /></div>
          <div className="filter-content">
            <label>Room Type</label>
            <select value={roomType} onChange={e => setRoomType(e.target.value)}>
              <option value="All Rooms">All Rooms</option>
              <option value="AC Double Bed">AC Double Bed</option>
              <option value="Non-AC Double Bed">Non-AC Double Bed</option>
              <option value="Triple Bed Room">Triple Bed Room</option>
              <option value="Suite Room">Suite Room</option>
              <option value="Heritage Double Room">Heritage Double Room</option>
              <option value="Heritage Single Room">Heritage Single Room</option>
            </select>
          </div>
        </div>
        
        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><IndianRupee size={16} /></div>
          <div className="filter-content">
            <label>Price</label>
            <select value={price} onChange={e => setPrice(e.target.value)}>
              <option>₹ Min - ₹ Max</option>
              <option>Under ₹2000</option>
              <option>₹2000 - ₹3000</option>
              <option>Above ₹3000</option>
            </select>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><Users size={16} /></div>
          <div className="filter-content">
            <label>Adults</label>
            <select value={adults} onChange={e => setAdults(e.target.value)}>
              {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><Users size={16} /></div>
          <div className="filter-content">
            <label>Children</label>
            <select value={children} onChange={e => setChildren(e.target.value)}>
              {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
            </select>
          </div>
        </div>

        <button className="btn-outline clear-filters-btn" onClick={handleClearFilters}>
          <X size={16} /> Clear Filters
        </button>

      </div>
    </div>
  )
}
