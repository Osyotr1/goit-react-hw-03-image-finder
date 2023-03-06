import React, { Component } from 'react';
import style from './ImageGallery.module.css';
import imageAPI from 'components/API/fetchImage';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    hits: [],
    totalHits: '',
    button: false,
    page: 1,
    loader: false,
    showModal: false,
    largeImageURL: null,
  };

  onLoad = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevProp = prevProps.fetchValue;
    const nextProp = this.props.fetchValue;
    const page = this.state.page;

    if (prevProp !== nextProp || (prevState.page !== page && page !== 1)) {
      this.setState({ loader: true });
      setTimeout(() => {
        imageAPI
          .fetchImage(nextProp, page)
          .then(({ data }) =>
            this.setState(prevState => ({
              hits: [...prevState.hits, ...data.hits],
              totalHits: data.totalHits,
              button: true,
            }))
          )
          .catch(error => console.log(error))
          .finally(this.setState({ loader: false }));
      }, 1000);
    }
  }

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  render() {
    const images = this.state.hits;
    const button = this.state.button;
    const loader = this.state.loader;
    const showModal = this.state.showModal;
    const largeImageURL = this.state.largeImageURL;
    return (
      <ul className={style.gallery}>
        {loader && <Loader />}
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={this.toggleModal}
          />
        ))}
        {button && (
          <div>
            <Button onClick={this.onLoad} />
          </div>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={''} />
          </Modal>
        )}
      </ul>
    );
  }
}

export default ImageGallery;
