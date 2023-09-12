import React, { useState, useEffect } from 'react';
import Optimal from "./Timal";
import './Box.css'
import Condition from "./Condition";
import ListItem from "./ListItem";

// first_item
// second_item

export default function Show({ input, deadline }) {
    const [firstItem, setFirstItem] = useState([]);
    useEffect(() => {
        fetch("/api/hello")
            .then((res) => { return res.json(); })
            .then((data) => { setFirstItem(data); })
    }, []);



    const temp = first_item.map(data => ({ ...data, Calculation: data.num }))
    const now_item = temp.sort((a, b) => b.Calculation - a.Calculation);

    const [item, setItem] = useState(now_item);

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
                    {item.slice(0, 5).map((i) => (
                        <ListItem itemKey={i.id} num1={i.num.toFixed(3)} num2={i.Calculation.toFixed(3)} />
                    ))}
                </ul>


            </div>
        </div>
    );
}
