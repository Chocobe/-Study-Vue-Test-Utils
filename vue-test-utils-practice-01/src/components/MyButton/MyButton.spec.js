import MyButton from "./MyButton.vue";
import { shallowMount } from "@vue/test-utils";

const generateWrapper = propsData => {
  return shallowMount(MyButton, {
    propsData,
  });
};

describe("MyButton 테스트", () => {
  describe("Event 호출여부 테스트", () => {
    it("click시, EventListener가 호출된다.", () => {
      const onClickSpy = jest.spyOn(MyButton.methods, "onClick");

      const wrapper = generateWrapper();
      wrapper.trigger("click");
      wrapper.trigger("click");

      expect(onClickSpy).toBeCalled();
      onClickSpy.mockRestore();
    });

    it("click시, 'click' 이벤트가 발생된다.", () => {
      const wrapper = generateWrapper();

      wrapper.trigger("click");

      const emittedClick = wrapper.emitted()["click"];

      expect(emittedClick).not.toBeUndefined();
      console.log(emittedClick);
    });
  });
});
