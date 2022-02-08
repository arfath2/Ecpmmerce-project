import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from './Music.module.css';

const productsArr = [
    {
      album: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      album: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      album: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      album: "Album 4",
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

const Music = () => {
    return (
        <Fragment>
        <div className={classes.musicBody}>
            <h2>MUSIC</h2>
        </div>
        <section className={classes.musicSection}>
      {productsArr.map((items) => {
        return (

              <ul key={items.album} className={classes.musicContainer}>
                <h3>{items.album}</h3>
                <li className={classes.musicImage}>
                  <img src={items.imageUrl} alt='Music Pictures'/>
                </li>
                <li className={classes.musicDetail}>
                  <span>
                    {items.title} : 
                    ${items.price}
                  </span>
                  <button className={classes.musicBtn}>ADD TO CART</button>

                </li>
              </ul>

        );
      })}
    </section>
        </Fragment>

    )
}

export default Music;