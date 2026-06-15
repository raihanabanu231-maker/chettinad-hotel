import React from 'react'
import { X, Car } from 'lucide-react'

export default function CabBookingModal({ place, onClose }) {
  const handleBooking = (e) => {
    e.preventDefault();
    alert('Cab Booked Successfully!');
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{maxWidth: '500px'}} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <div style={{padding: '2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <Car size={40} color="var(--primary)" style={{margin: '0 auto'}}/>
            <h2 style={{marginTop: '1rem'}}>Book Cab to {place.name}</h2>
            <p style={{color: 'var(--text-muted)'}}>Distance: {place.distance}</p>
          </div>

          <form onSubmit={handleBooking} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div>
              <label>Number of Guests</label>
              <select required>
                <option value="">Select Guests</option>
                <option>1-4 (Sedan)</option>
                <option>5-6 (SUV)</option>
                <option>7-12 (Traveller Van)</option>
              </select>
            </div>
            
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label>Pickup Date</label>
                <input type="date" required />
              </div>
              <div style={{flex: 1}}>
                <label>Pickup Time</label>
                <input type="time" required />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{marginTop: '1rem', width: '100%'}}>
              Confirm Cab Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
