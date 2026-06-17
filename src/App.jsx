import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import SuccessPage from './pages/SuccessPage'
import MyBookingsPage from './pages/MyBookingsPage'
import ProfilePage from './pages/ProfilePage'
import ReviewsPage from './pages/ReviewsPage'
import Navbar from './components/Navbar'
import AmenitiesModal from './components/AmenitiesModal'
import PropertyRulesModal from './components/PropertyRulesModal'
import ChangePasswordModal from './components/ChangePasswordModal'
import './index.css'

function App() {
  const [showAmenities, setShowAmenities] = useState(false);
  const [showPropertyRules, setShowPropertyRules] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    const handleAmenities = () => setShowAmenities(true);
    const handleRules = () => setShowPropertyRules(true);
    const handlePwd = () => setShowChangePassword(true);

    window.addEventListener('openAmenities', handleAmenities);
    window.addEventListener('openPropertyRules', handleRules);
    window.addEventListener('openChangePassword', handlePwd);

    return () => {
      window.removeEventListener('openAmenities', handleAmenities);
      window.removeEventListener('openPropertyRules', handleRules);
      window.removeEventListener('openChangePassword', handlePwd);
    };
  }, []);
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
      
      {showAmenities && <AmenitiesModal onClose={() => setShowAmenities(false)} />}
      {showPropertyRules && <PropertyRulesModal onClose={() => setShowPropertyRules(false)} />}
      {showChangePassword && <ChangePasswordModal onClose={() => setShowChangePassword(false)} />}
    </Router>
  )
}

export default App
