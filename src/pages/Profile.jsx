import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import Navbar from '../components/automax/Navbar';
import Footer from '../components/automax/Footer';

export default function Profile() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    full_name: user?.full_name || '',
    email: user?.email || '',
    phone: '',
    location: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Profile</span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>

        {saveSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-700">
            Profile updated successfully!
          </div>
        )}

        <div className="bg-white rounded-xl border border-border shadow-sm p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {formData.full_name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-foreground font-semibold">{formData.full_name}</p>
                <p className="text-sm text-muted-foreground">{formData.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white disabled:bg-secondary disabled:text-muted-foreground text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-secondary text-muted-foreground cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground mt-1">Email cannot be changed</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white disabled:bg-secondary disabled:text-muted-foreground text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="City, Country"
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white disabled:bg-secondary disabled:text-muted-foreground text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-border">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="border border-border text-foreground px-6 py-2.5 rounded-lg hover:bg-secondary transition-colors font-medium text-sm">
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}