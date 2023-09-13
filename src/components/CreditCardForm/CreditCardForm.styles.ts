import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const PaymentFormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "400px",
  margin: "0 auto",
  padding: 22,
  borderRadius: 17,
  marginTop: 33,
  backgroundColor: "#c1c9e980",
  boxShadow: " 0px 3px 15px rgba(0, 0, 0, 0.2)",
  marginBottom: 20,
});

export const ExpirationCvcContainer = styled("div")({
  display: "flex",
  gap: "16px",
});

export const StyledCreditCardInput = styled(TextField)({
  width: "100%",
  backgroundColor: "white",
});

export const SubmitButton = styled(Button)({
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#1c2331",
  },
});
