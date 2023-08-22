import React, { createContext, useEffect, useState } from "react";
import { popularProducts } from "../data";
import { auth } from "../components/Firebase/Firebase";
export const CartContext = createContext(null);
const ProductItems = () => {
  const cartItems = {};
  for (let i = 1; i < popularProducts.length + 1; i++) {
    cartItems[i] = 0;
  }
  return cartItems;
};
export const CartContextProvider = (props) => {
  const [cartState, setCartState] = useState(ProductItems());
  const [totalAmount, setTotalAmount] = useState(0);
  const [curProduct, setCurProduct] = useState({});
  const [username, setUsername] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        return;
      } else {
        setUsername("");
        return;
      }
    });
  }, [username]);
  function curProductHandler(items) {
    setCurProduct(items);
  }
  useEffect(() => {
    setTotalAmount(
      Object.values(cartState).reduce((acc, cur, index) => {
        return acc + cur * popularProducts[index].price;
      }, 0)
    );
  }, [cartState]);
  function addItemsToCart(id) {
    setCartState((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function removeItemsFromCart(id) {
    setCartState((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  return (
    <CartContext.Provider
      value={{
        cartState,
        addItemsToCart,
        removeItemsFromCart,
        totalAmount,
        curProduct,
        curProductHandler,
        username,
        setUsername,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
