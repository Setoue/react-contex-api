import { createContext, useState } from "react";
import React from "react";

export const PaymentContext = createContext();
PaymentContext.displayName = "Payment";

export const PaymentProvider = ({ children }) => {
  const typePayment = [
    {
      nome: "Boleto",
      juros: 1,
      id: 1,
    },
    {
      nome: "Cartao de credito",
      juros: 1.3,
      id: 2,
    },
    {
      nome: "pix",
      juros: 1,
      id: 3,
    },
  ];
  const [payment, setPayment] = useState(typePayment[0]);

  return (
    <PaymentContext.Provider value={{ typePayment, payment, setPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};
