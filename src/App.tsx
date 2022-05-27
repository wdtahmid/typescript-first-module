import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const multiply = (firstNumber: number, secondNumber: number): string => {
    const result = firstNumber * secondNumber;
    return result
  }

  console.log(multiply(10, 10));
  return (
    <div className="App">

    </div>
  );
}

export default App;
