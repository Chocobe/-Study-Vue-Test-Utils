<script>
export default {
  name: "MyEvent",

  methods: {
    emitMyEvent() {
      this.$emit("myEvent", "Hello", "Alice");
    },
  },

  render() {
    return <div></div>;
  },
};
</script>
