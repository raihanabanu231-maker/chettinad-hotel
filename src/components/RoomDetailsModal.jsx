import React, { useEffect, useState } from 'react'
import { X, Users, Bed, Maximize, Wifi, Car, Tv, Coffee, Wind, Droplets } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './RoomDetailsModal.css'

export default function RoomDetailsModal({ room, onClose }) {
  const navigate = useNavigate();
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  useEffect(() => {
    // Lock body scroll when modal mounts
    document.body.style.overflow = 'hidden';
    return () => {
      // Unlock body scroll when modal unmounts
      document.body.style.overflow = '';
    };
  }, []);

  const handleBookNow = () => {
    onClose();
    navigate('/book', { state: { room, guests: { adults, children } } });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content room-details-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-sticky">
          <button className="modal-close-sticky" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-gallery" style={{marginTop: '-40px'}}>
          {room.images.map((img, idx) => (
            <img key={idx} src={img} alt={`Room ${idx}`} />
          ))}
        </div>

        <div className="modal-body">
          <div className="modal-main-content">
            <h2>{room.type}</h2>
            <p className="room-desc">{room.description}</p>

            <div className="specs-grid">
              <div className="spec-item">
                <Users size={18}/>
                <div>
                  <strong>Max Occupancy</strong>
                  <span>{room.maxOccupancy} Guests</span>
                </div>
              </div>
              <div className="spec-item">
                <Bed size={18}/>
                <div>
                  <strong>Bed Type</strong>
                  <span>{room.bedType}</span>
                </div>
              </div>
              <div className="spec-item">
                <Maximize size={18}/>
                <div>
                  <strong>Room Size</strong>
                  <span>{room.roomSize}</span>
                </div>
              </div>
            </div>

            <div className="amenities-section">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                <li><Wind size={16} /> Air Conditioning</li>
                <li><Wifi size={16} /> Free WiFi</li>
                <li><Car size={16} /> Parking Available</li>
                <li><Tv size={16} /> Television</li>
                <li><Bed size={16} /> Double Cot</li>
                <li><Coffee size={16} /> Room Service</li>
                <li><Droplets size={16} /> Hot Water</li>
              </ul>
            </div>

            <div className="rules-section">
              <h3>House Rules</h3>
              <ul className="rules-list">
                <li><span>→</span> No Smoking</li>
                <li><span>→</span> Pets Not Allowed</li>
                <li><span>→</span> No Loud Music after 10 PM</li>
                <li><span>→</span> Valid ID Required for all adults</li>
                <li><span>→</span> No Alcohol</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="modal-sticky-footer">
          <div className="guest-selection">
            <div className="guest-input">
              <label>Adults</label>
              <select value={adults} onChange={e => setAdults(e.target.value)}>
                {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="guest-input">
              <label>Children</label>
              <select value={children} onChange={e => setChildren(e.target.value)}>
                {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          
          <div className="modal-pricing-book">
            <div className="price-summary">
              <span className="total-label">Total Cost (incl. GST)</span>
              <span className="total-amount">₹{Math.round(room.price * 1.18)}</span>
            </div>
            <button className="btn-primary" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}
