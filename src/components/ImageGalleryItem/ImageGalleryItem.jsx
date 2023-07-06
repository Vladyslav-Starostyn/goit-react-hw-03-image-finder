import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  GalleryItemStyled,
  GalleryImgStyled,
} from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalKeydown);
  }

  onModalKeydown = event => {
    if (this.state.isModalOpen) {
      if (event.key === 'Escape') {
        this.toggleModal();
      }
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <GalleryItemStyled>
        <GalleryImgStyled
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImg={largeImageURL}
            about={tags}
            onModalClose={this.onBackdropClick}
          />
        )}
      </GalleryItemStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
