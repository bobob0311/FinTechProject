import { useState } from "react";

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