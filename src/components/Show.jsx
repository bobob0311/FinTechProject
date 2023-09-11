import React, { useState } from "react";
import Optimal from "./Timal";
import './Box.css'
import Condition from "./Condition";
import ListItem from "./ListItem";

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

    const handleNewItem = (newItem) => {
        setItem(newItem);
    };

    return (
        <div>
            <hr />
            <h2>우대조건</h2>
            <div>
                {/* 각 조건 컴포넌트를 렌더링 */}
                <Condition name={"재예치"} data={temp_data1} nowdata={item} onDataChange={handleNewItem} />
                <Condition name={"비대면가입"} data={temp_data2} nowdata={item} onDataChange={handleNewItem} />
                <Condition name={"뭐라하노"} data={temp_data3} nowdata={item} onDataChange={handleNewItem} />
                <Condition name={"모르겠다~"} data={temp_data4} nowdata={item} onDataChange={handleNewItem} />
            </div>
            <div>
                <ul>
                    <Optimal data={item} input={input} />
                </ul>
                <hr />
                <hr />
                <h2>우대 금리가 높은 순서에 따른 나열</h2>
                <ul>
                    <ul>
                        {item.slice(0, 6).map((i) => (
                            <ListItem itemKey={i.id} num1={i.num.toFixed(3)} num2={i.Calculation.toFixed(3)} />
                        ))}
                    </ul>
                    {/* <OneItem data={item} number={1} />
                    {item.map((i) => (
                        <li key={i.id}>
                            id: {i.id}, 기본금리: {i.num.toFixed(3)}, 우대적용금리 {i.Calculation.toFixed(3)}
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    );
}
