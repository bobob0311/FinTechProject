import React, { useState } from "react";

export default function ListItem({ itemKey, num1, num2 }) {
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
            <li key={itemKey}>
                id: {itemKey}, 기본금리: {num1}, 우대적용금리 {num2}      <button onClick={handleToggle}>Show !!!!</button>
            </li>
            {/* 버튼에 onClick 이벤트 추가 */}
            {toggle && <div>추가 정보 표시</div>} {/* toggle 값에 따라 정보를 표시 */}

        </>

    )
}