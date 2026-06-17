import React from 'react'
import { Wind, CarFront, Wifi, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './RoomCard.css'

export default function RoomCard({ room, onViewDetails }) {
  const navigate = useNavigate();

  return (
    <div className="room-card" onClick={() => onViewDetails(room)}>
      <div className="room-gallery">
        <img 
          src={room.images[0]} 
          alt={`${room.type} view`} 
          className="room-image"
        />
        <div className="room-badges">
          <span className="room-status-badge available">Available</span>
        </div>
      </div>

      <div className="room-card-body">
        <div className="room-card-left">
          <h3 className="room-card-title">{room.type}</h3>
          <div className="room-amenities">
            {room.hasAC && <Wind size={18} title="Air Conditioned" />}
            <CarFront size={18} title="Parking" />
            <Wifi size={18} title="Free WiFi" />
            <Coffee size={18} title="Breakfast Included" />
          </div>
        </div>
        
        <div className="room-card-right">
          <span className="price-amount">₹ {room.price.toLocaleString('en-IN')}</span>
          <span className="price-tax">Inclusive of 5% GST</span>
        </div>
      </div>
    </div>
  )
}
