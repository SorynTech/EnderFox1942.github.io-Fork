import React, { useEffect } from 'react';
import { ProtectedImage } from './ProtectedImage';

interface ModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && imageSrc) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (imageSrc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div className={`modal ${imageSrc ? 'active' : ''}`} onClick={onClose}>
      <span className="close-modal">&times;</span>
      <div className="modal-content">
        <ProtectedImage src={imageSrc} alt="Enlarged view" />
      </div>
    </div>
  );
};
