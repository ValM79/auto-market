import React, { useState } from 'react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Contact Us</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">Mon–Fri, 9am–5:30pm</p>
                <a href="tel:+35314444444" className="text-primary hover:underline font-medium">+353 1 4444444</a>
              </div>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                <a href="mailto:support@automax.ie" className="text-primary hover:underline font-medium">support@automax.ie</a>
              </div>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Office</h3>
                <p className="text-muted-foreground text-sm">AutoMax HQ<br />123 Motor House, Dublin 2<br />Ireland</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold text-foreground mb-4">Send a Message</h2>
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-foreground mb-1 capitalize">{field}</label>
                    <input type={field === 'email' ? 'email' : 'text'} required value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea required rows={4} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}