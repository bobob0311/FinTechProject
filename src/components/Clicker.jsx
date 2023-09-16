import { useState, useEffect } from "react";
import Show from './Show';

export default function Clicker({ input, value, firstItem, secondItem }) {

    const [item, setItem] = useState([]);
    const [showClick, setShowClick] = useState(false);

    // 고객이 넣을금액
    const [amount, setAmount] = useState(null);

    const handleButtonClick = () => {
        setShowClick(true);
        setAmount(input);
        setItem(firstItem.filter((firstItem) => firstItem.depositPeriod === value + "개월"));
    };

    console.log(item);



    return (
        <div>
            <p>밑에 버튼을 누르면 이제 우대조건 등이 나옴</p>
            <button onClick={handleButtonClick}>Click</button>
            {showClick && (
                <Show input={amount} firstItem={item} secondItem={secondItem} />
            )}
        </div>
    );
}