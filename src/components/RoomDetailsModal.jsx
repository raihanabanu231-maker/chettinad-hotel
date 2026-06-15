import React from 'react'
import { X, Users, Bed, Maximize, Ban } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './RoomDetailsModal.css'

export default function RoomDetailsModal({ room, onClose }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    onClose();
    navigate('/book', { state: { room } });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content room-details-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-gallery">
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

            <div className="rules-section">
              <h3>House Rules</h3>
              <ul>
                <li><Ban size={14}/> No Smoking</li>
                <li><Ban size={14}/> Pets Not Allowed</li>
                <li><Ban size={14}/> No Loud Music after 10 PM</li>
                <li><Ban size={14}/> Valid ID Required for all adults</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="modal-sticky-footer">
          <div className="guest-selection">
            <div className="guest-input">
              <label>Adults</label>
              <select><option>1</option><option>2</option><option>3</option></select>
            </div>
            <div className="guest-input">
              <label>Children</label>
              <select><option>0</option><option>1</option><option>2</option></select>
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
