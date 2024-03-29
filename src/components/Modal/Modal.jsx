import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import '../../styles.css';

export default function Modal({ onClose, onOverlayClick, largeImage, alt }) {
  const modalRootEl = document.getElementById('modal-root');

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, []);

  const handleUserKeyPress = key => {
    if (key.code === 'Escape') {
      return onClose(false);
    }
  };

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
      return onOverlayClick();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={overlayClick}>
      <div className="Modal" onClick={overlayClick}>
        <img src={largeImage} className="modalImage" alt={alt} />
      </div>
    </div>,
    modalRootEl
  );
}
