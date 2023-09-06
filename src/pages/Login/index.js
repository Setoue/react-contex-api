import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "common/context/User";

function Login() {
  const history = useHistory();
  return (
    <Container>
      <UserContext.Consumer>
        {({ name, setName, balance, setBalance }) => (
          <>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
              <InputLabel>Nome</InputLabel>
              <Input
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Saldo</InputLabel>
              <Input
                value={balance}
                onChange={(e) => {
                  setBalance(e.target.value);
                }}
                type="number"
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                history.push("/feira");
              }}
            >
              Avançar
            </Button>
          </>
        )}
      </UserContext.Consumer>
    </Container>
  );
}

export default Login;
