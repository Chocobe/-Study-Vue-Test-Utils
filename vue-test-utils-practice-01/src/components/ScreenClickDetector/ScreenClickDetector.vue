<template>
  <div>스크린을 클릭 하세요.</div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      this.$emit("click", "클릭🐫");
    },
  },

  mounted() {
    window.addEventListener("click", this.clickHandler);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.clickHandler);
  },
};
</script>
