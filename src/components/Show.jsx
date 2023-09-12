import React, { useState, useEffect } from 'react';
import Optimal from "./Timal";
import './Box.css'
import Condition from "./Condition";
import ListItem from "./ListItem";


export default function Show({ input, deadline }) {
    const [firstItem, setFirstItem] = useState([]);
    useEffect(() => {
        fetch("/api/hello") // 첫번재 입력
            .then((res) => { return res.json(); })
            .then((data) => { setFirstItem(data); })
    }, []);

    const [secondItem, setSecondItem] = useState([]);
    useEffect(() => {
        fetch("/api/hello") // 두번째 입력
            .then((res) => { return res.json(); })
            .then((data) => { setSecondItem(data); })
    }, []);

    const temp = firstItem.map(data => ({ ...data, Calculation: data.num }))
    const nowItem = temp.sort((a, b) => b.Calculation - a.Calculation);

    const [item, setItem] = useState(nowItem);

    const handleNewItem = (newItem) => {
        setItem(newItem);
    };

    return (
        <div>
            <hr />
            <h2>우대조건</h2>
            <div>
                {/* 각 조건 컴포넌트를 렌더링 */}
                <Condition name={"재예치"} data={secondItem} nowdata={item} what={재예치의 이름} onDataChange={handleNewItem} />
                <Condition name={"비대면가입"} data={secondItem} nowdata={item} what={비대면가입의 이름} onDataChange={handleNewItem} />
                <Condition name={"뭐라하노"} data={secondItem} nowdata={item} what={ } onDataChange={handleNewItem} />
                <Condition name={"모르겠다~"} data={secondItem} nowdata={item} what={ } onDataChange={handleNewItem} />
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
                        <ListItem bank_name={i.bank_name} item_name={i.item_name} interest_rate={i.interest_rate.toFixed(3)} ca_interest_rate={i.ca_interest_rate.toFixed(3)} who={i.who} method={i.method} />
                    ))}
                </ul>


            </div>
        </div>
    );
}
