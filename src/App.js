import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Store from "./components/Tabs/Store";
import { Fragment, useState } from "react";
import HomePage from "./components/Tabs/Home";
import Contact from "./components/Tabs/Contact";
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

  const putRequestHandler = async(contact) =>{
    const response = await fetch("https://ecommerce-909b5-default-rtdb.firebaseio.com/contact.json", {
        method: 'POST',
        body: JSON.stringify(contact),
        headers:{
            'Content-Type': 'application/json'
        }

    });
    const data = await response.json();
    console.log(data)

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
        <Route exact path="/contact" element={<Contact putRequest = {putRequestHandler}/>} />
      </Routes>
    </Router> 
      <button style={style}>See The Cart</button>
      <Footer/>
      </CartContext>
      </Fragment>
  );
}

export default App;
