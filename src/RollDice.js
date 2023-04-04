import React, {useState} from "react";
import Die from "./Die";

const RollDice = () => {

    const diceValues = ['one', 'two', 'three', 'four', 'five', 'six'] 
    const randomNumber = () => {
        return Math.floor(Math.random()*6)
    }
    const [dieOne, setDieOne] = useState(diceValues[randomNumber()])
    const [dieTwo, setDieTwo] = useState(diceValues[randomNumber()])
    const [isRolling, setIsRolling] = useState(false)
    
    const roll = () => {
        setIsRolling(true)
        setDieOne(diceValues[randomNumber()])
        setDieTwo(diceValues[randomNumber()])
        setTimeout(() => {
            setIsRolling(false)
        }, 1000)
    }

    
    return (
        <div className="roll-dice-div">
            <div className="dice-div">
                <Die face={dieOne} rolling={isRolling}/>
                <Die face={dieTwo} rolling={isRolling}/>
            </div>
            <div className="button-div">
                <button onClick={roll} disabled={isRolling}>
                    {isRolling ? "Rolling..." : "Roll dice!"}
                </button>
            </div>
            
        </div>
    )
}

export default RollDice