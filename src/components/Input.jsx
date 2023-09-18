import { useState } from "react";

// 사용자가 기한과 금액을 입력할 수 있는 형식을 만들고 이를 상위 컴포넌트에 전달하도록 생성

export default function Input({ onNumberChange, onSliderChange }) {

    const [number, setNumber] = useState("");
    const [sliderValue, setSliderValue] = useState(0);

    const handleNumberChange = (event) => {
        const newNumber = parseFloat(event.target.value);
        setNumber(newNumber);
        onNumberChange(newNumber);
    };

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        onSliderChange(newValue);
    };

    let message = "100만원에서 10억 사이의 숫자를 입력해주세요"

    if (number > 1000000000) {
        message = "10억보다 작게 설정해주세요";
    } else if (number < 1000000) {
        message = "100만원보다 크게 설정해주세요";
    } else if (number > 1000000 && number < 1000000000) {
        message = "Good";
    }

    return (
        <>

            <div>
                <h3>예치 금액</h3>
                <input type="number" placeholder={"금액을 입력하세요"} value={number} onChange={handleNumberChange} /> 원
            </div>

            <span>{message}</span>


            <div>
                <h3>예치기한(개월)</h3>
                <input
                    type="range"
                    min="0"
                    max="18"
                    step="6"
                    list="markers"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />

                <datalist id="markers">
                    <option value="0">0</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </datalist>

                <h4>{sliderValue} 개월</h4>
            </div>
        </>
    );
}