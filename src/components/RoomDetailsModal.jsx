import React, { useEffect, useState } from 'react'
import { X, Users, Maximize, Wifi, Tv, Coffee, Wind, Droplets, ChevronLeft, ChevronRight, CarFront } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './RoomDetailsModal.css'

export default function RoomDetailsModal({ room, onClose }) {
  const navigate = useNavigate();
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [extraBeds, setExtraBeds] = useState('0');
  const [breakfastCount, setBreakfastCount] = useState('0');
  
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Get max extra beds based on room type
  const getMaxExtraBeds = () => {
    if (room.type === 'AC Double Bed' || room.type === 'Non-AC Double Bed' || room.type === 'Heritage Double Room') return 1;
    if (room.type === 'Triple Bed Room') return 2;
    if (room.type === 'Suite Room') return 3;
    return 0; // Heritage Single Room
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleBookNow = () => {
    onClose();
    navigate('/book', { state: { room, guests: { adults, children, extraBeds, breakfastCount } } });
  };

  const images = [
    room.images[0],
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55dd580e55b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'
  ];

  const nextImage = (e) => { e.stopPropagation(); setGalleryIndex((i) => (i + 1) % images.length); };
  const prevImage = (e) => { e.stopPropagation(); setGalleryIndex((i) => (i - 1 + images.length) % images.length); };

  // Dynamic pricing
  const totalCost = room.price + (parseInt(extraBeds) * 550) + (parseInt(breakfastCount) * 100);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content room-details-modal neo-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header-sticky">
          <button className="modal-close-sticky" onClick={onClose}><X size={20} /></button>
        </div>
        
        {/* Gallery */}
        <div className={`modal-gallery-container ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="main-image-wrapper">
            <img src={images[galleryIndex]} alt="Main Room View" className="main-image" onClick={() => setIsFullscreen(!isFullscreen)} />
            <button className="gallery-nav left" onClick={prevImage}><ChevronLeft size={24} /></button>
            <button className="gallery-nav right" onClick={nextImage}><ChevronRight size={24} /></button>
          </div>
          {!isFullscreen && (
            <div className="thumbnail-strip">
              {images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt="Thumbnail" 
                  className={`thumbnail ${idx === galleryIndex ? 'active' : ''}`}
                  onClick={() => setGalleryIndex(idx)}
                />
              ))}
            </div>
          )}
          {isFullscreen && <button className="exit-fullscreen" onClick={() => setIsFullscreen(false)}><X size={32} /></button>}
        </div>

        <div className="modal-body">
          <div className="modal-main-content">
            <h2 className="room-popup-title">{room.type}</h2>
            <p className="room-tagline">{room.description}</p>

            <div className="info-card neo-panel">
              <div className="info-item">
                <Users size={20} color="var(--primary)"/>
                <div>
                  <strong>Capacity</strong>
                  <span>Up to {room.maxOccupancy} {room.maxOccupancy > 1 ? 'Guests' : 'Guest'}</span>
                </div>
              </div>
              <div className="info-item">
                <Wind size={20} color={room.hasAC ? "var(--primary)" : "#ccc"} />
                <div>
                  <strong style={{textDecoration: room.hasAC ? 'none' : 'line-through'}}>Air Conditioning</strong>
                  <span>{room.hasAC ? 'Air Conditioned' : 'Non Air Conditioned'}</span>
                </div>
              </div>
              <div className="info-item">
                <Maximize size={20} color="var(--primary)"/>
                <div>
                  <strong>Room Size</strong>
                  <span>{room.roomSize}</span>
                </div>
              </div>
            </div>

            <div className="content-grid">
              <div className="amenities-preview">
                <h3>Hotel Amenities</h3>
                <ul className="amenities-list">
                  {room.hasAC && <li><Wind size={16} /> Air Conditioning</li>}
                  <li><Wifi size={16} /> Free WiFi</li>
                  <li><CarFront size={16} /> Parking Available</li>
                  <li><Tv size={16} /> Television</li>
                  <li><Coffee size={16} /> Room Service</li>
                  <li><Droplets size={16} /> Hot Water</li>
                  <li><Coffee size={16} /> Breakfast</li>
                </ul>
                <button className="view-all-btn" onClick={() => window.dispatchEvent(new Event('openAmenities'))}>View All...</button>
              </div>

              <div className="rules-preview">
                <h3>Property Rules</h3>
                <ul className="rules-list">
                  <li><span>→</span> Primary Guest should be at least 18 years</li>
                  <li><span>→</span> Govt ID accepted</li>
                  <li><span>→</span> Local IDs allowed</li>
                  <li><span>→</span> Pets not allowed</li>
                </ul>
                <button className="view-all-btn" onClick={() => window.dispatchEvent(new Event('openPropertyRules'))}>Read All Property Rules</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer for Booking */}
        <div className="booking-footer">
          <div className="booking-inputs">
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
            {getMaxExtraBeds() > 0 && (
              <div className="guest-input">
                <label>Extra Bed (+₹550)</label>
                <select value={extraBeds} onChange={e => setExtraBeds(e.target.value)}>
                  {Array.from({length: getMaxExtraBeds() + 1}, (_, i) => i).map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            )}
            <div className="guest-input">
              <label>Breakfast (+₹100)</label>
              <select value={breakfastCount} onChange={e => setBreakfastCount(e.target.value)}>
                {Array.from({length: parseInt(adults) + parseInt(children) + 1}, (_, i) => i).map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          
          <div className="booking-total">
            <div className="price-summary">
              <span className="total-label">Total Cost</span>
              <span className="total-amount">₹{totalCost.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn-primary book-btn" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}
