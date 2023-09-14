import React, { useState, useEffect } from 'react';

// Header,Input,Clicker 컴포넌트 불러와 사용
import Header from './Header';
import Input from './components/Input'
import Clicker from './components/Clicker';



// 컴포넌트 사이에 전달을 위해서 useState를 사용 설정한 금액과 기한을 넘겨준다.
function App() {

  const [firstItem, setFirstItem] = useState([]);
  useEffect(() => {
    fetch("/api/hello") // 첫번재 입력
      .then((res) => { return res.json(); })
      .then((data) => { setFirstItem(data); })
  }, []);

  const [secondItem, setSecondItem] = useState([]);
  useEffect(() => {
    fetch("/api/hellow") // 두번째 입력
      .then((res) => { return res.json(); })
      .then((data) => { setSecondItem(data); })
  }, []);

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

      <Clicker input={number} value={sliderValue} firstItem={firstItem} secondItem={secondItem} />
    </>
  );
}

export default App
