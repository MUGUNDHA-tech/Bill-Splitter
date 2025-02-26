import React, { useState } from "react";
import "./App.css";

const BillSplitter = ({ onBack }) => {
  const [billAmount, setBillAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [eachPersonPays, setEachPersonPays] = useState(0);

  const handleCalculate = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(tipAmount) || 0;
    const people = parseInt(numPeople) || 1;

    if (people <= 0) return;

    const total = bill + tip;
    const perPerson = total / people;

    setTotalBill(total.toFixed(2));
    setEachPersonPays(perPerson.toFixed(2));
  };

  const handleReset = () => {
    setBillAmount("");
    setTipAmount("");
    setNumPeople("");
    setTotalBill(0);
    setEachPersonPays(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Bill Splitter</h2>

        <label>Bill Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter bill amount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />

        <label>Tip Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter tip amount"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
        />

        <label>Number of People</label>
        <input
          type="number"
          placeholder="Enter number of people"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        />

        <button onClick={handleCalculate}>Generate Bill</button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>

        <div className="result">
          <p>Total Bill: ₹{totalBill}</p>
          <p>Each Person Pays: ₹{eachPersonPays}</p>
        </div>

        <button className="back" onClick={onBack}>
          Back to Start
        </button>
      </div>
    </div>
  );
};

const StartPage = ({ onStart }) => {
  return (
    <div className="start-container">
      <button className="start-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
};

const App = () => {
  const [showBillSplitter, setShowBillSplitter] = useState(false);

  return (
    <div>
      {showBillSplitter ? (
        <BillSplitter onBack={() => setShowBillSplitter(false)} />
      ) : (
        <StartPage onStart={() => setShowBillSplitter(true)} />
      )}
    </div>
  );
};

export default App;
