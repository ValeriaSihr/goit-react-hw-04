import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <div>
        <button onClick={onClose}>Close</button>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
