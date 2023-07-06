import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from 'components/Modal/ModalStyled';

export const Modal = ({ largeImg, about, onModalClose }) => {
  return (
    <Overlay onClick={onModalClose}>
      <ModalStyled>
        <img src={largeImg} alt={about} />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
