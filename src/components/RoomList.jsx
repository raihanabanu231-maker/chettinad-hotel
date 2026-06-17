import React, { useState, useRef, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import RoomCard from './RoomCard'
import RoomDetailsModal from './RoomDetailsModal'
import './RoomList.css'

const mockRooms = [
  { id: 1, type: 'AC Double Bed', price: 2200, images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80'], description: 'Comfortable stay for couples and small families.', maxOccupancy: 3, roomSize: '150 sq ft', hasAC: true },
  { id: 2, type: 'Non-AC Double Bed', price: 1200, images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'], description: 'Budget friendly stay with essential amenities.', maxOccupancy: 3, roomSize: '150 sq ft', hasAC: false },
  { id: 3, type: 'Triple Bed Room', price: 2700, images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80'], description: 'Spacious room ideal for small groups or families.', maxOccupancy: 5, roomSize: '360 sq ft', hasAC: true },
  { id: 4, type: 'Suite Room', price: 3750, images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'], description: 'Our finest suite offering uncompromised luxury.', maxOccupancy: 6, roomSize: '450 sq ft', hasAC: true },
  { id: 5, type: 'Heritage Double Room', price: 2500, images: ['https://images.unsplash.com/photo-1598928506311-c55dd580e55b?auto=format&fit=crop&q=80'], description: 'Experience the traditional Chettinad aesthetics.', maxOccupancy: 3, roomSize: '120 sq ft', hasAC: true },
  { id: 6, type: 'Heritage Single Room', price: 1500, images: ['https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'], description: 'Cozy traditional room for solo travelers.', maxOccupancy: 1, roomSize: '80 sq ft', hasAC: true }
];

export default function RoomList() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollEvent = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScrollEvent();
    window.addEventListener('resize', handleScrollEvent);
    return () => window.removeEventListener('resize', handleScrollEvent);
  }, []);

  return (
    <div className="room-list-container">
      {showLeftArrow && (
        <button className="carousel-nav-btn left" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>
      )}

      <div className="room-carousel" ref={carouselRef} onScroll={handleScrollEvent}>
        {mockRooms.map(room => (
          <RoomCard 
            key={room.id} 
            room={room} 
            onViewDetails={(r) => setSelectedRoom(r)} 
          />
        ))}
      </div>

      {showRightArrow && (
        <button className="carousel-nav-btn right" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      )}

      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          onClose={() => setSelectedRoom(null)} 
        />
      )}
    </div>
  )
}
