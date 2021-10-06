import { ModalContainer, ModalOverlay } from "./ResetModal.styled";
import reactDom from "react-dom";
export default function ResetModal({ open, children, onClose, onReset }) {
  if (!open) return null;

  return reactDom.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer className={`animate__animated animate__fadeIn`}>
        <button onClick={onClose}>Close Modal</button>
        {children}
        <button onClick={onReset}>Reset</button>
        <button onClick={onClose}>Cancel</button>
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
}
