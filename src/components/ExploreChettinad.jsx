import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import CabBookingModal from './CabBookingModal'
import './ExploreChettinad.css'

const attractions = [
  {
    id: 1,
    name: 'Chettinad Palace',
    distance: '2.1 km',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80',
    description: 'A magnificent palace showcasing Chettinad architecture and heritage.'
  },
  {
    id: 2,
    name: 'Chettinad Streets',
    distance: '1.8 km',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80',
    description: 'Walk through the elegant streets lined with ancestral mansions.'
  },
  {
    id: 3,
    name: 'Athangudi Palace',
    distance: '12 km',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    description: 'Known for its vintage tiles and royal heritage experience.'
  },
  {
    id: 4,
    name: 'Tiles Making',
    distance: '15 km',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    description: 'See the artisans create famous Athangudi tiles with traditional methods.'
  },
  {
    id: 5,
    name: 'Car Museum in Pillayarpatti',
    distance: '20 km',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
    description: 'Explore a vintage car collection of rare and classic beauties.'
  },
  {
    id: 6,
    name: 'Pillayarpatti Kovil',
    distance: '22 km',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80',
    description: 'Ancient rock-cut temple dedicated to Lord Ganesha.'
  }
];

export default function ExploreChettinad() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <section id="explore" className="explore-section">
      <div className="section-header">
        <h2 className="section-title-left">Explore Chettinad</h2>
      </div>
      
      <div className="explore-grid-container">
        <div className="explore-grid">
          {attractions.map(place => (
            <div 
              key={place.id} 
              className="explore-card" 
              onClick={() => setSelectedPlace(place)}
            >
              <img src={place.image} alt={place.name} />
              <div className="explore-info">
                <h3>{place.name}</h3>
                <span className="explore-distance">{place.distance}</span>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-nav-btn right explore-nav">
          <ChevronRight size={24} />
        </button>
      </div>

      {selectedPlace && (
        <CabBookingModal 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)} 
        />
      )}
    </section>
  )
}
