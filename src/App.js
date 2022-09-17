import React from 'react';
import './App.css';
import TipCalculator from './Component/TipCalculator'
import GreetMachine from './Component/GreetMachine';
import GreetMachineV2 from './Component/GreetMachineV2';

function App() {

  return (
    <div className="App">
      <TipCalculator />
      <hr/>
      <GreetMachine />
      <hr/>
      <GreetMachineV2 />
    </div>
  );
}

export default App;
