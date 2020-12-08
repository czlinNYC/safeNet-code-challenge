import {selectOperation, showDrawer} from './functions/register'

const Command = ({cap, drawer,code, liftOutput, setDrawer}) => {
    
    const parseDrawer = (response) => {
        let keys = Object.keys(response);
        keys = keys.map(key=> parseInt(key))
        keys.sort(function(a,b){return b - a});
        let parsed = "";
        for( let i = 0 ; i<keys.length;i++) {
            if(i === keys.length-1) {
                parsed = <div>{parsed}${keys[i]}- {response[keys[i]]}</div>                } 
            else {
                parsed = <div>{parsed}${keys[i]} - {response[keys[i]]}</div> 
            }
        }
        return parsed;
    }

    const handleClick = () => {
        let operation = code[0];
        if(operation === "Q") {
            window.close();
        }
        let response =selectOperation(drawer, code);
        if (response === "Invalid Command") {
            liftOutput("Invalid Command");
        } else if (response === "insufficient funds") {
            liftOutput("insufficient funds");
        } else if (response && operation === 'W') {
            liftOutput("Success");
            setDrawer(response);
        } else if (response && operation === 'R') {
            liftOutput("Success");
            setDrawer(response);
        } else if (response && operation === 'I') {
            let output =  parseDrawer(response);
            liftOutput(output); 
        } 
    }

    return <div className="command-button" onClick={handleClick}>
        {cap}
    </div>
}

export default Command;