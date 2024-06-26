import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CartContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CheckoutButton = styled("button")({
  width: "150px",
  height: "50px",
  backgroundColor: "rgb(19, 19, 19)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  margin: "10px",
  cursor: "pointer",
});

export const CartMessage = styled("h1")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {},
  };
});

export const ContainerChechout = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "x-large",
    fontWeight: 600,
    color: "red",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {},
  };
});

export const Title = styled("h2")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

export const ContainerButton = styled("div")(({ theme }) => {
  return {
    display: "flex",
    gap: 30,
    border: "none",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("md")]: {},
  };
});

export const CustomButton = styled(Button)(() => ({
  backgroundColor: "#7493d0",
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
}));
