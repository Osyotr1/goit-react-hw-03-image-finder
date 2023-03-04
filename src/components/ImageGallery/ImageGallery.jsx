import React, { Component } from 'react';
import style from './ImageGallery.module.css';
import imageAPI from 'components/API/fetchImage';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageGallery extends Component {
  state = {
    hits: [],
    totalHits: '',
    button: false,
    page: 1,
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
      imageAPI
        .fetchImage(nextProp, page)
        .then(({ data }) =>
          this.setState(prevState => ({
            hits: [...prevState.hits, ...data.hits],
            totalHits: data.totalHits,
            button: true,
          }))
        )
        // .then(({ data }) => this.setState({ hits: data.hits, totalHits: data.totalHits, button: true }))
        .catch(error => console.log(error));
    }
  }

  render() {
    const images = this.state.hits;
    const button = this.state.button;
    return (
      <ul className={style.gallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
        {button && (
          <div>
            <Button onClick={this.onLoad} />
          </div>
        )}
      </ul>
    );
  }
}

export default ImageGallery;
