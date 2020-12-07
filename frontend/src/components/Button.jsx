import {React} from 'react';
import '../index.css';


const Button = ({value}) => {
    
    
    return <div className="calculator-button">{value ? value : "" }</div>
}

export default Button;