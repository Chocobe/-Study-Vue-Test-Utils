<template>
  <div class="mySlotCard">
    <header class="mySlotCard-header">
      <slot name="title">
        <h1 class="mySlotCard-header-title">{{ title }}</h1>
      </slot>
    </header>

    <section class="mySlotCard-content" @click="onClick">
      <slot>
        <div class="mySlotCard-content-text">
          {{ content }}
        </div>
      </slot>
    </section>

    <footer class="mySlotCard-footer">
      <slot name="footer">
        {{ footer }}
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    },

    footer: {
      type: String,
      default: "",
    },
  },

  methods: {
    onClick() {
      const { title, content, footer } = this;

      this.$emit("click", {
        title,
        content,
        footer,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.mySlotCard {
  &-header {
    &-title {
      text-shadow: 0 3px 6px #f0f400;
    }
  }

  &-content {
    margin: 10px 0;

    &-text {
      color: #ff1493;
    }
  }

  &-footer {
    color: #383841;
    font-size: 0.825rem;
    font-weight: 900;
  }
}
</style>
