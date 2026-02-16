import React, { useState, useEffect } from 'react';
import { Feature } from '../types';
import { SkeletonCard } from './Skeleton';

interface FeaturesProps {
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          {loading ? (
            Array(6).fill(0).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24">
                    <path d={feature.icon}/>
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
