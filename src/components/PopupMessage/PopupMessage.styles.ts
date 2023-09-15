import { styled } from "@mui/system";

export const Container = styled("div")({
  position: "fixed",
  top: 0,
  right: 10,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  height: "10vh",
  zIndex: 9999,
  padding: 20,
  borderRadius: 5,
  backgroundColor: "#DC143C",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  marginBottom: 10,
  marginTop: 10,
});

export const Text = styled("p")({
  padding: 20,
  fontSize: 16,
  borderRadius: 5,
  color: "white",
  position: "relative",
  top: 30,
});
