import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';

function PasswordInput({ id, label, hint, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          tabIndex={-1}
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export default function CreateAccount() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    agreeMarketing: false,
  });

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target ? e.target.value : e }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic goes here
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">Create your account</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <PasswordInput
              id="password"
              label="Password"
              hint="At least 8 characters, one upper and lower character, one number and one symbol."
              value={form.password}
              onChange={set('password')}
            />

            {/* Confirm Password */}
            <PasswordInput
              id="confirmPassword"
              label="Confirm password"
              value={form.confirmPassword}
              onChange={set('confirmPassword')}
            />

            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={set('fullName')}
                placeholder="Your full name"
              />
            </div>

            {/* Marketing consent */}
            <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                To get the most from AutoMarket, we'll send you members-only updates via email,
                push notifications and on site messaging. You can update your preferences at any
                time from your My AutoMarket page.
              </p>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="agreeMarketing"
                  checked={form.agreeMarketing}
                  onCheckedChange={(checked) => setForm((f) => ({ ...f, agreeMarketing: checked }))}
                />
                <Label htmlFor="agreeMarketing" className="text-sm font-medium cursor-pointer">
                  Yes, I agree
                </Label>
              </div>
            </div>

            {/* reCAPTCHA notice */}
            <p className="text-xs text-muted-foreground text-center">
              This site is protected by reCAPTCHA and the{' '}
              <a href="#" className="underline hover:text-foreground">Google Privacy Policy</a> and{' '}
              <a href="#" className="underline hover:text-foreground">Terms of Service</a> apply.
            </p>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center">
              By clicking Continue, I agree to the{' '}
              <a href="#" className="underline hover:text-foreground">AutoMarket Terms of Use</a> and{' '}
              <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
            </p>

            <Button type="submit" className="w-full h-11 text-base font-semibold">
              Continue
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}