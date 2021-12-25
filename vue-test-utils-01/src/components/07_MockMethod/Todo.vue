<script>
import axios from "axios";

export default {
  name: "Todo",

  data: () => ({
    todo: {
      type: Object,
      default: {},
    },
  }),

  methods: {
    async fetchTodo() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      this.todo = data;
    },
  },

  async created() {
    await this.fetchTodo();
  },

  render() {
    return <div>{this.todo.title}</div>;
  },
};
</script>
