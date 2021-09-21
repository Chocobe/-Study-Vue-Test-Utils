import { mount } from "@vue/test-utils";
import Greeting from "../Greeting.vue";

describe("01 Greeting.vue", () => {
  it("greeting 을 렌더링 한다.", () => {
    const wrapper = mount(Greeting);
    expect(wrapper.html().includes("Vue and TDD")).toBeTruthy();
  });
});
