<script>
export default {
  name: "MyForm",

  data: () => ({
    userName: "",
    finished: false,
  }),

  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.finished = true;
    },

    onInput(e) {
      this.userName = e.target.value;
    },
  },

  render() {
    return (
      <div>
        <form on-submit={this.submitHandler}>
          <input
            type="text"
            value={this.userName}
            on-input={this.onInput}
            data-user-name
          />
          <input type="submit" value="제출하기" />
        </form>

        {this.finished ? (
          <div class="form-msg">안녕하세요, {this.userName}님</div>
        ) : (
          ""
        )}
      </div>
    );
  },
};
</script>
