import { styled } from "@mui/system";

export const ModalContainer = styled("div")({
  position: "fixed",
  top: 0,
  right: 10,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  height: "10vh",
  zIndex: 9999,
  padding: 10,
  borderRadius: 5,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

export const ModalText = styled("p")({
  backgroundColor: "rgb(243, 0, 0)",
  padding: 20,
  fontSize: 16,
  borderRadius: 5,
  color: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});
