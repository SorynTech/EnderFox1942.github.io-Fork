import React, { useState, useRef, useEffect } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ src, alt, onClick, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Add watermark
      const watermarkText = 'Niki-and-John';
      const fontSize = Math.max(20, img.width / 30);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 2;

      // Position watermark in bottom right
      const textMetrics = ctx.measureText(watermarkText);
      const x = img.width - textMetrics.width - 20;
      const y = img.height - 20;

      ctx.strokeText(watermarkText, x, y);
      ctx.fillText(watermarkText, x, y);

      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <canvas
      ref={canvasRef}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      onClick={onClick}
      className={`${className} ${isLoaded ? 'loaded' : ''}`}
      role="img"
      aria-label={alt}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    />
  );
};
