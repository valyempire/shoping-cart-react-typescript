/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import { ContextValueInterface, ShopContext } from "../../context/shop-context";
import { ProductProps } from "./Item.types";
import {
  Container,
  Image,
  Descriptions,
  AddToCartButton,
  ProductName,
  ProductType,
  HeartButton,
} from "./Item.styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { PopupMessage } from "../PopupMessage/PopupMessage";

export const Item: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { addToCart, cartItems, addToWishlist, removeFromWishlist } = context;
  const cartItemCount = cartItems[product.id];
  const [isHeartPressed, setIsHeartPressed] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [showWishlistMessage, setShowWishlistMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const addWishWithMessage = (itemId: number) => {
    setShowWishlistMessage(true);

    setTimeout(() => {
      setShowWishlistMessage(false);
    }, 2000);

    addToWishlist(itemId);
  };

  const toggleHeart = () => {
    if (!isHeartPressed) {
      setIsHeartPressed(true);
      addWishWithMessage(product.id);
      setShowWishlistMessage(true);
    } else {
      setIsHeartPressed(false);
      removeFromWishlist(product.id);
      setShowDeleteMessage(true);
      setTimeout(() => {
        setShowDeleteMessage(false);
      }, 2000);
    }
  };

  const addToCartWithMessage = (itemId: number) => {
    setShowCartMessage(true);

    setTimeout(() => {
      setShowCartMessage(false);
    }, 2000);

    addToCart(itemId);
  };

  return (
    <Container className="product">
      <Link to={`/product/${product.id}`} key={product.id}>
        <Image src={product.productImage} />
      </Link>
      <Descriptions className="description">
        <ProductName className="product-name">
          <b>{product.productName}</b>
          <ProductType className="product-type">{product.type}</ProductType>
        </ProductName>
        <p style={{ textDecoration: "line-through" }}>${product.discount}</p>
        <p> ${product.price}</p>
      </Descriptions>
      <div style={{ display: "flex", alignItems: "center", gap: "160px" }}>
        <AddToCartButton
          className="addToCartBttn"
          onClick={() => addToCartWithMessage(product.id)}
        >
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </AddToCartButton>
        <HeartButton onClick={toggleHeart}>
          <FontAwesomeIcon
            icon={isHeartPressed ? faSolidHeart : faRegularHeart}
            size="2xl"
            style={{ color: "#ff0000" }}
          />
        </HeartButton>
      </div>
      {showCartMessage && (
        <PopupMessage
          showMessage={showCartMessage}
          messageText="Product added to cart!"
        />
      )}
      {showWishlistMessage && (
        <PopupMessage
          showMessage={showWishlistMessage}
          messageText="Product added to wishlist!"
        />
      )}
      {showDeleteMessage && (
        <PopupMessage
          showMessage={showDeleteMessage}
          messageText="Product was deleted!"
        />
      )}
    </Container>
  );
};
