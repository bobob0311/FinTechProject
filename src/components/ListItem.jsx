import React, { useState } from "react";

export default function ListItem({
    id
    , bank_name
    , item_name
    , depositPeriod
    , interest_rate
    , moneyGoe
    , moneyLoe
    , preferential_condition
    , preferential_interest_rate
    , method
    , who
    , ca_interest_rate
}) {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        if (toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    return (
        <>
            <li key={id}>
                은행이름: {bank_name} 상품이름: {item_name} 기본금리: {interest_rate}, 우대적용금리 {ca_interest_rate}      <button onClick={handleToggle}>Show !!!!</button>
            </li>
            {/* 버튼에 onClick 이벤트 추가 */}
            {toggle &&
                <div>
                </div>} {/* toggle 값에 따라 정보를 표시 */}

        </>

    )
}