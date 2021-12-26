import MyTitle from "./MyTitle.vue";
import { shallowMount } from "@vue/test-utils";

const generateWrapper = propsData => {
  return shallowMount(MyTitle, {
    propsData,
  });
};

describe("MyTitle 컴포넌트 테스트", () => {
  describe("props 테스트", () => {
    describe("props default value 테스트", () => {
      it("title 기본값 === ''", () => {
        const wrapper = generateWrapper();

        expect(wrapper.vm.title).toBe("");
      });

      it("color 기본값 === '#383841'", () => {
        const wrapper = generateWrapper();

        expect(wrapper.vm.color).toBe("#383841");
      });

      it("bgColor 기본값 === 'inherit'", () => {
        const wrapper = generateWrapper();

        expect(wrapper.vm.bgColor).toBe("inherit");
      });
    });

    describe("props value 테스트", () => {
      it("title props가 반영된다.", () => {
        const wrapper = generateWrapper({ title: "테스트 타이틀" });

        expect(wrapper.vm.title).toBe("테스트 타이틀");
      });

      it("color props가 반영된다.", () => {
        const wrapper = generateWrapper({ color: "#03a9f4" });

        expect(wrapper.vm.color).toBe("#03a9f4");
      });

      it("bgColor props가 반영된다.", () => {
        const wrapper = generateWrapper({ bgColor: "#ff1493" });

        expect(wrapper.vm.bgColor).toBe("#ff1493");
      });
    });
  });
});
