import { shallowMount } from "@vue/test-utils";
import NumberList from "../NumberList.vue";

const factoryForNumberList = props => {
  return shallowMount(NumberList, {
    propsData: {
      ...props,
    },
  });
};

describe("NumberList 테스트", () => {
  it("isOdd === false 일 때, 짝수 출력", () => {
    const wrapper = factoryForNumberList();

    expect(wrapper.text()).toBe("0, 2, 4, 6, 8");
  });

  it("isOdd === true 일 때, 홀수 출력", () => {
    const wrapper = factoryForNumberList({ isOdd: true });

    expect(wrapper.text()).toBe("1, 3, 5, 7, 9");
  });
});
