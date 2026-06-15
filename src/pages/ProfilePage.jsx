import React from 'react'
import { User, Mail, Phone, MapPin, Edit, Shield, Bell, LogOut, ChevronRight, FileText, CheckCircle } from 'lucide-react'
import './ProfilePage.css'

export default function ProfilePage() {
  return (
    <div className="profile-page container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <p>Manage your account settings and preferences.</p>
      </div>

      <div className="profile-grid">
        {/* Left Column */}
        <div className="profile-sidebar">
          <div className="profile-card user-info-section">
            <img src="https://i.pravatar.cc/150?img=33" alt="Profile" className="profile-avatar" />
            <h4>Rajesh Kumar</h4>
            <p>Member since May 2024</p>
            <button className="btn-outline" style={{width: '100%'}}>
              <Edit size={16} /> Edit Profile
            </button>
          </div>

          <div className="profile-card">
            <h3><Shield size={20}/> Account Settings</h3>
            <div className="settings-list">
              <div className="settings-item">
                <div className="settings-item-left">
                  <span>Change Password</span>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <span>Notification Preferences</span>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </div>
            </div>
          </div>

          <button className="btn-logout">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Right Column */}
        <div className="profile-main">
          
          <div className="stats-grid">
            <div className="stat-card">
              <h4>12</h4>
              <p>Total Bookings</p>
            </div>
            <div className="stat-card">
              <h4>10</h4>
              <p>Completed Stays</p>
            </div>
            <div className="stat-card">
              <h4>2</h4>
              <p>Upcoming Stays</p>
            </div>
            <div className="stat-card" style={{background: 'var(--bg-color)', color: 'var(--text-main)', border: '1px solid var(--border-color)'}}>
              <h4>Suite</h4>
              <p>Favorite Room</p>
            </div>
          </div>

          <div className="profile-card">
            <h3><User size={20}/> Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <span>Rajesh Kumar</span>
              </div>
              <div className="detail-item">
                <label>Phone Number</label>
                <span>+91 98765 43210</span>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                <span>rajesh.kumar@example.com</span>
              </div>
              <div className="detail-item">
                <label>Address</label>
                <span>123, Anna Salai</span>
              </div>
              <div className="detail-item">
                <label>City</label>
                <span>Chennai</span>
              </div>
              <div className="detail-item">
                <label>State</label>
                <span>Tamil Nadu</span>
              </div>
              <div className="detail-item">
                <label>Country</label>
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <h3><FileText size={20}/> Saved Documents</h3>
            <div className="document-list">
              <div className="document-item">
                <div className="document-item-left">
                  <FileText size={24} color="var(--primary)" />
                  <div>
                    <strong>Aadhar Card</strong>
                    <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>Uploaded on 10 May 2024</div>
                  </div>
                </div>
                <div className="document-status"><CheckCircle size={12} style={{marginRight: '4px'}}/> Verified</div>
              </div>
              <div className="document-item">
                <div className="document-item-left">
                  <FileText size={24} color="var(--text-muted)" />
                  <div>
                    <strong>Passport</strong>
                    <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>Not Uploaded</div>
                  </div>
                </div>
                <button className="btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Upload</button>
              </div>
              <div className="document-item">
                <div className="document-item-left">
                  <FileText size={24} color="var(--text-muted)" />
                  <div>
                    <strong>Driving License</strong>
                    <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>Not Uploaded</div>
                  </div>
                </div>
                <button className="btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Upload</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
