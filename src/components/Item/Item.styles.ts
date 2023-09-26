/**
 * Imports styled
 */
import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => {
  return {
    borderRadius: "15px",
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
    marginBottom: 50,
    backgroundColor: "#2c8bdc4a",

    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      width: "89%",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      borderRadius: "25px",
      marginLeft: 40,
      marginBottom: 5,
      width: "100%",
      // marginLeft: 13,
      marginTop: 10,
    },
  };
});

export const Image = styled("img")(({ theme }) => {
  return {
    width: 300,
    transition: "transform 0.3s ease-in",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("md")]: {},
  };
});
export const HeartButton = styled("button")(({ theme }) => {
  return {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {},
  };
});

export const Descriptions = styled("div")({
  marginTop: 20,
  textAlign: "center",
});

export const AddToCartButton = styled("button")(({ theme }) => {
  return {
    backgroundColor: "transparent",
    border: "2px solid rgb(19, 19, 19)",
    minWidth: "100px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "rgb(19, 19, 19)",
      color: "white",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
    [theme.breakpoints.down("md")]: {},
  };
});

export const ProductName = styled("p")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const ProductType = styled("b")({
  marginTop: 10,
  // whiteSpace: "nowrap",
});
