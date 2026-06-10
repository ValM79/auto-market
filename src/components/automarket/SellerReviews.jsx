import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const INITIAL_REVIEWS = [
  { id: 1, name: 'Liam O\'Brien', rating: 5, comment: 'Great seller, very honest about the car condition. Smooth transaction overall.', date: '2 weeks ago' },
  { id: 2, name: 'Sarah Kelly', rating: 4, comment: 'Responded quickly and the car was exactly as described. Would recommend.', date: '1 month ago' },
];

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(s => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none"
        >
          <Star className={`w-6 h-6 transition-colors ${s <= (hovered || value) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 fill-gray-100'}`} />
        </button>
      ))}
    </div>
  );
}

function StarDisplay({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} className={`w-3.5 h-3.5 ${s <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
    </div>
  );
}

export default function SellerReviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.rating) errs.rating = 'Please select a rating';
    if (!form.comment.trim()) errs.comment = 'Please write a comment';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setReviews(prev => [{ id: Date.now(), name: form.name, rating: form.rating, comment: form.comment, date: 'Just now' }, ...prev]);
    setForm({ name: '', rating: 0, comment: '' });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const avgRating = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-foreground">Seller Reviews</h2>
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-foreground">{avgRating}</span>
          <StarDisplay rating={Math.round(avgRating)} />
          <span className="text-sm text-muted-foreground">({reviews.length})</span>
        </div>
      </div>

      {/* Existing reviews */}
      <div className="flex flex-col gap-4 mb-6">
        {reviews.map(r => (
          <div key={r.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-foreground">{r.name}</span>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
            <StarDisplay rating={r.rating} />
            <p className="text-sm text-muted-foreground mt-1.5">{r.comment}</p>
          </div>
        ))}
      </div>

      {/* Leave a review form */}
      <div className="border-t border-border pt-5">
        <h3 className="text-sm font-bold text-foreground mb-4">Leave a Review</h3>

        {submitted && (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            Thanks for your review!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Your Name <span className="text-destructive">*</span></label>
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              placeholder="e.g. John Murphy"
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.name ? 'border-destructive' : 'border-border'}`}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">⚠ {errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Rating <span className="text-destructive">*</span></label>
            <StarPicker value={form.rating} onChange={v => { setForm(f => ({ ...f, rating: v })); setErrors(e => ({ ...e, rating: undefined })); }} />
            {errors.rating && <p className="text-xs text-destructive mt-1">⚠ {errors.rating}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Comment <span className="text-destructive">*</span></label>
            <textarea
              value={form.comment}
              onChange={set('comment')}
              rows={3}
              placeholder="Share your experience with this seller..."
              className={`w-full border rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${errors.comment ? 'border-destructive' : 'border-border'}`}
            />
            {errors.comment && <p className="text-xs text-destructive mt-1">⚠ {errors.comment}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-white font-semibold py-2.5 rounded-xl hover:bg-foreground/90 transition-colors text-sm">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}