import React from 'react'
import { X, Zap, Sparkles, Shirt, Utensils, Key, ArrowUpToLine, Umbrella, Wind, CarFront, Refrigerator, Clock, Newspaper, Wifi, ShieldPlus, Activity, Car, Armchair, Bath, Droplet, Briefcase, ShieldCheck, Tv, ConciergeBell, Baby } from 'lucide-react'
import './AmenitiesModal.css'

export default function AmenitiesModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content amenities-modal glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header-sticky">
          <button className="modal-close-sticky" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-body amenities-body">
          <div className="amenities-header">
            <h2 style={{fontFamily: 'Cormorant Garamond, serif'}}>Hotel Amenities</h2>
            <p className="amenities-subtitle">Everything included with your stay.</p>
          </div>

          <div className="amenities-grid">
            <div className="amenity-category">
              <h3>Basic Facilities</h3>
              <ul>
                <li><Zap size={18} /> Power Backup</li>
                <li><Sparkles size={18} /> Housekeeping</li>
                <li><Shirt size={18} /> Laundry Service (Paid)</li>
                <li><Utensils size={18} /> Kitchenette</li>
                <li><Key size={18} /> Driver's Accommodation</li>
                <li><ArrowUpToLine size={18} /> Elevator / Lift</li>
                <li><Umbrella size={18} /> Umbrellas</li>
                <li><Wind size={18} /> Air Conditioning (Room Controlled)</li>
                <li><CarFront size={18} /> Parking (Free - Onsite)</li>
                <li><Refrigerator size={18} /> Refrigerator</li>
                <li><Clock size={18} /> Room Service (Limited Duration)</li>
                <li><Newspaper size={18} /> Newspaper (English, Local Language)</li>
                <li><Wifi size={18} /> WiFi (Free - Suitable for Working)</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>Health & Wellness</h3>
              <ul>
                <li><Activity size={18} /> First Aid Services</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Transfers</h3>
              <ul>
                <li><Car size={18} /> Airport Transfers (Paid - Private Taxi)</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Room Amenities</h3>
              <ul>
                <li><Armchair size={18} /> Living Area</li>
                <li><Bath size={18} /> Geyser / Water Heater</li>
                <li><Droplet size={18} /> Toiletries</li>
                <li><Wind size={18} /> Air Conditioning</li>
                <li><Briefcase size={18} /> Work Desk</li>
                <li><Sparkles size={18} /> Dental Kit</li>
                <li><Utensils size={18} /> Mineral Water (Additional Charge)</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>Safety & Security</h3>
              <ul>
                <li><ShieldCheck size={18} /> CCTV</li>
                <li><ShieldPlus size={18} /> Fire Extinguishers</li>
              </ul>
              
              <h3 style={{marginTop: '2rem'}}>Media & Technology</h3>
              <ul>
                <li><Tv size={18} /> Television</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>Common Area</h3>
              <ul>
                <li><ConciergeBell size={18} /> Reception (24 Hours)</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Other Facilities</h3>
              <ul>
                <li><Baby size={18} /> Kids Play Area</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
