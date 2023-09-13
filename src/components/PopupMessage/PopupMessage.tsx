import { Container, Text } from "./PopupMessage.styles";
("./Modal.styles.ts");

import { PopupMessageProps } from "./PopupMessage.types";

export const PopupMessage: React.FC<PopupMessageProps> = ({
  showMessage,
  messageText,
}) => {
  return showMessage ? (
    <Container>
      <Text>{messageText}</Text>
    </Container>
  ) : null;
};
