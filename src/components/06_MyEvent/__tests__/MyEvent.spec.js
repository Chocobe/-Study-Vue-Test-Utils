import MyEvent from "../MyEvent.vue";
import { shallowMount } from "@vue/test-utils";

describe("MyEvent 테스트", () => {
  it("myEvent 발생", () => {
    const wrapper = shallowMount(MyEvent);
    wrapper.vm.emitMyEvent();

    expect(wrapper.emitted().myEvent[0]).toEqual(["Hello", "Alice"]);
  });
});
