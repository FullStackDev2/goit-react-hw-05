import styles from "./Modal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    padding: 0,
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "hidden"
  },
};

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={styles.modal}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={styles.image}
          />

          <div className={styles.info}>
            <p><strong>Author:</strong> {image.user.name}</p>
            <p><strong>Likes:</strong> {image.likes}</p>
            {image.description && image.description.length <= 220 && (
  <p>{image.description}</p>
)}

          </div>
        </div>
      )}
    </Modal>
  );
}
