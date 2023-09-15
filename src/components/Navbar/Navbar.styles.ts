import { NavLink } from "react-router-dom";

/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports type
 */
import { CustomNavLinkProps } from "./NavBar.types";

/**
 * Styles the Container
 */
export const Container = styled("nav")(({ theme }) => {
  return {
    backgroundColor: "#4A55A2",
    // height: '8vh',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    fontSize: 23,
    color: "#000000",
    margin: "-8px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "auto",
      // marginBottom: -10,
      width: "53vh",
      marginBottom: 0,
    },
  };
});

/**
 * Styles the Container Wrapper
 */
export const ContainerWrapper = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    marginRight: "20px",
  };
});

/**
 * Styles the Container Paragraph
 */
export const ContainerParagraph = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 1,
    cursor: "pointer",
    margin: 0,
    padding: 10,
  };
});

/**
 * Styles the Paragraph
 */
export const Paragraph = styled("p")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    paddingLeft: 22,
    paddingTop: 10,
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  };
});

/**
 * Styles the Container Links
 */
export const ContainerLinks = styled("div")(({ theme }) => {
  return {
    paddingRight: 36,
    display: "flex",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 44,
    },
  };
});

/**
 * Styles the Custom NavLink
 */
export const CustomNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<CustomNavLinkProps>(({ isActive }) => {
  return {
    textDecoration: "none",
    border: "4px solid transparent",
    display: "inline-block",
    verticalAlign: "top",
    textAlign: "center",
    fontSize: 30,
    position: "relative",
    color: "#fff",
    "&::after": {
      width: "0%",
      height: 4,
      display: "block",
      backgroundColor: "#ffff",
      content: '""',
      position: "absolute",
      top: 34,
      left: "50%",
      transition:
        "left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    "&:hover": {
      color: "#ffff",
    },
    "&:hover::after": {
      width: "100%",
      top: 34,
      left: "0",
      color: "#000000",
    },
    ...(isActive && {
      color: "#ffff",
      "&::after": {
        width: "100%",
        top: 34,
        left: "0",
      },
    }),
  };
});

/**
 * Styles the Mobile Menu
 */
export const MobileMenu = styled("div", {
  shouldForwardProp: (propName) => propName !== "isOpen",
})<CustomNavLinkProps>(({ theme, isOpen }) => {
  return {
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  };
});

/**
 * Styles the Mobile NavLink
 */
export const MobileNavLink = styled(NavLink)(({ theme }) => {
  return {
    textDecoration: "none",
    fontSize: 30,
    color: "#606C5D",
    "&:hover": {
      color: "#F7E6C4",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  };
});

export const CustomLogo = styled("img")(() => {
  return {
    width: 50,
    height: 50,
    borderRadius: "38%",
    marginLeft: 30,
    marginTop: 4,
  };
});

export const WishlistContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
});

export const WishlistCounter = styled("span")({
  marginLeft: "0px",
  fontSize: "12px",
  fontWeight: "bold",
  backgroundColor: "#ff0000",
  color: "#ffffff",
  borderRadius: "50%",
  padding: "2px 6px",
  position: "relative",
  top: "0px",
});
