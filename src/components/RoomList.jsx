import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import RoomCard from './RoomCard'
import RoomDetailsModal from './RoomDetailsModal'
import './RoomList.css'

const mockRooms = [
  {
    id: 1,
    type: 'Premium Room',
    status: 'Available',
    price: 3500,
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
    ],
    description: 'A cozy and elegant room offering all standard amenities perfect for a short stay.',
    maxOccupancy: 2,
    bedType: 'Queen Size',
    roomSize: '250 sq.ft'
  },
  {
    id: 2,
    type: 'Deluxe Room',
    status: 'Available',
    price: 4200,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55dd580e55b?auto=format&fit=crop&q=80'
    ],
    description: 'Spacious deluxe room with premium interiors reflecting traditional Chettinad aesthetics.',
    maxOccupancy: 3,
    bedType: 'King Size',
    roomSize: '350 sq.ft'
  },
  {
    id: 3,
    type: 'Suite Room',
    status: 'Available',
    price: 6000,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'
    ],
    description: 'Our finest suite offering uncompromised luxury, separate living area, and premium services.',
    maxOccupancy: 4,
    bedType: 'King Size + Sofa Bed',
    roomSize: '550 sq.ft'
  }
];

export default function RoomList() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="room-list-container">
      <div className="room-grid">
        {mockRooms.map(room => (
          <RoomCard 
            key={room.id} 
            room={room} 
            onViewDetails={(r) => setSelectedRoom(r)} 
          />
        ))}
      </div>
      <button className="carousel-nav-btn right">
        <ChevronRight size={24} />
      </button>

      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          onClose={() => setSelectedRoom(null)} 
        />
      )}
    </div>
  )
}
