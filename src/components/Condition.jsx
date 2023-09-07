import './Box.css'
import React, { useState, useEffect } from "react";
import Add from "../utill/Add";
import Subtract from "../utill/Subtract";

export default function Condition({ name, data, nowdata, onDataChange }) {
    const [selectedConditions, setSelectedConditions] = useState([]);

    const handleAddCondition = (conditionToAdd) => {
        const updatedData = Add({ firstData: nowdata, newData: conditionToAdd });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        onDataChange(sortedData); // 상위 컴포넌트의 상태 업데이트
        setSelectedConditions([...selectedConditions, conditionToAdd]);
    };

    const handleRemoveCondition = (conditionToRemove) => {
        const updatedData = Subtract({ firstData: nowdata, newData: conditionToRemove });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        onDataChange(sortedData); // 상위 컴포넌트의 상태 업데이트
        setSelectedConditions(selectedConditions.filter(condition => condition !== conditionToRemove));
    };

    useEffect(() => {
        onDataChange(nowdata); // 초기 상태 설정
    }, [onDataChange, nowdata]);

    const boxClassName = (conditionData) => {
        return selectedConditions.includes(conditionData) ? "box selected" : "box";
    }

    return (
        <span className={boxClassName(data)} onClick={() => selectedConditions.includes(data) ? handleRemoveCondition(data) : handleAddCondition(data)}>
            {name}
        </span>
    )
}
