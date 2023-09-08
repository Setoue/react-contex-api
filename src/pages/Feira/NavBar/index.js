import { Nav } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useCartContext } from "common/hooks/useCartContext";

export default function NavBar() {
  const { amountProduct } = useCartContext();
  return (
    <Nav>
      <Logo />
      <IconButton disabled={amountProduct === 0}>
        <Badge color="primary" badgeContent={amountProduct}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
