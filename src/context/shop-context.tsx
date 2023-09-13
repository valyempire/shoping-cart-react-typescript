/* eslint-disable prefer-const */
import { ReactNode, createContext, useState } from "react";
import { PRODUCTS, ProductData } from "../utils/products";
import useLocalStorage from "use-local-storage";

export const ShopContext = createContext<ContextValueInterface | null>(null);

interface CartItemProps {
  [productId: string]: number;
}

interface WishlistItemProps {
  [productId: string]: boolean;
}

export interface ShopContextProps {
  children: ReactNode;
}

export interface ContextValueInterface {
  wishlist: WishlistItemProps;
  cartItems: CartItemProps;
  showMessage: boolean;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
  addToWishlist: (itemId: number) => void;
  removeFromWishlist: (itemId: number) => void;
  getWishlistItemCount: () => number;
  getCartItemCount: () => number;
  addToCartWithMessage: (itemId: number) => void;
}

const getDefaultCart = () => {
  let cart: CartItemProps = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};

export const ShopContextProvider: React.FC<ShopContextProps> = (props) => {
  const { children } = props;

  const [cartItems, setCartItems] = useLocalStorage<CartItemProps>(
    "cartItems",
    getDefaultCart()
  );

  const [wishlist, setWishlist] = useLocalStorage<WishlistItemProps>(
    "wishlist",
    {}
  );
  const [showMessage, setShowMessage] = useState(false);

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === Number(item)
        ) as ProductData;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  };

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => {
      if (prev) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
      return {};
    });
  };
  const addToCartWithMessage = (itemId: number) => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    addToCart(itemId);
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      if (prev) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return {};
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const addToWishlist = (itemId: number): void => {
    setWishlist((prev) => {
      if (prev) {
        return { ...prev, [itemId]: true };
      }
      return {};
    });
  };

  const removeFromWishlist = (itemId: number): void => {
    setWishlist((prev) => {
      if (prev) {
        const updatedWishlist = { ...prev };
        delete updatedWishlist[itemId];
        return updatedWishlist;
      }
      return {};
    });
  };

  const getWishlistItemCount = (): number => {
    let count = 0;
    for (const itemId in wishlist) {
      if (wishlist[itemId]) {
        count++;
      }
    }
    return count;
  };

  const getCartItemCount = (): number => {
    let count = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId]) {
        count++;
      }
    }
    return count;
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ContextValueInterface = {
    wishlist,
    cartItems,
    showMessage,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    removeFromWishlist,
    addToWishlist,
    getWishlistItemCount,
    getCartItemCount,
    addToCartWithMessage,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
