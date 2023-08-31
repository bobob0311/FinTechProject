import { useState } from "react"
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




const data = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
]

//최대한도
const inputt = 12000000



export default function Toggler({ name }) {
    const [Toggle, setToggle] = useState(true);
    // 여러 useState를 써서 여러개를 동시에 할 수 있다 하지만 그걸 어떻게 하나만 보여줄것인가?
    // 계산만해주는 것을 만들고 return 은 하나만??
    // 씨@발 줫같네 그냥 ㅋㅋ;;
    // 하나 클릭하면 바뀌고 계산만 하고 return 값을 일정한 값으로만 하면서 
    // 그 일정한 포맷만 출력하는 함수를 하나 만들어야 될듯? 
    // 리턴만 받으면 되는 거잖아 ~~
    const toggleState = () => setToggle(!Toggle);
    return (
        <>  <button onClick={toggleState}>{name}</button>
            <span>
                {Toggle ?
                    <Add firstData={first_data} newData={data} input={inputt} />
                    :
                    <Subtract firstData={first_data} newData={data} input={inputt} />}
            </span>
        </>
    )
}