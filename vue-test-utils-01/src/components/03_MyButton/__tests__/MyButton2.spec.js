import MyButton from "../MyButton.vue";
import { shallowMount } from "@vue/test-utils";

const factoryForMyButton = props => {
  return shallowMount(MyButton, {
    propsData: {
      ...props,
    },
  });
};

describe("MyButton 테스트", () => {
  it("isAdmin === false 테스트", () => {
    const wrapper = factoryForMyButton({
      msg: "제출Button",
    });

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("제출Button");
  });

  it("isAdmin === true 테스트", () => {
    const wrapper = factoryForMyButton({
      msg: "제출하기",
      isAdmin: true,
    });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("제출하기");
  });
});
