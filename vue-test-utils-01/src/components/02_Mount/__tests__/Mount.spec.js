import { shallowMount, mount } from "@vue/test-utils";
import Child from "../Child.vue";
import Parent from "../Parent.vue";

describe("02 Mount", () => {
  it("Child의 html() 비교", () => {
    const shallowWrapper = shallowMount(Child);
    const mountWrapper = mount(Child);

    console.log(shallowWrapper.html());
    console.log(mountWrapper.html());
  });

  it.only("Parent의 html() 비교", () => {
    const shallowWrapper = shallowMount(Parent);
    const mountWrapper = mount(Parent);

    console.log(shallowWrapper.html());
    console.log(mountWrapper.html());
  });
});
