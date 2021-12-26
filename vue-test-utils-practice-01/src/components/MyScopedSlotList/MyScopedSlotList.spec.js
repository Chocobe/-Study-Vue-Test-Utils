import MyScopedSlotList from "./MyScopedSlotList.vue";
import { shallowMount } from "@vue/test-utils";

const generateWrapper = propsData =>
  shallowMount(MyScopedSlotList, {
    propsData,

    scopedSlots: {
      title: "<div class='test-title'>{{ props.title }}</div>",

      default({ item }) {
        return (
          <div class="test-item">
            {item.id}-{item.text}
          </div>
        );
      },

      footer({ footer }) {
        return <div class="test-footer">🐫 {footer}</div>;
      },
    },
  });

const propsData = {
  title: "테스트 제목",
  items: [
    {
      id: 1000,
      text: "테스트 컨텐츠 🐫",
    },
    {
      id: 2000,
      text: "테스트 컨텐츠 🐫🐫",
    },
    {
      id: 3000,
      text: "테스트 컨텐츠 🐫🐫🐫",
    },
  ],

  footer: "테스트 푸터 🚀",
};

describe("MyScopedSlotList 테스트", () => {
  it("title slot이 동작한다.", () => {
    const wrapper = generateWrapper(propsData);

    expect(wrapper.find(".test-title").text()).toBe("테스트 제목");
  });

  it("item slot이 동작한다.", () => {
    const wrapper = generateWrapper(propsData);
    const itemWrappers = wrapper.findAll(".test-item");

    expect(itemWrappers.at(0).text()).toBe("1000-테스트 컨텐츠 🐫");
    expect(itemWrappers.at(1).text()).toBe("2000-테스트 컨텐츠 🐫🐫");
    expect(itemWrappers.at(2).text()).toBe("3000-테스트 컨텐츠 🐫🐫🐫");
  });

  it("footer slot이 동작한다.", () => {
    const wrapper = generateWrapper(propsData);
    const footerWrapper = wrapper.find(".test-footer");

    expect(footerWrapper.text()).toBe("🐫 테스트 푸터 🚀");
  });
});
