import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: numberOfItems,
            total: numberOfItems * 6,
            price: 6
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
