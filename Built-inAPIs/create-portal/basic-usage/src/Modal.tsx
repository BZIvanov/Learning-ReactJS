import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <div style={modalStyles.backdrop}>
      <div style={modalStyles.modal}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")! // <- important
  );
};

export default Modal;

const modalStyles = {
  backdrop: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
};
