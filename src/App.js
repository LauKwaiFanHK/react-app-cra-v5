import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State variable to get and set bill amount
  const [billAmount, setBillAmount] = useState(0);
  // State variable to get and set tip percentage
  const [percent, setPercent] = useState(0);
  // State variable to get and set tip amount after calculation
  const [tipAmount, setTipAmount] = useState(0);
  // State variable to get and set the total bill amount
  const [totalAmount, setTotalAmount] = useState(0);

  // Once user drag the slider, reset the tip percentage
  const updateTipPercent = (event) => {
    setPercent(event.target.value);
  };

  // Once user enter a bill amount, update the bill amount
  const updateBillAmount = (event) => {
    setBillAmount(event.target.value);
  }

  // Reset bill amount, tip percentage, tip amount and total bill amount back to zero
  const handleReset = () => {
    setBillAmount(0);
    setPercent(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  // Calculate the tip amount and the total bill amount
  useEffect(() => {
    setTipAmount((billAmount * percent / 100).toFixed(2));
    setTotalAmount((Number(billAmount) + Number(tipAmount)).toFixed(2));
  }, [tipAmount, billAmount, percent]);

  return (
    <div className="App">
      <form>
        <h1>Tip Calculator</h1>
        <div>
          <label htmlFor="billAmount">Bill amount:&nbsp;&nbsp;
            <input id="billAmount" type="number" placeholder="10.00" step="0.01" min="0" max="100000" value={billAmount} onInput={updateBillAmount} />
            &nbsp;EUR
          </label>
        </div>
        <div>
          <label htmlFor="tipPercentage">Tip percentage:&nbsp;&nbsp;
            <input id="tipPercentage" type="range" min="0" max="100" value={percent} onInput={updateTipPercent} />
            &nbsp;{percent} %
          </label>
        </div>
        <button onClick={handleReset}>Reset</button>
        <p>-------------------------------</p>
        <p>Tip amount: {tipAmount} EUR</p>
        <p>Total bill amount: {totalAmount} EUR</p>
      </form>
    </div>
  );
}

export default App;
