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



    return (
        <>
            <div>
                <div>숫자 입력</div>
                <input type="number" value={number} onChange={handleNumberChange} />

            </div>

            <div>
                <h2>기한 설정</h2>
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

                <p>선택한 값: {sliderValue}</p>

            </div>
        </>
    );
}