import ScreenClickDetector from "./ScreenClickDetector.vue";
import { shallowMount } from "@vue/test-utils";

const generateWrapper = () => {
  return shallowMount(ScreenClickDetector);
};

describe("ScreenClickDetector 테스트", () => {
  it("window에 등록한 click 이벤트가 동작한다.", () => {
    const clickHandlerSpy = jest.spyOn(
      ScreenClickDetector.methods,
      "clickHandler",
    );

    const wrapper = generateWrapper();

    window.dispatchEvent(new MouseEvent("click"));
    window.dispatchEvent(new MouseEvent("click"));
    expect(clickHandlerSpy).toBeCalled();

    console.log(wrapper.emitted()["click"]);

    clickHandlerSpy.mockRestore();
    wrapper.destroy();
  });
});
