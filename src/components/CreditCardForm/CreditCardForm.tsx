import React, { useState } from "react";

import {
  ExpirationCvcContainer,
  PaymentFormContainer,
  StyledCreditCardInput,
} from "./CreditCardForm.styles";

import { FormData } from "./CreditCardForm.types";

export const CreditCardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    ownerName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "ownerName") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      if (/^[0-9]*$/.test(value) || value === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <StyledCreditCardInput
        label="Card Number"
        variant="outlined"
        fullWidth
        type="text"
        inputProps={{
          maxLength: 16,
          inputMode: "numeric",
        }}
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleInputChange}
        required
      />
      <ExpirationCvcContainer>
        <StyledCreditCardInput
          label="Expiration Date"
          variant="outlined"
          type="text"
          inputProps={{
            maxLength: 5,
            inputMode: "numeric",
          }}
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleInputChange}
          required
        />
        <StyledCreditCardInput
          label="CVC"
          variant="outlined"
          type="text"
          inputProps={{
            maxLength: 3,
            inputMode: "numeric",
          }}
          name="cvc"
          value={formData.cvc}
          onChange={handleInputChange}
          required
        />
      </ExpirationCvcContainer>
      <StyledCreditCardInput
        label="Owner Name"
        variant="outlined"
        fullWidth
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleInputChange}
        required
      />
    </PaymentFormContainer>
  );
};
