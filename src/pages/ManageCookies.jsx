import React, { useState } from 'react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import { Link } from 'react-router-dom';

const cookieTypes = [
  { id: 'essential', label: 'Essential Cookies', desc: 'Required for the site to function. Cannot be disabled.', locked: true },
  { id: 'analytics', label: 'Analytics Cookies', desc: 'Help us understand how visitors use AutoMax so we can improve it.' },
  { id: 'preference', label: 'Preference Cookies', desc: 'Remember your settings and personalise your experience.' },
  { id: 'marketing', label: 'Marketing Cookies', desc: 'Used to show relevant ads and measure campaign effectiveness.' },
];

export default function ManageCookies() {
  const [prefs, setPrefs] = useState({ essential: true, analytics: true, preference: true, marketing: false });
  const [saved, setSaved] = useState(false);

  const toggle = (id) => setPrefs(p => ({ ...p, [id]: !p[id] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Manage Cookies</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Manage Cookies</h1>
        <p className="text-muted-foreground mb-8 text-sm">Control which cookies AutoMax can use on your device. Essential cookies cannot be disabled as they are required for the site to work.</p>
        <div className="space-y-4 mb-8">
          {cookieTypes.map(c => (
            <div key={c.id} className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">{c.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
              </div>
              <button
                onClick={() => !c.locked && toggle(c.id)}
                className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 mt-1 ${prefs[c.id] ? 'bg-primary' : 'bg-border'} ${c.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${prefs[c.id] ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          ))}
        </div>
        {saved && (
          <div className="mb-4 bg-accent/10 border border-accent/20 text-accent text-sm font-medium px-4 py-3 rounded-xl">
            ✓ Your cookie preferences have been saved.
          </div>
        )}
        <button onClick={handleSave} className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors">
          Save Preferences
        </button>
      </div>
      <Footer />
    </div>
  );
}