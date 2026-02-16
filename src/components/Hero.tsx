import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in-up">Your Coastal Escape Awaits</h1>
        <p className="fade-in-up delay-1">6 Berth Caravan • Palm Grove • Comfort • Relaxation</p>
        <a href="#contact" className="cta-button fade-in-up delay-2">Book Your Stay</a>
        <p className="booking-notice">Bookings open</p>
      </div>
      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </section>
  );
};
