import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import SuccessPage from './pages/SuccessPage'
import MyBookingsPage from './pages/MyBookingsPage'
import ProfilePage from './pages/ProfilePage'
import ReviewsPage from './pages/ReviewsPage'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </Router>
  )
}

export default App
