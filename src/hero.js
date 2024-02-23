import React from "react";
import "./herocss.css"
function Hero(props){
    return(
        <div className={props.cName}>
            <img alt={props.heroalt} src={props.image}/>
            <h1>{props.heading}</h1>

        </div>
    )
}

export default Hero
