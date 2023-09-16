import React, { useState } from "react";

export default function ListItem({ id, bank_name, item_name, interest_rate, method, who, ca_interest_rate, link }) {
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
            <li key={id} onClick={handleToggle}>
                은행이름: {bank_name} 상품이름: {item_name} 기본금리: {interest_rate}, 우대적용금리 {ca_interest_rate}
            </li>

            {/* 버튼에 onClick 이벤트 추가 */}
            {toggle &&
                <>
                    <div>
                        가입 방법 {method}
                    </div>
                    <div>
                        가입대상 {who}
                    </div>
                    {link !== null && (
                        <div>
                            <a href={link} target="_blank"></a>
                        </div>)}

                </>
            }

        </>

    )
}