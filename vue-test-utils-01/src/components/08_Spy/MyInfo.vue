<script>
import axios from "axios";

export default {
  name: "MyInfo",

  data: () => ({
    info: null,
  }),

  methods: {
    async fetchInfo() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      this.info = data;
    },
  },

  async created() {
    await this.fetchInfo();
  },

  render() {
    return (
      <div>
        이름:
        {this.info ? this.info.name : ""}
      </div>
    );
  },
};
</script>
