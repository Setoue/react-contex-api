import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import UserProvider from "common/context/User";
import { CartProvider } from "common/context/Cart";
import { PaymentProvider } from "common/context/Payment";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CartProvider>
          <UserProvider>
            <PaymentProvider>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PaymentProvider>
          </UserProvider>
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
