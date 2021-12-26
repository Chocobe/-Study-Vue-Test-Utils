import MySlotCard from "./MySlotCard.vue";
import { shallowMount } from "@vue/test-utils";

const generateWrapper = propsData =>
  shallowMount(MySlotCard, {
    propsData,

    slots: {
      title: `<div class="mySlotCard-header-title">Slot 제목</div>`,
      default: `<div class="mySlotCard-content-text">Slot 컨텐츠</div>`,
      footer: `<div class="mySlotCard-footer">Slot 푸터</div>`,
    },
  });

describe("MySlotCard 테스트", () => {
  it("title slot이 동작한다.", () => {
    const wrapper = generateWrapper({ title: "제목 🐫" });

    expect(wrapper.find(".mySlotCard-header-title").text()).toBe("Slot 제목");
  });

  it("default slot이 동작한다.", () => {
    const wrapper = generateWrapper();

    expect(wrapper.find(".mySlotCard-content-text").text()).toBe("Slot 컨텐츠");
  });

  it("footer slot이 동작한다.", () => {
    const wrapper = generateWrapper();

    expect(wrapper.find(".mySlotCard-footer").text()).toBe("Slot 푸터");
  });
});
