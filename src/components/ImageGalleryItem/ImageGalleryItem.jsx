import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, onClick }) => (
  <>
    <li
      key={id}
      className={style.Item}
      onClick={() => {
        onClick(largeImageURL);
      }}
    >
      <img className={style.ItemImage} src={webformatURL} alt={tags} />
    </li>
  </>
  
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};