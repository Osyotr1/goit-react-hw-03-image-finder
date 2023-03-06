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
