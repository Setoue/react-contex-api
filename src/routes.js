import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { useState } from "react";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";

const Router = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
            name={name}
            setName={setName}
            balance={balance}
            setBalance={setBalance}
          />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
