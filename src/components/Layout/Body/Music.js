import React from "react";
import classes from './Music.module.css'
import MusicProducts from "./MusicProducts";
const Music = (props) => {
    return (

        <div className={classes.musicBody}>
            <h2>MUSIC</h2>
            <MusicProducts />
        </div>

    )
}

export default Music; 