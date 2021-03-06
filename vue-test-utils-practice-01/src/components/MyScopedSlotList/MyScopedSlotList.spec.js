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
        return <div class="test-footer">ð« {footer}</div>;
      },
    },
  });

const propsData = {
  title: "íì¤í¸ ì ëª©",
  items: [
    {
      id: 1000,
      text: "íì¤í¸ ì»¨íì¸  ð«",
    },
    {
      id: 2000,
      text: "íì¤í¸ ì»¨íì¸  ð«ð«",
    },
    {
      id: 3000,
      text: "íì¤í¸ ì»¨íì¸  ð«ð«ð«",
    },
  ],

  footer: "íì¤í¸ í¸í° ð",
};

describe("MyScopedSlotList íì¤í¸", () => {
  it("title slotì´ ëìíë¤.", () => {
    const wrapper = generateWrapper(propsData);

    expect(wrapper.find(".test-title").text()).toBe("íì¤í¸ ì ëª©");
  });

  it("item slotì´ ëìíë¤.", () => {
    const wrapper = generateWrapper(propsData);
    const itemWrappers = wrapper.findAll(".test-item");

    expect(itemWrappers.at(0).text()).toBe("1000-íì¤í¸ ì»¨íì¸  ð«");
    expect(itemWrappers.at(1).text()).toBe("2000-íì¤í¸ ì»¨íì¸  ð«ð«");
    expect(itemWrappers.at(2).text()).toBe("3000-íì¤í¸ ì»¨íì¸  ð«ð«ð«");
  });

  it("footer slotì´ ëìíë¤.", () => {
    const wrapper = generateWrapper(propsData);
    const footerWrapper = wrapper.find(".test-footer");

    expect(footerWrapper.text()).toBe("ð« íì¤í¸ í¸í° ð");
  });
});
