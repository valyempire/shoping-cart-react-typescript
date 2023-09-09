import "./Modal.css";

interface ModalProps {
  showMessage: boolean;
  messageText: string; // Adăugăm prop pentru textul mesajului
}

export const Modal: React.FC<ModalProps> = ({ showMessage, messageText }) => {
  // return showMessage ? (
  //   <div className="modal">
  //     <p>Product was added</p>
  //   </div>
  // ) : null;
  return showMessage ? (
    <div className="modal">
      <p>{messageText}</p>
    </div>
  ) : null;
};
