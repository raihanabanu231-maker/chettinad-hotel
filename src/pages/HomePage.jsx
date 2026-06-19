import React, { useState } from 'react'
import Hero from '../components/Hero'
import Filters from '../components/Filters'
import RoomList from '../components/RoomList'
import ExploreChettinad from '../components/ExploreChettinad'
import Reviews from '../components/Reviews'
import ContactFooter from '../components/ContactFooter'

export default function HomePage() {
  const [filters, setFilters] = useState({
    roomType: 'All Rooms',
    price: '₹ Min - ₹ Max',
    adults: '1',
    children: '0'
  });

  return (
    <div>
      <Hero />
      <div className="container">
        <Filters filters={filters} setFilters={setFilters} />
        <RoomList filters={filters} />
      </div>
      <ExploreChettinad />
      <Reviews />
      <ContactFooter />
    </div>
  )
}
