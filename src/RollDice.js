import React, {useState} from "react";
import Die from "./Die";

const RollDice = () => {
    const randomNumber = () => {
        return Math.ceil(Math.random()*6)
    }
    const [dieOne, setDieOne] = useState(1)
    const [dieTwo, setDieTwo] = useState(1)
    const [isRolling, setIsRolling] = useState(false)
    
    const roll = () => {
        setDieOne(randomNumber())
        setDieTwo(randomNumber())
    }

    
    return (
        <div className="roll-dice-div">
            <div className="dice-div">
                <Die value={dieOne}/>
                <Die value={dieTwo}/>
            </div>
            <div className="button-div">
                <button onClick={roll}>Roll Dice!</button>
            </div>
            
        </div>
    )
}

export default RollDice