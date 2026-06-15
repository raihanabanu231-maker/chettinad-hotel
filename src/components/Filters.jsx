import React from 'react'
import { ArrowDownUp, IndianRupee, Users, X } from 'lucide-react'
import './Filters.css'

export default function Filters() {
  return (
    <div className="filters-section">
      <div className="filters-container">
        
        <div className="filter-group">
          <div className="filter-icon"><ArrowDownUp size={16} /></div>
          <div className="filter-content">
            <label>Sort By</label>
            <select>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        
        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><IndianRupee size={16} /></div>
          <div className="filter-content">
            <label>Price</label>
            <select>
              <option>₹ Min - ₹ Max</option>
              <option>Under ₹4000</option>
              <option>₹4000 - ₹6000</option>
              <option>Above ₹6000</option>
            </select>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><Users size={16} /></div>
          <div className="filter-content">
            <label>Adults</label>
            <select>
              {[1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>

        <div className="filter-divider"></div>

        <div className="filter-group">
          <div className="filter-icon"><Users size={16} /></div>
          <div className="filter-content">
            <label>Children</label>
            <select>
              {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
            </select>
          </div>
        </div>

        <button className="btn-outline clear-filters-btn">
          <X size={16} /> Clear Filters
        </button>

      </div>
    </div>
  )
}
