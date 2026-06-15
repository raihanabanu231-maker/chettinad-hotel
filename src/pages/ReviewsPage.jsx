import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, X, Image as ImageIcon, CheckCircle, Info } from 'lucide-react';
import './ReviewsPage.css';

const MOCK_REVIEWS = [
  { id: 1, name: 'Arun Kumar', date: '15 May 2025', rating: 5, title: 'Outstanding Experience', text: 'Wonderful stay! The rooms were clean, spacious and the staff was very polite. Highly recommended for families.', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Priya Sharma', date: '12 May 2025', rating: 4, title: 'Great Ambiance', text: 'Great location and ambiance. Loved the hospitality and cleanliness. The food could be slightly better, but overall a great experience.', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Vikram Reddy', date: '10 May 2025', rating: 5, title: 'Will Visit Again', text: 'Excellent service and well-maintained property. The heritage feel is preserved beautifully. Will definitely visit again.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Anjali Desai', date: '02 May 2025', rating: 5, title: 'Perfect Getaway', text: 'A perfect getaway from the city hustle. The authentic Chettinad cuisine served here is a must-try!', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'Rahul Verma', date: '28 Apr 2025', rating: 4, title: 'Comfortable Stay', text: 'Very comfortable and luxurious stay. The staff went out of their way to make us feel welcome.', avatar: 'https://i.pravatar.cc/150?img=14' }
];

export default function ReviewsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [writeReviewStep, setWriteReviewStep] = useState('form'); // form, success
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form on close
      setTimeout(() => {
        setWriteReviewStep('form');
        setSelectedRating(0);
      }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setWriteReviewStep('success');
  };

  return (
    <div className="reviews-page container">
      <div className="reviews-header">
        <div>
          <h2>Guest Reviews</h2>
          <p>Read what our guests have to say about their stay.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Write a Review</button>
      </div>

      <div className="reviews-layout">
        {/* Left Side: Rating Summary */}
        <div className="rating-summary-sidebar">
          <div className="rating-summary-card">
            <div className="overall-rating">
              <h3>4.8</h3>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={20} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p>Based on 500 Reviews</p>
            </div>

            <div className="rating-bars">
              {[
                { label: '5', count: 320, pct: '64%' },
                { label: '4', count: 120, pct: '24%' },
                { label: '3', count: 40, pct: '8%' },
                { label: '2', count: 15, pct: '3%' },
                { label: '1', count: 5, pct: '1%' },
              ].map(bar => (
                <div key={bar.label} className="rating-bar-row">
                  <div className="bar-label">{bar.label} <Star size={12} fill="#f59e0b" color="#f59e0b"/></div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{width: bar.pct}}></div>
                  </div>
                  <div className="bar-count">{bar.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Reviews List */}
        <div className="reviews-list-section">
          <div className="reviews-filters">
            <select>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
              <option>Most Helpful</option>
            </select>
          </div>

          <div className="review-list-container">
            {MOCK_REVIEWS.map(review => (
              <div key={review.id} className="review-card-full">
                <div className="review-author">
                  <img src={review.avatar} alt={review.name} />
                  <div className="review-author-info">
                    <h4>{review.name}</h4>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={14} fill={star <= review.rating ? "#f59e0b" : "transparent"} color={star <= review.rating ? "#f59e0b" : "var(--border-color)"} />
                  ))}
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p className="review-body">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn" style={{border: 'none', background: 'transparent'}}>...</button>
            <button className="page-btn">10</button>
          </div>
        </div>
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content write-review-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header-sticky">
              <button className="modal-close-sticky" onClick={() => setIsModalOpen(false)}><X size={20} /></button>
            </div>
            
            <div className="modal-body" style={{marginTop: '-2rem'}}>
              {writeReviewStep === 'form' ? (
                <>
                  <h2 style={{fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center'}}>Share Your Experience</h2>
                  <form className="write-review-form" onSubmit={handleSubmitReview}>
                    
                    <div className="form-group" style={{alignItems: 'center', marginBottom: '1rem'}}>
                      <label>Overall Rating</label>
                      <div className="star-selector">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button 
                            key={star} 
                            type="button" 
                            className="star-btn"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setSelectedRating(star)}
                          >
                            <Star 
                              size={32} 
                              fill={(hoverRating || selectedRating) >= star ? "#f59e0b" : "transparent"} 
                              color={(hoverRating || selectedRating) >= star ? "#f59e0b" : "var(--border-color)"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Review Title</label>
                      <input type="text" placeholder="Summarize your experience" required />
                    </div>

                    <div className="form-group">
                      <label>Review Description</label>
                      <textarea placeholder="Tell us about your stay..." required></textarea>
                    </div>

                    <div className="form-group">
                      <label>Add Photos (Optional)</label>
                      <div className="photo-upload">
                        <ImageIcon size={32} style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}/>
                        <p>Click to upload photos</p>
                      </div>
                    </div>

                    <div className="review-guidelines">
                      <h4><Info size={14} style={{display: 'inline', marginRight: '4px'}}/> Review Guidelines</h4>
                      <ul>
                        <li><span>•</span> Be respectful and share genuine experiences.</li>
                        <li><span>•</span> Avoid including personal information.</li>
                        <li><span>•</span> Keep the language appropriate.</li>
                      </ul>
                    </div>

                    <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}} disabled={!selectedRating}>
                      Submit Review
                    </button>
                  </form>
                </>
              ) : (
                <div className="success-message">
                  <CheckCircle size={64} color="#059669" />
                  <h3>Thank You!</h3>
                  <p style={{color: 'var(--text-muted)', textAlign: 'center'}}>Your review has been successfully submitted and will be published shortly after moderation.</p>
                  <button className="btn-primary" style={{marginTop: '2rem'}} onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
