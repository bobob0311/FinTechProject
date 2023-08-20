import { useState } from "react";
import './Box.css'
import Optimal from "./Timal";

import Add from "./Add"
import Subtract from "./Subtract"




const first_data = [
    {
        id: 1,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 2,
        num: 0.02,
        upperbound: 5000000
    },
    {
        id: 3,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 4,
        num: 0.02,
        upperbound: 5000000
    },
    {
        id: 5,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 6,
        num: 0.02,
        upperbound: 5000000
    }
];




const temp_data1 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];

const temp_data2 = [
    {
        id: 1,
        num2: 0.03
    },
    {
        id: 2,
        num2: 0.03
    }
];

const temp_data3 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];

const temp_data4 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];






export default function Show({ input, deadline }) {
    const a = first_data.map(data => ({ ...data, Calculation: data.num }))
    const nowdata = a.sort((a, b) => b.Calculation - a.Calculation);
    const [item, setItem] = useState(nowdata);
    const [selectedConditions, setSelectedConditions] = useState([]); // Selected conditions state
    const handleAddCondition = (newData) => {
        const updatedData = Add({ firstData: item, newData });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation); // Sort the data
        setItem(sortedData);

        // Add selected condition
        setSelectedConditions([...selectedConditions, newData]);
    };

    const handleRemoveCondition = (conditionToRemove) => {
        const updatedData = Subtract({ firstData: item, newData: conditionToRemove });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        setItem(sortedData);

        // Remove selected condition
        setSelectedConditions(selectedConditions.filter(condition => condition !== conditionToRemove));
    };

    const boxClassName = (conditionData) => {
        return selectedConditions.includes(conditionData) ? "box selected" : "box";
    };

    return (
        <div>
            <hr />
            <h2>우대조건</h2>
            <div>
                {/* Toggle color on click */}
                <span className={boxClassName(temp_data1)} onClick={() => selectedConditions.includes(temp_data1) ? handleRemoveCondition(temp_data1) : handleAddCondition(temp_data1)}>
                    비대면가입
                </span>
                <span className={boxClassName(temp_data2)} onClick={() => selectedConditions.includes(temp_data2) ? handleRemoveCondition(temp_data2) : handleAddCondition(temp_data2)}>
                    재예치
                </span>
                <span className={boxClassName(temp_data3)} onClick={() => selectedConditions.includes(temp_data3) ? handleRemoveCondition(temp_data3) : handleAddCondition(temp_data3)}>
                    뭐라하노
                </span>
                <span className={boxClassName(temp_data4)} onClick={() => selectedConditions.includes(temp_data4) ? handleRemoveCondition(temp_data4) : handleAddCondition(temp_data4)}>
                    모르겠다링~
                </span>

                <hr />
            </div>
            <div>

                <ul>
                    <Optimal data={item} input={input} />
                </ul>
                <hr />
                <hr />

                <h2>우대 금리가 높은 순서에 따른 나열</h2>
                <ul>
                    {item.map((i) => (
                        <li key={i.id}>
                            id: {i.id}, 기본금리: {i.num.toFixed(3)}, 우대적용금리 {i.Calculation.toFixed(3)}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}