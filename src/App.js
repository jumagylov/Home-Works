import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./Layout/Header";
import Cart from './components/Card/Cart'
function App() {
  return (
    <Fragment>
     <Cart />
      <Header />
    <main>
      <Meals />
    </main>

    </Fragment>
  );
}

export default App;
