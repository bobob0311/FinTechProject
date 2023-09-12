import { useState } from "react";
import Show from './Show';

export default function Clicker({ input, value, firstItem, secondItem }) {
    const [showClick, setShowClick] = useState(false); // 항상 결과 보이도록 설정
    const [amount, setAmount] = useState(null);
    const [deadlines, setDeadlines] = useState(null);


    const handleButtonClick = () => {
        setShowClick(true)
        setAmount(input);
        setDeadlines(value)
    };


    return (
        <div>
            <p>밑에 버튼을 누르면 이제 우대조건 등이 나옴</p>
            <button onClick={handleButtonClick}>Click</button>
            {showClick && (
                <Show input={amount} deadline={deadlines} firstItem={firstItem} secondItem={secondItem} />
            )}
            <p>{deadlines}</p>
        </div>
    );
}