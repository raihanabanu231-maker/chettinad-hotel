import React from 'react'
import Hero from '../components/Hero'
import Filters from '../components/Filters'
import RoomList from '../components/RoomList'
import ExploreChettinad from '../components/ExploreChettinad'
import Reviews from '../components/Reviews'
import ContactFooter from '../components/ContactFooter'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Filters />
        <RoomList />
      </div>
      <ExploreChettinad />
      <Reviews />
      <ContactFooter />
    </div>
  )
}
