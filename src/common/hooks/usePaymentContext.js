import { PaymentContext } from "common/context/Payment";
import { useContext } from "react";

export const usePaymentContext = () => {
  const { typePayment, payment, setPayment } = useContext(PaymentContext);

  const toChangeFormPayment = (id) => {
    const prevPayment = typePayment.find((payment) => payment.id === id);

    setPayment(prevPayment);
  };

  return { typePayment, toChangeFormPayment, payment };
};
