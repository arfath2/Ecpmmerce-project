import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Music from "./components/Layout/Body/Music";
import { useState } from "react";
import HomePage from "./components/Tabs/Home";
import About from "./components/Tabs/About";
import Cart from "./components/Cart/Cart";
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
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

  ];

  const[cartItems, setCartItems] = useState(false);
  const [cart, setCart] = useState(cartElements)
  const CartItems = () =>{
    setCartItems(true);
  }
  const cartItemsClose = () =>{
    setCartItems(false)
  }
  return (
    <div>
      <Header showCartItem={CartItems}/>
      {cartItems && <Cart Close = {cartItemsClose}/>}
      <Routes>
        <Route exact path="/" element={<Music cart = {cart} setCart = {setCart} />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
      </Routes>
      <button style={style}>See The Cart</button>
      <Footer/>
    </div>
  );
}

export default App;
