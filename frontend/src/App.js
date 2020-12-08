import {useState} from 'react';
import './index.css';

import Command from './components/Command';

const App = () => {
  const [drawer, setDrawer] = useState({
    "1": 10,
    "5": 10,
    "10": 10,
    "20": 10,
    "50": 10,
    "100": 10
    })
  const [inputBar, setInputBar] = useState("")
  const [output, setOutput] = useState("")

  const clear = () => {
    setOutput("");
  }

  return (
    <div className="app-container">
      <div id="calculator-body">

          <input id="input-bar" value={inputBar}onChange={(e)=>setInputBar(e.target.value)}></input>
        <div className="command-tray">
          <Command cap="Submit" 
            drawer={drawer} 
            code={inputBar} 
            liftOutput={setOutput}
            setDrawer={setDrawer}/>
          <div className="command-button" onClick={()=>clear()}>Clear</div>
        </div>

        <div id="output">{output}
        </div>

      </div>
      
    </div>
  );
}

export default App;

