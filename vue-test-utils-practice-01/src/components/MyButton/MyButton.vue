<template>
  <button class="myButton" @click="onClick">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "버튼",
    },
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
