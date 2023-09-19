import { useState, useEffect } from "react";
import Show from './Show';
import "./Clicker.css";

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
        <>
            <div className="clicker" onClick={handleButtonClick}>
                <p className="text">금융상품 검색</p>
            </div>


            <div className="clicker-container">

                {showClick && (
                    <Show input={amount} firstItem={item} secondItem={secondItem} />
                )}
            </div>
        </>
    );
}