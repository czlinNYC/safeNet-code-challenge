import {useState} from 'react';
import './index.css';
import Button from './components/Button';
import Command from './components/Command';

const App = () => {
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
          <input id="input-bar"></input>
        <div className="command-tray">
          <Command cap="Submit"/>
          <Command cap="Clear"/>
        </div>

        <div id="output">

        </div>

      </div>
      
    </div>
  );
}

export default App;

