<template>
  <div>
    <div class="container" style="padding: 30px 0">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h1>Danh mục blog</h1>
            </div>
            <div class="panel-body">
              <div class="text-right">
                <div class="bt">
                  <a class="btn btn-primary" href="" role="button">
                    <router-link to="/blog/add">Thêm mới</router-link>
                  </a>
                </div>

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Content</th>

                      <th scope="col">Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="index" v-for="(item, index) in blog">
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.title }}</td>
                      <td>{{ item.content }}</td>

                      <td class="text-right">
                        <a
                          style=""
                          name=""
                          id=""
                          class="btn btn-sm btn-primary"
                          href=""
                          role="button"
                        >
                          <router-link to="/blog/edit"
                            ><i class="fa fa-edit"></i></router-link
                        ></a>
                        <button
                          name=""
                          @click="dele(blog.id)"
                          id=""
                          class="btn btn-sm btn-danger btndelete"
                          href=""
                          role="button"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      blog: [],
    };
  },
  created() {
    this.getall();
  },
  methods: {
    dele(id) {
      this.$request
        .delete(`http://localhost:8000/api/blog/${id}`)
        .then((res) => {
          alert(" Delete Complete");
          this.getall();
        });
    },

    getall() {
      this.$request.get("http://localhost:8000/api/blog").then((res) => {
        this.blog = res.data;
      });
    },
  },
};
</script>
<style >
a {
  margin-left: 10px;
  color: aliceblue;
}

nav svg {
  height: 20px;
}
nav .hidden {
  display: block !important;
}
.bt {
  margin-bottom: 10px;
}
</style>
