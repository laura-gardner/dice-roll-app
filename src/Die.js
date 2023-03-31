import React from "react";

const Die = (props) => {
    let dieClass = ""
    if (props.value === 1) {
        dieClass = "fas fa-dice-one fa-8x"
    } else if (props.value === 2) {
        dieClass = "fas fa-dice-two fa-8x"
    } else if (props.value === 3) {
        dieClass = "fas fa-dice-three fa-8x"
    } else if (props.value === 4) {
        dieClass = "fas fa-dice-four fa-8x"
    } else if (props.value === 5) {
        dieClass = "fas fa-dice-five fa-8x"
    } else {
        dieClass = "fas fa-dice-six fa-8x"
    }
    return (
        <i className={`die ${dieClass}`}></i>
    )
}

export default Die