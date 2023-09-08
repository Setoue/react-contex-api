import { createContext, useState } from "react";

import React from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amountProduct, setAmountProduct] = useState(0);
  return (
    <CartContext.Provider
      value={{ cart, setCart, amountProduct, setAmountProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
