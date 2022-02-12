import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Store from "./components/Tabs/Store";
import { Fragment, useState, useEffect, useContext } from "react";
import HomePage from "./components/Tabs/Home";
import Contact from "./components/Tabs/Contact";
import About from "./components/Tabs/About";
import CartList from "./components/Cart/Cart";
import axios from "axios";
import { Cart } from "./components/StoreContext/CartContext";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Tabs/Login"

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(true);

  const style = {
    color: 'white',
    backgroundColor: '#383e3e',
    borderRadius: '5px',
    border: 'none',
    height: '34px',
    width: '244px',
    cursor: 'pointer',
    alignItem: 'center',
    marginLeft: '2%',
    marginTop: '5%'
  }

  const putRequestHandler = async(contact) =>{
    const response = await fetch("https://ecommerce-909b5-default-rtdb.firebaseio.com/contact.json", {
        method: 'POST',
        body: JSON.stringify(contact),
        headers:{
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data)
}

  const[cartItems, setCartItems] = useState(false);

  const {cart, setCart, userId, setUserId} = useContext(Cart)

  useEffect(()=> {
    if(localStorage.getItem('userId')){
      setUserId(localStorage.getItem('userId'))
    }
   },[])

  const CartItems = () =>{
    setCartItems(true);
    axios.get(`https://crudcrud.com/api/d073a8e6073b4b78a563e7c29dc1d02a/cart${userId}`)
      .then((response) => {
        console.log(`Axios2: ${response}`)
        console.log(`userId: ${userId}`)
        console.log(`Response Data ${response.data}`)
        response.data.map((item) =>{
          console.log(`Response Data before ${item}`)
          setCart((prevState) => ([
            ...prevState, item
          ]))
          console.log(`Response Data after ${item}`)
        })
      }).catch((err) => {
        console.log(`err: ${err}`)
      })
  }

  useEffect(()=> {
    if(localStorage.getItem('TokenId')){
      setIsloggedIn(true)
    }
   },[])

  const cartItemsClose = () =>{
    setCartItems(false)
  }
  return (<Fragment>
    
    <Router>
      <Header showCartItem={CartItems}/>
      {cartItems && <CartList Close = {cartItemsClose}/>}
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        {isLoggedIn && <Route exact path="/store" element={<Store />} />}
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/contact"
          element={<Contact putRequest={putRequestHandler} />}
        />
        <Route
          exact
          path="/login"
          element={<Login checkLogin={setIsloggedIn} />}
        />
        {!isLoggedIn && <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>}
      </Routes>
    </Router> 
      <button style={style}>See The Cart</button>
      <Footer/>
      </Fragment>
  );
}

export default App;
