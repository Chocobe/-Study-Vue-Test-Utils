<template>
  <div class="about">
    <MyScopedSlotList title="제목" :items="items" footer="푸터" />

    <hr style="margin: 20px 0" />

    <MyScopedSlotList title="제목" :items="items" footer="푸터">
      <template #title="{ title }">
        <h1 style="color: #ff1493">{{ title }}</h1>
      </template>

      <template #default="{ item: { id, text } }">
        <span style="color: #03a9f4">ID: {{ id }}</span> |

        <span style="color: #03a9f4; font-weight: 900">
          {{ text }}
        </span>
      </template>

      <template #footer="{ footer }">
        <div style="color: #006400; font-weight: 900; font-size: 2rem">
          {{ footer }}
        </div>
      </template>
    </MyScopedSlotList>
  </div>
</template>

<script>
import MyScopedSlotList from "@/components/MyScopedSlotList/MyScopedSlotList.vue";

export default {
  data: () => ({
    items: [
      {
        id: 100,
        text: "Slot Item 1",
      },
      {
        id: 200,
        text: "Slot Item 2",
      },
      {
        id: 300,
        text: "Slot Item 3",
      },
    ],
  }),

  components: {
    MyScopedSlotList,
  },
};
</script>
