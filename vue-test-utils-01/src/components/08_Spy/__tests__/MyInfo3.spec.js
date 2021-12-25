import MyInfo from "../MyInfo.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

describe("spyOn() 을 사용한 MyInfo 테스트", () => {
  it("비동기 메서드 테스트", () => {
    const mockResponse = {
      data: {
        name: "Alice",
      },
    };

    const spy = jest.spyOn(axios, "get").mockResolvedValue(mockResponse);

    const wrapper = shallowMount(MyInfo);

    window.setTimeout(() => {
      expect(wrapper.text()).toBe("이름: Alice");
    });

    spy.mockRestore();
  });

  it("axios.get() !== Alice", async () => {
    const response = await axios.get();
    console.log(response.data.name);
  });
});
