import { useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ src, alt, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlyClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={css.modalOverly} onClick={handleOverlyClick}>
      <div className={css.modalContent}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
