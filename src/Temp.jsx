import { useState } from "react";
import { v4 as uuid } from "uuid";

// 배열에 하나씩 추가하는 방법

export default function Temp() {
    const [str, setStr] = useState([{ id: uuid(), Str: "hi" }])
    const addStr = () => {
        setStr((oldStr) => [...oldStr, { id: uuid(), Str: "bye" }]);
    };

    const deleteStr = (id) => {
        setStr(prevStr => {
            return prevStr.filter(e => e.id !== id)
        });

    };

    return (
        <div>
            {str.map((e) => (
                <span
                    onClick={() => deleteStr(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}
                >

                    {e.Str}
                </span>
            ))}
            <button onClick={addStr}> Push</button>
        </div>
    )
};
