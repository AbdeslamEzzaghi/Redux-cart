import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);
  return (
    <Layout>
      {numberOfItems !== 0 && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
