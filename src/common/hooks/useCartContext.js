import { CartContext } from "common/context/Cart";
import { useContext, useEffect } from "react";
import { usePaymentContext } from "./usePaymentContext";
import { UserContext } from "common/context/User";

export const useCartContext = () => {
  const {
    cart,
    setCart,
    amountProduct,
    setAmountProduct,
    valueTotalCart,
    setValueTotalCart,
  } = useContext(CartContext);

  const { payment } = usePaymentContext();

  const { setBalance } = useContext(UserContext);

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

  const makeBuy = () => {
    setCart([]);
    setBalance((prevBalance) => prevBalance - valueTotalCart);
  };

  useEffect(() => {
    const { total, amount } = cart.reduce(
      (count, product) => ({
        amount: count.amount + product.unidade,
        total: count.total + product.valor * product.unidade,
      }),
      {
        amount: 0,
        total: 0,
      }
    );
    setAmountProduct(amount);
    setValueTotalCart(Number(total * payment.juros));
  }, [cart, setAmountProduct, setValueTotalCart, payment]);

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
    amountProduct,
    valueTotalCart,
    makeBuy,
  };
};
