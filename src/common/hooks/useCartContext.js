import { CartContext } from "common/context/Cart";
import { useContext, useEffect } from "react";

export const useCartContext = () => {
  const { cart, setCart, amountProduct, setAmountProduct } =
    useContext(CartContext);

  const changeAmount = (id, amount) => {
    return cart.map((item) => {
      if (item.id === id) item.unidade += amount;
      return item;
    });
  };

  const addProduct = (newProduct) => {
    const haveProduct = cart.some((item) => item.id === newProduct.id);

    if (!haveProduct) {
      newProduct.unidade = 1;
      return setCart((prevCart) => [...prevCart, newProduct]);
    }
    setCart(changeAmount(newProduct.id, 1));
  };

  const removeProduct = (id) => {
    const product = cart.find((item) => item.id === id);
    const haveProduct = product.unidade === 1;
    if (haveProduct) {
      return setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
    setCart(changeAmount(id, -1));
  };

  useEffect(() => {
    const amount = cart.reduce((count, product) => count + product.unidade, 0);
    setAmountProduct(amount);
  }, [cart, setAmountProduct]);

  return { cart, setCart, addProduct, removeProduct, amountProduct };
};
