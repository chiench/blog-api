<template>
  <div class="container" style="padding: 30px 0">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1>Chỉnh sửa blog</h1>
          </div>
          <div class="panel-body">
            <div class="text-right">
              <a class="btn btn-primary text-right" href="" role="button">
                <router-link to="/blog/index">Quay Lại</router-link>
              </a>
            </div>
          </div>

          <form @submit="update(id)">
            <div class="form-group">
              <label for="tennhomsanpham">Tiêu đề </label>
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                 v-model="product.title"
                aria-describedby="helpId"
                placeholder="..."
              />
            </div>

            <div class="form-group">
              <label for="uutien">Nội dung</label>
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                 v-model="product.content"
                aria-describedby="helpId"
                placeholder="..."
              />
            </div>
            <button type="submit" class="btn btn-primary">Cập nhật</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "form",
  data() {
    return {
      product: {
        title: this.product.title,
        content: this.product.content,
      },

      error: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    validate() {
      let isValid = true;
      this.error = {
        title: "",
        content: "",
      };
      if (!this.product.title) {
        this.error.title = "Chưa nhập dữ liệu à !";
        isValid = false;
      }

      if (!this.product.content) {
        this.error.content = "Chưa nhập dữ liệu à !";
        isValid = false;
      }
      return isValid;
    },

    update() {
      if (this.validate()) {
        this.$request
          .put(`http://127.0.0.1:8000/api/blog/${id}`, this.product)
          .then((res) => {
            if (res.data) {
              this.$router.push({ name: "blogindex" });
              return;
            } else alert("sai roi");
          });
      }
    },
  },
};
</script>
<style>
input {
  width: 30%;
}
</style>