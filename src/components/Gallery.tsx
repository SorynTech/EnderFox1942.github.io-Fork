import React, { useState, useEffect } from 'react';
import { ImageData } from '../types';
import { ProtectedImage } from './ProtectedImage';
import { SkeletonImage } from './Skeleton';

interface GalleryProps {
  title: string;
  subtitle: string;
  images: ImageData[];
  onImageClick: (src: string) => void;
  sectionId?: string;
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ 
  title, 
  subtitle, 
  images, 
  onImageClick,
  sectionId,
  className = ''
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`section ${className}`} id={sectionId}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="gallery">
          {loading ? (
            Array(images.length).fill(0).map((_, index) => (
              <div 
                key={index}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <SkeletonImage />
              </div>
            ))
          ) : (
            images.map((image, index) => (
              <div 
                key={index}
                className="gallery-item" 
                onClick={() => onImageClick(image.src)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProtectedImage 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
