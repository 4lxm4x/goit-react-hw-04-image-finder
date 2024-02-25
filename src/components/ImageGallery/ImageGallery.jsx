import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import "../../styles.css";

export default function ImageGallery({ images }) {
  // state = { isModalOpen: false, modalImageURL: '', modalAlt: '' };
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalImageURL, setmodalImageURL] = useState("");
  const [modalAlt, setmodalAlt] = useState("");

  const toggleModal = () => {
    setmodalOpen((prevState) => {
      return !prevState;
    });
  };

  const handleImageClick = (largeImageURL, tags) => {
    setmodalImageURL(largeImageURL);
    setmodalAlt(tags);

    toggleModal();
  };

  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClick={() => handleImageClick(largeImageURL, tags)}
            />
          );
        })}
      </ul>
      {modalOpen && (
        <Modal
          largeImage={modalImageURL}
          onOverlayClick={toggleModal}
          alt={modalAlt}
          onClose={(close) => setmodalOpen(false)}
        />
      )}
    </div>
  );
}
