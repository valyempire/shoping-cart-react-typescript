import React, { useContext } from "react";

import { ContextValueInterface, ShopContext } from "../../context/shop-context";
import {
  NotificationBox,
  NotificationPaper,
  NotificationTypography,
} from "./NotificationPopup.styles";

export const NotificationPopup: React.FC<{ message: string }> = ({
  message,
}) => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { showMessage } = context;

  return (
    <NotificationBox showMessage={showMessage}>
      <NotificationPaper>
        <NotificationTypography variant="body1">
          {message}
        </NotificationTypography>
      </NotificationPaper>
    </NotificationBox>
  );
};
