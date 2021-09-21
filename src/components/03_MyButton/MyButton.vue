<script>
export default {
  name: "MyButton",

  props: {
    msg: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  render() {
    const span = this.isAdmin ? "Admin Privileges" : "Not Authorized";

    return (
      <div>
        <span style="margin-right: 10px;">{span}</span>
        <button>{this.msg}</button>
      </div>
    );
  },
};
</script>
