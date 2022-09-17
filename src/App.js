import React from 'react';
import './App.css';
import TipCalculator from './Component/TipCalculator'
import GreetMachine from './Component/GreetMachine';

function App() {

  return (
    <div className="App">
      <TipCalculator />
      <hr/>
      <GreetMachine />
    </div>
  );
}

export default App;
