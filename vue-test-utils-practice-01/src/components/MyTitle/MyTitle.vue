<template>
  <h2
    class="myTitle"
    :style="{
      color: color,
      'background-color': bgColor,
    }"
  >
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "#383841",
    },

    bgColor: {
      type: String,
      default: "inherit",
    },
  },
};
</script>
