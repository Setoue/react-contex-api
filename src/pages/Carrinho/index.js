import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useContext, useState } from "react";
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";
import { useCartContext } from "common/hooks/useCartContext";
import Produto from "components/Produto";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PaymentContext } from "common/context/Payment";

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart } = useCartContext();
  const history = useHistory();
  const { typePayment, payment, setPayment } = useContext(PaymentContext);
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
        <Select value={payment.id} onChange={(e) => setPayment(e.target.value)}>
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
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
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
