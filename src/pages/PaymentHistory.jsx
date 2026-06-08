import React, { useState } from 'react';
import { ArrowLeft, Download, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/automax/Navbar';
import Footer from '../components/automax/Footer';

export default function PaymentHistory() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      type: 'Ad Listing',
      description: '30-day premium listing - 2019 BMW 3 Series',
      amount: '€49.99',
      date: '2026-05-10',
      status: 'Completed',
      method: 'Credit Card',
    },
    {
      id: 2,
      type: 'Featured Listing',
      description: 'Featured placement - 2021 Tesla Model 3',
      amount: '€29.99',
      date: '2026-05-05',
      status: 'Completed',
      method: 'PayPal',
    },
    {
      id: 3,
      type: 'History Check',
      description: 'Vehicle history report - BMW1234',
      amount: '€15.99',
      date: '2026-05-03',
      status: 'Completed',
      method: 'Credit Card',
    },
    {
      id: 4,
      type: 'Ad Listing',
      description: '30-day standard listing - 2018 Audi A4',
      amount: '€19.99',
      date: '2026-04-28',
      status: 'Completed',
      method: 'Credit Card',
    },
    {
      id: 5,
      type: 'Subscription',
      description: 'Pro seller package (monthly)',
      amount: '€99.99',
      date: '2026-04-20',
      status: 'Completed',
      method: 'Credit Card',
    },
  ]);

  const handleDownloadReceipt = (id) => {
    const payment = payments.find(p => p.id === id);
    alert(`Downloading receipt for ${payment.description}...`);
  };

  const totalSpent = payments.reduce((sum, p) => sum + parseFloat(p.amount.replace('€', '')), 0);

  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Payment History</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Payment History</h1>
          <div className="bg-white rounded-xl border border-border shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-primary">€{totalSpent.toFixed(2)}</p>
              </div>
              <CreditCard className="w-12 h-12 text-primary/20" />
            </div>
          </div>
        </div>

        {payments.length === 0 ? (
          <div className="bg-white rounded-xl border border-border shadow-sm p-12 text-center">
            <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground mb-2">No payments</p>
            <p className="text-sm text-muted-foreground">Your payment history will appear here</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl border border-border shadow-sm">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="bg-secondary/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {payment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{payment.description}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{payment.date}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{payment.method}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDownloadReceipt(payment.id)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-primary hover:bg-primary/10 rounded transition-colors">
                        <Download className="w-4 h-4" />
                        Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}