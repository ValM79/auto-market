import React from 'react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Privacy Policy</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 2026</p>
        <div className="space-y-6">
          {[
            { title: '1. Who We Are', text: 'AutoMax (automax.ie) is a vehicle marketplace operated in Ireland. We are committed to protecting your personal data in line with the General Data Protection Regulation (GDPR) and applicable Irish data protection law.' },
            { title: '2. Data We Collect', text: 'We collect: name and contact details when you register or place an ad; payment information (processed securely by Stripe); vehicle listing data; browsing behaviour and search history on our platform; communications you send via our message centre.' },
            { title: '3. How We Use Your Data', text: 'Your data is used to: provide and improve our marketplace services; process payments; send you notifications about your ads or saved searches; communicate service updates; comply with legal obligations.' },
            { title: '4. Legal Basis for Processing', text: 'We process your data on the basis of: contract performance (providing our service); legitimate interests (improving our platform); your consent (marketing communications); and legal obligations.' },
            { title: '5. Data Sharing', text: 'We do not sell your personal data. We may share it with: payment processors (Stripe); analytics providers (Google Analytics); law enforcement when legally required.' },
            { title: '6. Your Rights', text: 'Under GDPR you have the right to: access your personal data; correct inaccurate data; request deletion; object to processing; data portability. Contact us at privacy@automax.ie to exercise these rights.' },
            { title: '7. Data Retention', text: 'We retain your data for as long as necessary to provide our services or as required by law. Account data is retained for up to 3 years after your last activity.' },
            { title: '8. Contact', text: 'For privacy queries, contact our Data Protection Officer at privacy@automax.ie or write to AutoMax, 123 Motor House, Dublin 2, Ireland.' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}