import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { Cart } from "../../StoreContext/CartContext";


const Header = (props) => {
  const {cart} = useContext(Cart)
  return (
      <div className={classes.headBody}>
        <div className={classes.innerHeader}>
          <div className={classes.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={classes.navigation}>
          <a href="/homepage"><li>HOME</li></a>
            <Link to="/"><li>STORE</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <button className={classes.cartBtn} onClick={props.showCartItem}><li>Cart <span>{cart.length}</span></li></button>
          </ul>

        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;