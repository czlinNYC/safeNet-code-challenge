import {useState, useEffect} from 'react';
import './index.css';
import Button from './components/Button';
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
  useEffect(()=>{
    console.log(output);
  })


  return (
    <div className="app-container">
      <div id="calculator-body">
        <div id="keypad">
          <Button value={"9"}/>
          <Button value={"8"}/>
          <Button value={"7"}/>
          <Button value={"6"}/>
          <Button value={"5"}/>
          <Button value={"4"}/>
          <Button value={"3"}/>
          <Button value={"2"}/>
          <Button value={"1"}/>
          <div className="calculator-button"></div>
          <Button value={"0"}/>
          <div className="calculator-button"></div>
        </div>
          <input id="input-bar" value={inputBar}onChange={(e)=>setInputBar(e.target.value)}></input>
        <div className="command-tray">
          <Command cap="Submit" 
            drawer={drawer} 
            code={inputBar} 
            liftOutput={setOutput}
            setDrawer={setDrawer}/>
          <div className="command-button" cap="Clear" />
        </div>

        <div id="output">{output}
        </div>

      </div>
      
    </div>
  );
}

export default App;

