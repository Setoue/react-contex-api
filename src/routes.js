import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import UserProvider from "common/context/User";

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
          <Route path="/feira">
            <Feira />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;
