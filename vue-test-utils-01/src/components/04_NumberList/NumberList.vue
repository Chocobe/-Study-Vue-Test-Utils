<script>
export default {
  props: {
    isOdd: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    numberList() {
      return Array.from({ length: 10 }, (_v, i) => i)
        .filter(v => !!(v % 2) === this.isOdd)
        .join(", ");
    },
  },

  render() {
    return <div>{this.numberList}</div>;
  },
};
</script>
