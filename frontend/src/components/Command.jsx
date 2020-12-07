import {useState} from "react";
import {selectOperation, showDrawer} from './functions/register'

const Command = ({cap, drawer,code, liftOutput}) => {


    const handleClick = () => {
        let operation = code[0];
        let response =selectOperation(drawer, code);
        if (response === "Invalid Command") {
            liftOutput("Invalid Command");
        } else if (response === "insufficient funds") {
            liftOutput("insufficient funds");
        } else if (response && operation === 'W') {
            liftOutput("Success");
        } else if (response && operation === 'R') {
            liftOutput("Success");
        }
        console.log(response)
    }

    return <div className="command-button" onClick={handleClick}>
        {cap}
    </div>
}

export default Command;