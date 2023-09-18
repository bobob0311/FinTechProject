// 사용자가 입력한 금액과 상품의 최대한도,금리를 고려하여 최적의 상품을 나열
import "./Timal.css";


export default function Optimal({ data, input }) {
    console.log(data)
    return (
        <>
            <div>
                {data.map((item) => {
                    if (input > 0) {
                        input -= item.moneyLoe;
                        if (input > 0) {
                            return (
                                <ul className="custom-list">
                                    <li className="list-item">
                                        <span className="label">은행이름:</span>
                                        <span className="value">{item.bank_name}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">기한:</span>
                                        <span className="value">{item.depositPeriod}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">기본금리:</span>
                                        <span className="value">{item.interest_rate}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">우대금리:</span>
                                        <span className="value">{item.ca_interest_rate}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">넣어야되는 금액:</span>
                                        <span className="value">{item.moneyLoe}</span>
                                    </li>
                                    <hr />
                                </ul>
                            );
                        } else {
                            return (
                                <ul className="custom-list">
                                    <li className="list-item">
                                        <span className="label">은행이름:</span>
                                        <span className="value">{item.bank_name}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">기한:</span>
                                        <span className="value">{item.depositPeriod}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">기본금리:</span>
                                        <span className="value">{item.interest_rate}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">우대금리:</span>
                                        <span className="value">{item.ca_interest_rate}</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="label">넣어야되는 금액:</span>
                                        <span className="value">{input + item.moneyLoe}</span>
                                    </li>
                                </ul>

                            );

                        }
                    }
                })}
            </div>
        </>
    )
}