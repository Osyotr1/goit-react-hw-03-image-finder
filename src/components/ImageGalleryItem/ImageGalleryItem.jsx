

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => (
    <>
    <p>
        Pictures fetched
    </p>
    <li key={id} class="gallery-item">
        <img src={webformatURL} alt={tags} />
    </li>
    </>
);

export default ImageGalleryItem;