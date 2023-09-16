import './Box.css'
import React, { useState, useEffect } from "react";
import Add from "../utill/Add";
import Subtract from "../utill/Subtract";

export default function Condition({ name, nowdata, preData, what, onDataChange }) {

    // 설정된 우대조건만 가져오는 변수
    const filteredObjects = preData.filter((preData) => preData.preferential_condition === what)

    // 선택된걸 배열에 저장할 변수
    const [toggle, setToggle] = useState(false);

    const handleAddCondition = (conditionToAdd) => {
        const updatedData = Add({ firstData: nowdata, newData: conditionToAdd });
        const sortedData = updatedData.sort((a, b) => b.ca_interest_rate - a.ca_interest_rate);
        onDataChange(sortedData);
        setToggle(true);
    };

    const handleRemoveCondition = (conditionToRemove) => {
        const updatedData = Subtract({ firstData: nowdata, newData: conditionToRemove });
        const sortedData = updatedData.sort((a, b) => b.ca_interest_rate - a.ca_interest_rate);
        onDataChange(sortedData);
        setToggle(false);
    };

    const boxClassName = (toggle) => {
        return toggle === true ? "box selected" : "box";
    }

    return (
        <span className={boxClassName(toggle)} onClick={() => toggle === true ? handleRemoveCondition(filteredObjects) : handleAddCondition(filteredObjects)}>
            {name}
        </span>
    )
}
