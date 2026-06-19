import React, { useRef, useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle, Landmark, UtensilsCrossed, ShoppingBag, Sparkles } from 'lucide-react'
import kpmLogo from '../assets/kpm-logo.png'
import './ExploreChettinad.css'

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
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
    <section id="explore" className="explore-section">
      <div className="container">
        <div className="explore-layout">
          {/* LEFT SIDE - Attractions */}
          <div className="explore-left">
            <div className="explore-header">
              <h2 className="section-title-left">Explore Chettinad</h2>
              <div className="title-divider"></div>
              <p className="explore-subtitle">Discover the rich heritage, culture and timeless beauty of Chettinad.</p>
            </div>
            
            <div className="carousel-container">
              {showLeftArrow && (
                <button className="carousel-arrow left" onClick={() => scroll('left')}>
                  <ChevronLeft size={24} />
                </button>
              )}
              
              <div 
                className="carousel-track" 
                ref={scrollRef} 
                onScroll={handleScroll}
              >
                {attractions.map(place => (
                  <div key={place.id} className="carousel-card neo-panel">
                    <img src={place.image} alt={place.name} />
                    <div className="carousel-info">
                      <h3>{place.name}</h3>
                      <span className="carousel-distance">Distance: {place.distance}</span>
                      <p>{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {showRightArrow && (
                <button className="carousel-arrow right" onClick={() => scroll('right')}>
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Experience Category Section */}
            <div className="experience-categories">
              <div className="experience-card">
                <div className="exp-icon"><Landmark size={24} /></div>
                <h4>Heritage & Culture</h4>
                <p>Explore centuries of royal heritage.</p>
              </div>
              <div className="experience-card">
                <div className="exp-icon"><UtensilsCrossed size={24} /></div>
                <h4>Local Cuisine</h4>
                <p>Enjoy authentic Chettinad delicacies.</p>
              </div>
              <div className="experience-card">
                <div className="exp-icon"><ShoppingBag size={24} /></div>
                <h4>Shopping</h4>
                <p>Handicrafts, antiques and local specialties.</p>
              </div>
              <div className="experience-card">
                <div className="exp-icon"><Sparkles size={24} /></div>
                <h4>Memorable Experiences</h4>
                <p>Create unforgettable memories.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Cab Booking */}
          <div className="explore-right">
            <div className="cab-booking-card kpm-card">
              <div className="cab-header-new">
                <h3>Travel Around Chettinad</h3>
                <p>Book a comfortable ride and explore more.</p>
              </div>
              <div className="cab-branding">
                <img src={kpmLogo} alt="KPM Travels" className="kpm-logo" />
              </div>

              <div className="cab-hero">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" alt="Travel Vehicles" className="cab-hero-img" />
              </div>

              <div className="cab-services">
                <div className="service-item"><CheckCircle size={16} /> Local Sightseeing</div>
                <div className="service-item"><CheckCircle size={16} /> Temple Tours</div>
                <div className="service-item"><CheckCircle size={16} /> Airport Pickup</div>
                <div className="service-item"><CheckCircle size={16} /> Heritage Tours</div>
                <div className="service-item"><CheckCircle size={16} /> Family Travel</div>
              </div>

              <div className="cab-pricing">
                <div className="pricing-column">
                  <h4>4 Seater</h4>
                  <ul>
                    <li><span>3 Hrs / 30 Km</span> ₹1200</li>
                    <li><span>6 Hrs / 80 Km</span> ₹2000</li>
                    <li><span>8 Hrs / 100 Km</span> ₹2500</li>
                    <li><span>10 Hrs / 120 Km</span> ₹3000</li>
                    <li><span>12 Hrs / 150 Km</span> ₹3700</li>
                  </ul>
                  <div className="pricing-extra">
                    <small>Addl. KM: ₹13 | Addl. Hr: ₹200</small>
                  </div>
                </div>
                <div className="pricing-column">
                  <h4>6 Seater</h4>
                  <ul>
                    <li><span>3 Hrs / 30 Km</span> ₹1600</li>
                    <li><span>6 Hrs / 80 Km</span> ₹2600</li>
                    <li><span>8 Hrs / 100 Km</span> ₹3500</li>
                    <li><span>10 Hrs / 120 Km</span> ₹4200</li>
                    <li><span>12 Hrs / 150 Km</span> ₹5000</li>
                  </ul>
                  <div className="pricing-extra">
                    <small>Addl. KM: ₹18 | Addl. Hr: ₹300</small>
                  </div>
                </div>
              </div>

              <div className="cab-terms" style={{textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '-0.5rem', marginTop: '-0.5rem'}}>
                *Terms and Conditions apply. Subject to vehicle availability.
              </div>
              <button className="book-cab-btn">Book a Cab</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
