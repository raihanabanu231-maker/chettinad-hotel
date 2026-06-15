import React from 'react'
import { Star, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: 'Arun Kumar',
    date: '15 May 2025',
    text: 'Wonderful stay! The rooms were clean, spacious and the staff was very polite. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    date: '12 May 2025',
    text: 'Great location and ambiance. Loved the hospitality and cleanliness.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    date: '10 May 2025',
    text: 'Excellent service and well-maintained property. Will definitely visit again.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
];

export default function Reviews() {
  const navigate = useNavigate();

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header">
        <h2 className="section-title-left">Guest Reviews</h2>
        <button className="view-all-btn" onClick={() => navigate('/reviews')}>
          View All Reviews <ArrowRight size={16} />
        </button>
      </div>

      <div className="reviews-container">
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span>{review.date}</span>
                </div>
              </div>
              <div className="stars">
                {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="var(--primary)" color="var(--primary)" />)}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="share-experience-box">
          <div className="stars" style={{justifyContent: 'center', marginBottom: '0.5rem'}}>
            <Star size={24} fill="var(--primary)" color="var(--primary)" />
          </div>
          <h4>Share your experience</h4>
          <p>We'd love to hear from you!</p>
          <button className="btn-primary" style={{marginTop: '1rem', width: '100%'}} onClick={() => navigate('/reviews')}>Write a Review</button>
        </div>
      </div>
    </section>
  )
}
