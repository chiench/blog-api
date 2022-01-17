<template>
  <div class="container" style="padding: 30px 0">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1>Thêm blog</h1>
          </div>
          <div class="panel-body">
            <div class="text-right">
              <a class="btn btn-primary text-right" href="" role="button">
                <router-link to="/blog/index">Quay Lại</router-link>
              </a>
            </div>
          </div>
          <form @submit="save()">
            <div class="form-group">
              <label for="tennhomsanpham">Tiêu đề </label>
              <input
                type="text"
                class="form-control"
                v-model="product.title"
                v-bind:class="{ 'is-invalid': error.title }"
                @blur="validate()"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="..."
              />
            </div>
            <div class="is-invalid-feedback" v-if="error.title">
              {{ error.title }}
            </div>
            <div class="form-group">
              <label for="uutien">Nội dung</label>
              <input
                type="text"
                class="form-control"
                v-model="product.content"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="..."
              />
            </div>
            <button type="submit" class="btn btn-primary">Thêm mới</button>
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
        title: "",
        content: "",
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

    save() {
      if (this.validate()) {
        this.$request
          .post("http://127.0.0.1:8000/api/blog", this.product)
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