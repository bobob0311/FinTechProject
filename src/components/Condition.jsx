import './Box.css'
import React, { useState, useEffect } from "react";
import Add from "../utill/Add";
import Subtract from "../utill/Subtract";

export default function Condition({ name, data, what, nowdata, onDataChange }) {

    const filteredObjects = data.filter((data) => data.preferential_condition === what)


    const [selectedConditions, setSelectedConditions] = useState([]);

    const handleAddCondition = (conditionToAdd) => {
        const updatedData = Add({ firstData: nowdata, newData: conditionToAdd });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        onDataChange(sortedData);
        setSelectedConditions([...selectedConditions, conditionToAdd]);
    };

    const handleRemoveCondition = (conditionToRemove) => {
        const updatedData = Subtract({ firstData: nowdata, newData: conditionToRemove });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        onDataChange(sortedData);
        setSelectedConditions(selectedConditions.filter(condition => condition !== conditionToRemove));
    };

    useEffect(() => {
        onDataChange(nowdata);
    }, [onDataChange, nowdata]);

    const boxClassName = (conditionData) => {
        return selectedConditions.includes(conditionData) ? "box selected" : "box";
    }

    return (
        <span className={boxClassName(filteredObjects)} onClick={() => selectedConditions.includes(filteredObjects) ? handleRemoveCondition(filteredObjects) : handleAddCondition(filteredObjects)}>
            {name}
        </span>
    )
}
