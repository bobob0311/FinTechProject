// 우대금리적용을 해제하면 그 키워드에 맞는 상품을 골라 적용되기 전으로 되돌려주는 함수

export default function Subtract({ firstData, newData }) {
    const resultMap = {};

    // 복제된 기존 데이터로 resultMap 초기화
    for (const item of firstData) {
        resultMap[item.id] = { ...item };
    }

    // 새로운 데이터를 기존 데이터에 더함
    for (const item2 of newData) {
        if (resultMap[item2.id]) {
            resultMap[item2.id].ca_interest_rate -= item2.preferential_interest_rate;
        }
    }

    // resultMap을 배열로 변환하여 반환
    const updatedData = Object.values(resultMap);
    return updatedData;
}