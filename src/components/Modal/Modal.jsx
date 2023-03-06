import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

 class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const instance = basicLightbox.create(
    <img src="assets/images/image.png" width="800" height="600"/>
  )

    return instance.show() 
  }
}

export default Modal

