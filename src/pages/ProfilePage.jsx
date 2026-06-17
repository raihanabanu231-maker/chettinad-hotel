import React, { useState } from 'react'
import { User, Camera, LogOut } from 'lucide-react'
import './ProfilePage.css'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    mobile: '+91 98765 43210',
    email: 'rajesh.kumar@example.com',
    address: '123, Heritage Street',
    city: 'Karaikudi',
    state: 'Tamil Nadu',
    country: 'India',
    photo: 'https://i.pravatar.cc/150?img=33'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile({...profile, photo: event.target.result});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="profile-page container">
      <div className="profile-header">
        <h2 style={{fontFamily: 'Cormorant Garamond, serif'}}>My Profile</h2>
        <p>Manage your personal information.</p>
      </div>

      <div className="profile-grid">
        {/* Left Column */}
        <div className="profile-sidebar">
          <div className="profile-card user-info-section">
            <div className="avatar-wrapper">
              <img src={profile.photo} alt="Profile" className="profile-avatar" />
              {isEditing && (
                <label className="avatar-upload-btn">
                  <Camera size={16} />
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{display: 'none'}} />
                </label>
              )}
            </div>
            <h4>{profile.name}</h4>
            <p>Member since May 2024</p>
          </div>

          <button className="btn-logout" onClick={() => {}}>
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Right Column */}
        <div className="profile-main">
          
          <div className="profile-card">
            <div className="profile-card-header">
              <h3><User size={20} color="var(--primary)"/> Personal Information</h3>
              {!isEditing && (
                <button className="btn-outline" onClick={() => setIsEditing(true)}>Edit Profile</button>
              )}
            </div>

            {isEditing ? (
              <div className="edit-profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="text" value={profile.mobile} onChange={e => setProfile({...profile, mobile: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" value={profile.address} onChange={e => setProfile({...profile, address: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" value={profile.city} onChange={e => setProfile({...profile, city: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" value={profile.state} onChange={e => setProfile({...profile, state: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" value={profile.country} onChange={e => setProfile({...profile, country: e.target.value})} />
                </div>

                <div className="form-actions">
                  <button className="btn-primary" onClick={handleSave}>Save Changes</button>
                  <button className="btn-outline" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="detail-grid">
                <div className="detail-item">
                  <label>Full Name</label>
                  <span>{profile.name}</span>
                </div>
                <div className="detail-item">
                  <label>Mobile Number</label>
                  <span>{profile.mobile}</span>
                </div>
                <div className="detail-item">
                  <label>Email Address</label>
                  <span>{profile.email}</span>
                </div>
                <div className="detail-item">
                  <label>Address</label>
                  <span>{profile.address}</span>
                </div>
                <div className="detail-item">
                  <label>City</label>
                  <span>{profile.city}</span>
                </div>
                <div className="detail-item">
                  <label>State</label>
                  <span>{profile.state}</span>
                </div>
                <div className="detail-item">
                  <label>Country</label>
                  <span>{profile.country}</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
