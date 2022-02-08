import React from "react";
import Classes from "./Header.module.css";


const Header = () => {
  return (
      <div className={Classes.headBody}>
        <div className={Classes.innerHeader}>
          <div className={Classes.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={Classes.navigation}>
            <a href="#"><li>HOME</li></a>
            <a href="#"><li>STORE</li></a>
            <a href="#"><li>ABOUT</li></a>
            <button className={Classes.cartBtn}><li>Cart 0</li></button>
          </ul>

        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;