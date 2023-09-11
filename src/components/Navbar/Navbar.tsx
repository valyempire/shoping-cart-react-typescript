/* eslint-disable react-hooks/rules-of-hooks */
// import logo from "../../assets/logo/logo.png";
import { Heart, ShoppingCart, Storefront } from "phosphor-react";

import { useState } from "react";

/**
 * Imports Material UI components
 */
import { useMediaQuery } from "@mui/material";

import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

/**
 * Imports styles components
 */
import {
  Container,
  ContainerParagraph,
  Paragraph,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from "./Navbar.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/**
 * Displays the component
 */
export const NavBar: React.FC = () => {
  /**
   * Initializes mobile menu
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { getWishlistItemCount, getCartItemCount } = context;

  /**
   * Handles the mobile view
   */
  const isMobileView = useMediaQuery("(max-width: 600px)");

  /**
   * Handles the mobile menu state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handles the Nav content
   */
  const navbarContent = (
    <>
      <ContainerLinks>
        <CustomNavLink exact={true} to="/" activeStyle={{ color: "#ffff" }}>
          <Storefront size={32} />
        </CustomNavLink>
        <CustomNavLink exact to="/wishlist" activeStyle={{ color: "#ffff" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Heart size={32} />
            {getWishlistItemCount() > 0 && (
              <span
                style={{
                  marginLeft: "0px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  backgroundColor: "#ff0000",
                  color: "#ffffff",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  position: "relative",
                  top: "0px",
                }}
              >
                {getWishlistItemCount()}
              </span>
            )}
          </div>
        </CustomNavLink>
        <CustomNavLink exact to="/cart" activeStyle={{ color: "#ffff" }}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <ShoppingCart size={32} />
            {getCartItemCount() > 0 && (
              <span
                style={{
                  marginLeft: "0px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  backgroundColor: "#ff0000",
                  color: "#ffffff",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  position: "relative",
                  top: "0px",
                }}
              >
                {getCartItemCount()}
              </span>
            )}
          </div>
        </CustomNavLink>
      </ContainerLinks>
      <MobileMenu isOpen={isMobileMenuOpen} to={""}>
        <MobileNavLink
          exact={true}
          to="/"
          activeStyle={{ color: "#ffff" }}
          onClick={toggleMobileMenu}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/projects"
          activeStyle={{ color: "#ffff" }}
          onClick={toggleMobileMenu}
        >
          Projects
        </MobileNavLink>
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Link style={{ textDecoration: "none" }} to="/">
            <Paragraph>IT Shop</Paragraph>
            {/* <img src={logo} alt="" /> */}
          </Link>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
