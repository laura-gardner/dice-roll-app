import React from "react";

const Die = (props) => {
    return (
        <i className={`die fas fa-dice-${props.face} fa-8x ${props.rolling && "rolling"}`}></i>
    )
}

export default Die