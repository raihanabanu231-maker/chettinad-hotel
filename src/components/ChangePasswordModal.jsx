import React, { useState } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import './ChangePasswordModal.css'

export default function ChangePasswordModal({ onClose }) {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content pwd-modal glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header-sticky" style={{background: 'transparent', boxShadow: 'none'}}>
          <button className="modal-close-sticky" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="pwd-body">
          <h2 style={{fontFamily: 'Cormorant Garamond, serif', textAlign: 'center', marginBottom: '2rem'}}>Change Password</h2>
          
          <div className="pwd-form">
            <div className="pwd-input-group">
              <label>Old Password</label>
              <div className="pwd-input-wrapper">
                <input type={showOld ? "text" : "password"} placeholder="Enter old password" />
                <button type="button" className="eye-btn" onClick={() => setShowOld(!showOld)}>
                  {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pwd-input-group">
              <label>New Password</label>
              <div className="pwd-input-wrapper">
                <input type={showNew ? "text" : "password"} placeholder="Enter new password" />
                <button type="button" className="eye-btn" onClick={() => setShowNew(!showNew)}>
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pwd-input-group">
              <label>Confirm Password</label>
              <div className="pwd-input-wrapper">
                <input type={showConfirm ? "text" : "password"} placeholder="Confirm new password" />
                <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="btn-primary update-pwd-btn" onClick={onClose}>Update Password</button>
            
            <div className="forgot-pwd-container">
              <a href="#" className="forgot-pwd-link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
