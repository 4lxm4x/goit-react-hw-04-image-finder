import '../../styles.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        largeimage={largeImageURL} // я не знал куда запхать URL большого изображения
        onClick={onClick}
      />
    </li>
  );
}
