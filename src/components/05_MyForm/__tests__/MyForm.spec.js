import MyForm from "../MyForm.vue";
import { shallowMount } from "@vue/test-utils";

const runTest = async (
  callback,
  options = {
    attachTo: document.body,
  },
) => {
  const wrapper = shallowMount(MyForm, options);

  await callback(wrapper);

  wrapper.destroy();
};

describe("MyForm 테스트", () => {
  it("버튼 클릭 시, 메시지 출력", () => {
    runTest(
      async wrapper => {
        wrapper.find("[data-user-name]").element.value = "Alice";
        await wrapper.find("[data-user-name]").trigger("input");
        await wrapper.find("[type='submit']").trigger("click");

        expect(wrapper.find(".form-msg").text()).toBe("안녕하세요, Alice님");
      },
      { attachTo: document.body },
    );
  });
});
