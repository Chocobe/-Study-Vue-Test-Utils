import { shallowMount } from "@vue/test-utils";
import MyButton from "../MyButton.vue";

describe("MyButton 테스트", () => {
  it.skip("isAmin === false 일 때, 'Not Authorized' 메시지 출력", () => {
    const wrapper = shallowMount(MyButton, {
      propsData: {
        msg: "제출",
      },
    });

    console.log(wrapper.html());

    expect(wrapper.find("button").text()).toBe("제출");
    expect(wrapper.find("span").text()).toBe("Not Authorized");
  });

  it("isAdmin === true 일 때, 'Admin Privileges' 메시지 출력", () => {
    const wrapper = shallowMount(MyButton, {
      propsData: {
        msg: "제출버튼",
        isAdmin: true,
      },
    });

    console.log(wrapper.html());

    expect(wrapper.find("button").text()).toBe("제출버튼");
    expect(wrapper.find("span").text()).toBe("Admin Privileges");
  });
});
