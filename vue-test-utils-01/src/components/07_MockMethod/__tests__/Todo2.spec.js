import Todo from "../Todo.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

describe("Todo 테스트", () => {
  it("비동기 메서드 테스트", () => {
    const mockResponse = {
      data: {
        title: "delectus aut autem",
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const wrapper = shallowMount(Todo);

    window.setTimeout(() => {
      expect(wrapper.text()).toBe("delectus aut autem");
    });
  });

  it("axios.get 반환값 테스트", async () => {
    const { data } = await axios.get();
    console.log(data.title);
  });
});

// import Todo from "../Todo.vue";
// import { shallowMount } from "@vue/test-utils";
// import axios from "axios";

// describe("Todo 테스트", () => {
//   it("비동기 메서드 테스트", () => {
//     const mockResponse = {
//       data: {
//         title: "delectus aut autem",
//       },
//     };

//     axios.get = jest.fn().mockResolvedValue(mockResponse);

//     const wrapper = shallowMount(Todo);

//     window.setTimeout(() => {
//       expect(wrapper.text()).toBe("delectus aut autem");
//     });
//   });
// });
