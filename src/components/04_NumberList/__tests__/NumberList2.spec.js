import NumberList from "../NumberList.vue";

describe("NumberList 테스트", () => {
  it("isOdd === false 일 때, 짝수 출력", () => {
    const mockThis = { isOdd: false };

    expect(NumberList.computed.numberList.call(mockThis)).toBe("0, 2, 4, 6, 8");
  });

  it("isOdd === true 일 때, 홀수 출력", () => {
    const thisArg = { isOdd: true };

    expect(NumberList.computed.numberList.call(thisArg)).toBe("1, 3, 5, 7, 9");
  });
});
