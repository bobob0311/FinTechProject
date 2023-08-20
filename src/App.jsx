import React, { useState } from 'react';

//import './App.css'
import Header from './Header';
import Input from './Input'
import Clicker from './Clicker';

function App() {
  const [number, setNumber] = useState("");

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);
  };

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <Header />
      <hr />
      <Input onNumberChange={handleNumberChange} onSliderChange={handleSliderChange} />

      <Clicker input={number} value={sliderValue} />
    </>
  );
}

export default App
