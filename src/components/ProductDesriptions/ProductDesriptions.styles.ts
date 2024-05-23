import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Description = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

export const CustomImage = styled("img")(({ theme }) => ({
  width: 400,
  marginRight: 40,
  marginTop: 50,
  borderRadius: 10,
  transition: "transform 0.3s ease-in",
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
    borderRadius: 10,
  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    width: 230,
  },
}));

export const Paragraph = styled("p")(({ theme }) => ({
  width: 300,
  marginRight: -20,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    marginRight: 0,
    padding: 15,
  },
}));

export const ProductName = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const Price = styled("p")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
  margin: "10px 0",
}));

export const ContainerProduct = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "40%",
  marginTop: 20,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 0,
  },
}));

export const ContainerButtons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 10,
  marginTop: 20,

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 20,
  },
}));

export const CountHandler = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StylesButton = styled(Button)(() => ({
  backgroundColor: "#7493d0",
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "background-color 0.3s ease",
  height: 20,

  "&:hover": {
    backgroundColor: "#1c2331",
  },
}));

export const InputHandler = styled("input")(({ theme }) => ({
  width: 60,
  height: 20,
  textAlign: "center",
  fontWeight: "bolder",
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 11,

  [theme.breakpoints.down("sm")]: {
    width: "auto",
  },
}));

export const StylesParagraph = styled("p")(() => ({
  fontWeight: 600,
  marginBottom: 10,
}));

export const Title = styled("h2")(({ theme }) => ({
  marginTop: -80,

  [theme.breakpoints.down("sm")]: {
    marginTop: 30,
  },
}));

export const ProductDescriptionsTitle = styled("h1")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
}));
