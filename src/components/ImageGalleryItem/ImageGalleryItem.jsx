import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => (
    <>
    <li key={id} className={style.Item}>
        <img className={style.ItemImage} src={webformatURL} alt={tags} />
    </li>
    </>
);

export default ImageGalleryItem;