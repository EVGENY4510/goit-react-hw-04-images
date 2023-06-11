import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <Modal src={largeImageURL} alt={tags} onClose={showModalToggle} />
      )}
      <li className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          width={375}
          onClick={showModalToggle}
        />
      </li>
    </div>
  );
}
