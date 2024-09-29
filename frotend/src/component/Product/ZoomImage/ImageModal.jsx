import React from 'react';
import './ImageModal.css'; // Add CSS for styling

const ImageModal = ({ show, onClose, imageSrc }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged" className="modal-image" />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
