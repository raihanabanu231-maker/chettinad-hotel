import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Phone, X, CarFront } from 'lucide-react';
import kpmLogo from '../assets/kpm-logo.png';
import './ExploreChettinad.css';

const attractions = [
  {
    id: 1,
    name: 'Chettinad Palace',
    distance: '14.4 km',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80',
    description: 'Experience the grandeur of Chettinad royal architecture and timeless heritage.'
  },
  {
    id: 2,
    name: 'Chettinad Streets',
    distance: '14 km',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80',
    description: 'Walk through iconic heritage streets lined with historic mansions.'
  },
  {
    id: 3,
    name: 'Athangudi Palace',
    distance: '15 km',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    description: 'Discover elegant Chettinad craftsmanship and cultural richness.'
  },
  {
    id: 4,
    name: 'Athangudi Tiles Making',
    distance: '15 km',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    description: 'Watch artisans create the world-famous handcrafted Athangudi tiles.'
  },
  {
    id: 5,
    name: 'Kundrakudi Temple',
    distance: '12 km',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80',
    description: 'Visit the scenic hilltop Murugan temple overlooking beautiful landscapes.'
  },
  {
    id: 6,
    name: 'Pillayarpatti Temple',
    distance: '14 km',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80',
    description: 'Explore the ancient rock-cut temple dedicated to Lord Ganesha.'
  },
  {
    id: 7,
    name: 'Vintage Car Museum, Pillayarpatti',
    distance: '14 km',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
    description: 'See a rare collection of beautifully preserved vintage automobiles.'
  }
];

export default function ExploreChettinad() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);

      // Calculate active index for pagination
      const cardWidth = 280 + 24; // width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, attractions.length - 1));
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="explore" className="explore-section-compact">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="explore-header-center">
          <h2 className="explore-title">Explore Chettinad</h2>
          <div className="explore-divider">──── ❦ ────</div>
          <p className="explore-tagline">
            Discover the rich heritage, culture and timeless beauty of Chettinad.
          </p>
        </div>

        {/* PLACES CAROUSEL */}
        <div className="carousel-wrapper">
          {showLeftArrow && (
            <button className="nav-arrow left" onClick={() => scroll('left')}>
              <ChevronLeft size={28} />
            </button>
          )}
          
          <div className="carousel-track-horizontal" ref={scrollRef} onScroll={handleScroll}>
            {attractions.map(place => (
              <div key={place.id} className="place-card">
                <img src={place.image} alt={place.name} className="place-image" />
                <div className="place-content">
                  <h3>{place.name}</h3>
                  <span className="place-distance">📍 {place.distance}</span>
                  <p className="place-description">{place.description}</p>
                </div>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button className="nav-arrow right" onClick={() => scroll('right')}>
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* PAGINATION DOTS */}
        <div className="pagination-dots">
          {attractions.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = 280 + 24;
                  scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
                }
              }}
            >
              {index === activeIndex ? '●' : '○'}
            </span>
          ))}
        </div>

        {/* BOOK CAB SECTION */}
        <div className="book-cab-bar">
          <div className="book-cab-left">
            <CarFront size={90} strokeWidth={1} color="rgba(255,255,255,0.2)" className="car-illustration-bg" />
            <img src={kpmLogo} alt="KPM" className="kpm-small-logo" />
          </div>
          <div className="book-cab-center">
            <h3>Book a Cab</h3>
            <p>Travel around Chettinad comfortably with KPM Travels.</p>
          </div>
          <div className="book-cab-right">
            <button className="book-now-btn" onClick={() => setIsModalOpen(true)}>BOOK NOW</button>
          </div>
        </div>

      </div>

      {/* CAB DETAILS MODAL */}
      {isModalOpen && (
        <div className="cab-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="cab-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-left">
                <h2>🚗 Travel Around Chettinad</h2>
                <p>Book a comfortable ride and explore more.</p>
              </div>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-kpm-info">
                <img src={kpmLogo} alt="KPM Travels" className="modal-logo" />
              </div>
              
              <div className="vehicle-images">
                <div className="vehicle">
                  <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" alt="4 Seater Car" />
                  <span>4 Seater</span>
                </div>
                <div className="vehicle">
                  <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80" alt="6 Seater Car" />
                  <span>6 Seater</span>
                </div>
              </div>

              <div className="tariff-section">
                <table className="tariff-table">
                  <thead>
                    <tr>
                      <th>Hours</th>
                      <th>Kms</th>
                      <th>4 Seater</th>
                      <th>6 Seater</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>3</td><td>30</td><td>₹1200</td><td>₹1600</td></tr>
                    <tr><td>6</td><td>80</td><td>₹2000</td><td>₹2600</td></tr>
                    <tr><td>8</td><td>100</td><td>₹2500</td><td>₹3500</td></tr>
                    <tr><td>10</td><td>120</td><td>₹3000</td><td>₹4200</td></tr>
                    <tr><td>12</td><td>150</td><td>₹3700</td><td>₹5000</td></tr>
                  </tbody>
                </table>
                
                <div className="additional-charges">
                  <div className="charge-column">
                    <strong>Additional KM:</strong>
                    <span>4 Seater: ₹13</span>
                    <span>6 Seater: ₹18</span>
                  </div>
                  <div className="charge-column">
                    <strong>Additional Hour:</strong>
                    <span>4 Seater: ₹200</span>
                    <span>6 Seater: ₹300</span>
                  </div>
                  <div className="charge-column">
                    <strong>Day Rental:</strong>
                    <span>4 Seater: ₹2500</span>
                    <span>6 Seater: ₹3500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="call-now-container">
                <span className="call-now-label"><Phone size={24} /> CALL NOW:</span>
                <a href="tel:+919443102599" className="call-link">+91 9443102599</a>
                <span className="call-separator">|</span>
                <a href="tel:+919865354433" className="call-link">+91 9865354433</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
