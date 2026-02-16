import React from 'react';

export const SkeletonCard: React.FC = () => (
  <div className="skeleton-card">
    <div className="skeleton-icon"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text short"></div>
  </div>
);

export const SkeletonImage: React.FC = () => (
  <div className="skeleton-image"></div>
);

export const SkeletonPricing: React.FC = () => (
  <div className="skeleton-pricing">
    <div className="skeleton-title"></div>
    <div className="skeleton-price"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
  </div>
);
