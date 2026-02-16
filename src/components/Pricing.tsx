import React, { useState, useEffect } from 'react';
import { PricingOption } from '../types';
import { SkeletonPricing } from './Skeleton';

interface PricingProps {
  options: PricingOption[];
}

export const Pricing: React.FC<PricingProps> = ({ options }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <h2 className="section-title">Pricing Options</h2>
        <div className="pricing-grid">
          {loading ? (
            Array(4).fill(0).map((_, index) => (
              <SkeletonPricing key={index} />
            ))
          ) : (
            options.map((option, index) => (
              <div key={index} className="pricing-card">
                {option.isSummer && <div className="summer-badge">Peak Season</div>}
                <h3>{option.title}</h3>
                <div className="price">{option.price}</div>
                <div className="duration">{option.duration}</div>
                <ul className="features">
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                {option.excludes && <p className="excludes-note">*{option.excludes}</p>}
              </div>
            ))
          )}
        </div>
        <div className="availability-notice">
          Bookings open
        </div>
      </div>
    </section>
  );
};
