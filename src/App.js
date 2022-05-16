import {  useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./Layout/Header";
import Cart from './components/Card/Cart'
import CartProvaider from "./components/store/CartProvaider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvaider>
    {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
    <main>
      <Meals />
    </main>

    </CartProvaider>
  );
}

export default App;
