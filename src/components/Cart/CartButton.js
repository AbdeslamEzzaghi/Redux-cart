import classes from "./CartButton.module.css";

import { useSelector } from "react-redux";

const CartButton = (props) => {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
