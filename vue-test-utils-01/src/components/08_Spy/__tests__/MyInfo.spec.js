import MyInfo from "../MyInfo.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

describe("MyInfo 테스트", () => {
  it("비동기 메서드 테스트", () => {
    const mockResponse = {
      data: {
        name: "Alice",
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const wrapper = shallowMount(MyInfo);

    window.setTimeout(() => {
      expect(wrapper.text()).toBe("이름: Alice");
    });
  });
});
