<template>
  <div class="myScopedSlotList">
    <header class="myScopedSlotList-header">
      <slot name="title" :title="title">
        <h1 class="myScopedSlotList-header-title">
          {{ title }}
        </h1>
      </slot>
    </header>

    <ul class="myScopedSlotList-list">
      <li v-for="(item, idx) in items" :key="idx">
        <slot :item="item">
          <div class="myScopedSlotList-list-item">
            <small>{{ item.id }}</small>
            {{ item.text }}
          </div>
        </slot>
      </li>
    </ul>

    <footer class="myScopedSlotList-footer">
      <slot name="footer" :footer="footer">
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

    items: {
      type: Array,
      default: () => [],
    },

    footer: {
      type: String,
      default: "",
    },
  },
};
</script>
