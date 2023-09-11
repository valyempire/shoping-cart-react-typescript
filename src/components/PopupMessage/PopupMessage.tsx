import { ModalContainer, ModalText } from "./PopupMessage.styles";
("./Modal.styles.ts");

import { PopupMessageProps } from "./PopupMessage.types";

export const PopupMessage: React.FC<PopupMessageProps> = ({
  showMessage,
  messageText,
}) => {
  return showMessage ? (
    <ModalContainer>
      <ModalText>{messageText}</ModalText>
    </ModalContainer>
  ) : null;
};
