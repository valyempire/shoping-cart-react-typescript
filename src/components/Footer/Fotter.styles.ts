/**
 * Import styled
 */
import { styled } from "@mui/system";

/**
 * Stiled the FooterContainer
 */
export const FooterContainer = styled("footer")(({ theme }) => {
  return {
    textAlign: "center",
    width: "100%",
    backgroundColor: "#4A55A2",
    color: "white",
    padding: "20px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
    },
  };
});
/**
 * Stiled the SocialWrapper
 */
export const SocialWrapper = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4A55A2",
    color: "white",
    // padding: 7,
    padding: "10px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };
});

export const ContainerParagraph = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };
});

/**
 * Stiled the SocialParagraph
 */
export const SocialParagraph = styled("p")(({ theme }) => {
  return {
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginBottom: 10,
    },
  };
});

/**
 * Stiled the IconLink
 */
export const IconLink = styled("a")(() => {
  return {
    marginLeft: 20,
    marginRight: 20,
    color: "white",
    "&:hover": {
      cursor: "pointer",
      color: "#d7cdc080",
    },
  };
});

/**
 * Stiled the RowWrapper
 */
export const RowWrapper = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#4a55a2",
    color: "white",
  };
});

/**
 * Stiled the ColumnWrapper
 */
export const ColumnWrapper = styled("div")(({ theme }) => {
  return {
    margin: "0 20px",
    width: 200,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});

/**
 * Stiled the ColumnHeading
 */
export const ColumnHeading = styled("p")(() => {
  return {
    fontWeight: "bold",
    marginBottom: 10,
    position: "relative",
    display: "inline-block",
    "&:hover": {
      cursor: "pointer",
      color: "#d7cdc080",
    },
  };
});

/**
 * Stiled the RightsWrapper
 */
export const RightsWrapper = styled("div")(() => {
  return {
    backgroundColor: "#4A55A2",
    color: "white",
    fontSize: 17,
    padding: 16,
  };
});

/**
 * Stiled the Link
 */
export const Link = styled("a")(() => {
  return {
    marginLeft: 5,
    color: "#ffffff",
    textDecoration: "inherit",
    "&:hover": {
      cursor: "pointer",
      color: "#d7cdc080",
    },
  };
});

/**
 * Stiled the ContactInfo
 */
export const ContactInfo = styled("p")(() => {
  return {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  };
});

/**
 * Stiled the IconWrapper
 */
export const IconWrapper = styled("span")(() => {
  return {
    marginLeft: 5,
    "&:hover": {
      cursor: "pointer",
      color: "#d7cdc080",
    },
  };
});

/**
 * Stiled the Underline
 */
export const Underline = styled("span")(() => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "50%",
    height: 1,
    backgroundColor: "white",
  };
});

export const Paragraph = styled("p")(() => {
  return {
    "&:hover": {
      cursor: "pointer",
      color: "#d7cdc080",
    },
  };
});
