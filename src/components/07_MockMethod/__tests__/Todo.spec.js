import Todo from "../Todo.vue";
import { shallowMount } from "@vue/test-utils";

describe("Todo 테스트", () => {
  it("비동기 메서드 테스트", done => {
    const wrapper = shallowMount(Todo);
    setTimeout(() => {
      expect(wrapper.text()).toBe("delectus aut autem");
      done();
    }, 1000);
  });
});
