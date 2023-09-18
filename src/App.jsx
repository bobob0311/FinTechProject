import React, { useState, useEffect } from 'react';


// Header,Input,Clicker 컴포넌트 불러와 사용
import Header from './Header';
import Input from './components/Input'
import Clicker from './components/Clicker';

// TestData
const first_item = [
  {
    id: 1,
    bank_name: "국민은행",   // 은행이름
    item_name: "정기예금", // 상품병
    depositPeriod: "12개월", //기한
    interest_rate: 0.3, //기본금리
    moneyGoe: 1000000, //최소한도
    moneyLoe: 5000000, //최대한도
    method: "비대면 오프라인",
    who: "누구나"
  },
  {
    id: 2,
    bank_name: "하하은행",   // 은행이름
    item_name: "하하하하예금", // 상품병
    depositPeriod: "12개월", //기한
    interest_rate: 0.4, //기본금리
    moneyGoe: 1000000, //최소한도
    moneyLoe: 5000000, //최대한도
    method: "비대면 오프라인",
    who: "누구나"
  },
];


const second_item = [
  {
    id: 1,
    preferential_condition: "재예치",   // 우대조건이름
    preferential_interest_rate: 0.01   // 우대이율
  },
  {
    id: 1,
    preferential_condition: "비대면가입",   // 우대조건이름
    preferential_interest_rate: 0.02   // 우대이율
  },
  {
    id: 1,
    preferential_condition: "카드샤용",   // 우대조건이름
    preferential_interest_rate: 0.03   // 우대이율
  },
  {
    id: 1,
    preferential_condition: "카드사용",   // 우대조건이름
    preferential_interest_rate: 0.04   // 우대이율
  },
  {
    id: 2,
    preferential_condition: "재예치",   // 우대조건이름
    preferential_interest_rate: 0.01   // 우대이율
  },
  {
    id: 2,
    preferential_condition: "비대면가입",   // 우대조건이름
    preferential_interest_rate: 0.02   // 우대이율
  },
  {
    id: 2,
    preferential_condition: "카드샤용",   // 우대조건이름
    preferential_interest_rate: 0.03   // 우대이율
  },
  {
    id: 2,
    preferential_condition: "카드사용",   // 우대조건이름
    preferential_interest_rate: 0.04   // 우대이율
  }

]



// 컴포넌트 사이에 전달을 위해서 useState를 사용 설정한 금액과 기한을 넘겨준다.
function App() {

  const [firstItem, setFirstItem] = useState(first_item);
  // useEffect(() => {
  //   fetch("/api/hello") // 첫번재 입력
  //     .then((res) => { return res.json(); })
  //     .then((data) => { setFirstItem(data); })
  // }, []);

  const [secondItem, setSecondItem] = useState(second_item);
  // useEffect(() => {
  //   fetch("/api/hellow") // 두번째 입력
  //     .then((res) => { return res.json(); })
  //     .then((data) => { setSecondItem(data); })
  // }, []);

  // 최대금액
  const [number, setNumber] = useState("");

  // 기한
  const [sliderValue, setSliderValue] = useState(0);

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);
  };


  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  console.log(firstItem);
  console.log(secondItem)



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
