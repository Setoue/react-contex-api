import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useContext, useMemo, useState } from "react";
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";
import { useCartContext } from "common/hooks/useCartContext";
import Produto from "components/Produto";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { usePaymentContext } from "common/hooks/usePaymentContext";
import { UserContext } from "common/context/User";

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart, valueTotalCart, makeBuy } = useCartContext();
  const history = useHistory();
  const { typePayment, payment, toChangeFormPayment } = usePaymentContext();
  const { balance = 0 } = useContext(UserContext);
  const balanceTotal = useMemo(
    () => balance - valueTotalCart,
    [balance, valueTotalCart]
  );
  return (
    <Container>
      <Voltar
        onClick={() => {
          history.goBack();
        }}
      />{" "}
      <h2>Carrinho</h2>
      {cart.map((product) => (
        <Produto {...product} key={product.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento</InputLabel>
        <Select
          value={payment.id}
          onChange={(e) => toChangeFormPayment(e.target.value)}
        >
          {typePayment.map((type) => {
            return (
              <MenuItem value={type.id} key={type.id}>
                {type.nome}
              </MenuItem>
            );
          })}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valueTotalCart.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(balance).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {balanceTotal.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        disabled={balanceTotal < 0 || cart.length === 0}
        onClick={() => {
          setOpenSnackbar(true);
          makeBuy();
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
