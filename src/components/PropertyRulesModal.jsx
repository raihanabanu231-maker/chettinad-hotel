import React from 'react'
import { X, Clock, AlertCircle, Users, FileCheck, Cigarette, Utensils, Accessibility, Dog, PartyPopper, Baby, Bed } from 'lucide-react'
import './PropertyRulesModal.css'

export default function PropertyRulesModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content rules-modal neo-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header-sticky">
          <button className="modal-close-sticky" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-body rules-body">
          <div className="rules-header">
            <h2 style={{fontFamily: 'Cormorant Garamond, serif'}}>Property Rules at Hotel Meyyappaa</h2>
            <div className="checkin-out-times">
              <div className="time-badge">
                <Clock size={16} />
                <span>Check-In: <strong>2 PM</strong></span>
              </div>
              <div className="time-badge">
                <Clock size={16} />
                <span>Check-Out: <strong>12 PM</strong></span>
              </div>
            </div>
          </div>

          <div className="rules-grid">
            <div className="rule-category">
              <div className="rule-icon"><AlertCircle size={24} /></div>
              <div className="rule-content">
                <h3>Must Read Rules</h3>
                <ul>
                  <li>Primary Guest should be at least 18 years of age</li>
                  <li>Groups with only male guests are allowed</li>
                  <li>Govt ID accepted</li>
                  <li>Pets not allowed</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Users size={24} /></div>
              <div className="rule-content">
                <h3>Guest Profile</h3>
                <ul>
                  <li>Unmarried couples not allowed</li>
                  <li>Primary Guest should be at least 18 years</li>
                  <li>Groups with only male guests allowed</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><FileCheck size={24} /></div>
              <div className="rule-content">
                <h3>ID Proof Related</h3>
                <ul>
                  <li>Govt ID accepted</li>
                  <li>Local IDs allowed</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Cigarette size={24} /></div>
              <div className="rule-content">
                <h3>Smoking / Alcohol</h3>
                <ul>
                  <li>Alcohol allowed</li>
                  <li>Smoking allowed</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Utensils size={24} /></div>
              <div className="rule-content">
                <h3>Food Arrangement</h3>
                <ul>
                  <li>Non-veg allowed</li>
                  <li>Outside food allowed</li>
                  <li>Food delivery available</li>
                  <li>In-room dining available</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Accessibility size={24} /></div>
              <div className="rule-content">
                <h3>Property Accessibility</h3>
                <ul>
                  <li>Not wheelchair accessible</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Dog size={24} /></div>
              <div className="rule-content">
                <h3>Pet Related</h3>
                <ul>
                  <li>Pets not allowed</li>
                  <li>No pets living on property</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><PartyPopper size={24} /></div>
              <div className="rule-content">
                <h3>Other Rules</h3>
                <ul>
                  <li>Private parties allowed</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Baby size={24} /></div>
              <div className="rule-content">
                <h3>Infant Policy</h3>
                <ul>
                  <li>1 infant (0–2 years) included</li>
                </ul>
              </div>
            </div>

            <div className="rule-category">
              <div className="rule-icon"><Bed size={24} /></div>
              <div className="rule-content">
                <h3>Child & Extra Bed Policy</h3>
                <ul>
                  <li>No extra bed for children</li>
                  <li>No extra bed for additional guests</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
