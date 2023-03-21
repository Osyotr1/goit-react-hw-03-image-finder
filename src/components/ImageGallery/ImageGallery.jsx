import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = ({ images, onClick }) => {
    return (
      <ul className={style.gallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
          />
        ))}
      </ul>
    );
  }

export default ImageGallery;
