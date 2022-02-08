import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Store from "./components/Tabs/Store";
import { Fragment, useState } from "react";
import HomePage from "./components/Tabs/Home";
import About from "./components/Tabs/About";
import CartList from "./components/Cart/Cart";
import CartContext from "./components/StoreContext/CartContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const style = {
    'color': 'white',
    'backgroundColor': '#383e3e',
    'borderRadius': '5px',
    'border': 'none',
    'height': '34px',
    'width': '244px',
    'cursor': 'pointer',
    'alignItem': 'center',
    'marginLeft': '2%',
    'marginTop': '5%'
  }

  const[cartItems, setCartItems] = useState(false);
  const CartItems = () =>{
    setCartItems(true);
  }
  const cartItemsClose = () =>{
    setCartItems(false)
  }
  return (<Fragment>
    
    <CartContext>
    <Router>
      <Header showCartItem={CartItems}/>
      {cartItems && <CartList Close = {cartItemsClose}/>}
      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
      </Routes>
    </Router> 
      <button style={style}>See The Cart</button>
      <Footer/>
      </CartContext>
      </Fragment>
  );
}

export default App;
