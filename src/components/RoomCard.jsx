import React from 'react'
import { Wind, BedDouble, CarFront, Wifi } from 'lucide-react'
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
          <span className="room-type-label">{room.type}</span>
          <span className={`room-status-badge ${room.status.toLowerCase().replace(' ', '-')}`}>
            {room.status}
          </span>
        </div>
      </div>

      <div className="room-card-body">
        <div className="room-amenities">
          <Wind size={18} />
          <BedDouble size={18} />
          <CarFront size={18} />
          <Wifi size={18} />
        </div>
        
        <div className="room-price-info">
          <span className="price-amount">₹ {room.price.toLocaleString('en-IN')}</span>
          <span className="price-tax">+ Taxes</span>
        </div>
      </div>
    </div>
  )
}
