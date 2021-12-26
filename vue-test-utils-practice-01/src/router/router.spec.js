import router from "./";
import VueRouter from "vue-router";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(VueRouter);

const generateWrapper = () => {
  return shallowMount(
    {
      template: `
        <div>
          <div class="name">{{ $route.name }}</div>
          <div class="path">{{ $route.path }}</div>
          <div class="params">{{ $route.params }}</div>
          <div class="query">{{ $route.query }}</div>
        </div>
      `,
    },
    {
      localVue,
      router,
    },
  );
};

describe("Router 테스트", () => {
  it("기본 Route가 동작한다.", async () => {
    const wrapper = generateWrapper();

    // router.push({ path: "/" }) 의 mounted 시점까지 대기
    await wrapper.vm.$nextTick();
    // localVue의 mounted 시점까지 대기
    await wrapper.vm.$nextTick();

    // 총 2번의 vm.$nextTick() 이 있어야 router의 값이 정상적으로 반영된다.

    const nameWrapper = wrapper.find(".name");
    const pathWrapper = wrapper.find(".path");
    const paramsWrapper = wrapper.find(".params");
    const queryWrapper = wrapper.find(".query");

    expect(nameWrapper.text()).toBe("Home");
    expect(pathWrapper.text()).toBe("/");
    expect(paramsWrapper.text()).toBe(JSON.stringify({}));
    expect(queryWrapper.text()).toBe(JSON.stringify({}));
  });

  it("About Route가 동작한다.", async () => {
    const wrapper = generateWrapper();

    wrapper.vm.$router.push({
      name: "About",
    });

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const nameWrapper = wrapper.find(".name");
    const pathWrapper = wrapper.find(".path");
    const paramsWrapper = wrapper.find(".params");
    const queryWrapper = wrapper.find(".query");

    expect(nameWrapper.text()).toBe("About");
    expect(pathWrapper.text()).toBe("/about");
    expect(paramsWrapper.text()).toBe(JSON.stringify({}));
    expect(queryWrapper.text()).toBe(JSON.stringify({}));
  });

  it("/home/:id ROuter의 params.id 가 정상 반영된다.", async () => {
    const wrapper = generateWrapper();

    wrapper.vm.$router.push({
      name: "HomeID",
      params: {
        id: 333,
      },
    });

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const nameWrapper = wrapper.find(".name");
    const pathWrapper = wrapper.find(".path");
    const paramsWrapper = wrapper.find(".params");
    const queryWrapper = wrapper.find(".query");

    expect(nameWrapper.text()).toBe("HomeID");
    expect(pathWrapper.text()).toBe("/home/333");
    expect(JSON.parse(paramsWrapper.text())).toEqual({ id: 333 });
    expect(JSON.parse(queryWrapper.text())).toEqual({});
  });
});
