import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";


const Header = (props) => {
 // const cartLength = props.cartNumber.length;
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
            <button className={classes.cartBtn} onClick={props.showCartItem}><li>Cart <span>3</span></li></button>
          </ul>

        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;